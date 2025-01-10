import sgMail from '@sendgrid/mail'

export async function POST(request: Request): Promise<Response> {
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    console.log(SENDGRID_API_KEY);
    sgMail.setApiKey(`${SENDGRID_API_KEY}`);
    const body = await request.json();
    await sgMail.send(body);
    return new Response(JSON.stringify({success: true}));
}