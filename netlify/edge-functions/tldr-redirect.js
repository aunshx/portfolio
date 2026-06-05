export default async function handler(request, context) {
    const url = new URL(request.url);

    if (url.hostname === 'tldr.aun.sh') {
        return new Response(null, {
            status: 302,
            headers: {
                location: 'https://aun.sh/tldr',
            },
        });
    }
    if (url.hostname === 'verify.aun.sh') {
        return new Response(null, {
            status: 302,
            headers: {
                location: 'https://verify-dossier.netlify.app',
            },
        });
    }

    return context.next();
}

export const config = {
    path: '/*',
};