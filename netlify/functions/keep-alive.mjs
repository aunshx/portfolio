import { schedule } from '@netlify/functions';

// Pings the Render backend so its free-tier instance doesn't sleep
// (Render spins down after ~15 min idle, causing slow cold starts on the
// verify-dossier demo). We run every 14 minutes to stay under that window.

const DEFAULT_BACKEND = 'https://verify-dossier-api.onrender.com';

async function ping(url) {
    const res = await fetch(url, {
        method: 'GET',
        redirect: 'follow',
        // Don't hang the whole function if the backend is mid-cold-start.
        signal: AbortSignal.timeout(25000),
    });
    return res.status;
}

const keepAlive = async () => {
    const base = (process.env.RENDER_BACKEND_URL || DEFAULT_BACKEND).replace(/\/+$/, '');

    // Try /health first, fall back to / (the backend may not have /health yet).
    const targets = [`${base}/health`, `${base}/`];

    for (const target of targets) {
        try {
            const status = await ping(target);
            if (status === 200) {
                console.log(`keep-alive: ${target} -> ${status} (ok)`);
                return { statusCode: 200 };
            }
            console.log(`keep-alive: ${target} -> ${status} (non-200, trying next)`);
        } catch (err) {
            console.log(`keep-alive: ${target} -> fetch error: ${err.message}`);
        }
    }

    // Every target failed or returned non-200. Log already happened above.
    // Still return 200 so Netlify doesn't mark the schedule as failing.
    console.log('keep-alive: no target returned 200, returning 200 anyway');
    return { statusCode: 200 };
};

export const handler = schedule('*/14 * * * *', keepAlive);
