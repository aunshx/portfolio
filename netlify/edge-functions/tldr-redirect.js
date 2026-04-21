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

    return context.next();
}

export const config = {
    path: '/*',
};