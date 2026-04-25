export default async function handler(request, context) {
    const url = new URL(request.url);

    if (url.hostname === 'thesis.aun.sh') {
        return new Response(null, {
            status: 302,
            headers: {
                location: 'https://drive.google.com/file/d/16OJgNEtry66OZOVhmm6F2xEvsaN8kYtj/view?usp=sharing',
            },
        });
    }

    return context.next();
}

export const config = {
    path: '/*',
};