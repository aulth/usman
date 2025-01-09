import sgMail from '@sendgrid/mail'
sgMail.setApiKey(`${process.env.SENDGRID_API_KEY}`);

export async function POST(request: Request): Promise<Response> {
    const body = await request.json();
    try {
        const response = await sgMail.send(body);
        return new Response(JSON.stringify({success: true}), {status: response[0].statusCode});
    } catch (error) {
        return new Response(JSON.stringify({success: false}), {status: 500})
    }
}