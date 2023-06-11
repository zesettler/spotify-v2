import { Price } from "@/types";

export const getUrl = () => {
    let url =
        process.env.NEXT_PUBLICK_SITE_URL ??
        process.env.NEXT_PUBLIC_VERCEL_URL ??
        'http://localhost:300/';

    url = url.includes('http') ? url : `https://${url}`;
    url = url.charAt(url.length - 1) === '/' ? url : `${url}/`;

    return url;
};

export const postData = async ({
    url,
    data
}: {
    url: string;
    data?: { price: Price }
}) => {
    console.log('POST REQUEST', url, data);

    const res: Response = await fetch(url, {
        headers: new Headers({ 'Content-Type': 'application/json' }),
        credentials: 'same-origin',
        body: JSON.stringify(data)
    });

    if (!res.ok) {
        console.log('Error in POST', { url, data, res });

        throw new Error(res.statusText);
    }

    return res.json();
};

export const toDateTime = (secs: number) => {
    var t = new Date('1970-01-01T00:30:00Z');
    t.setSeconds(secs);
    
    return t;
};