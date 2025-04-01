import EmailTemplate from '@/lib/email/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json({ error: 'Todos los campos son obligatorios' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Formulario de contacto <contacto@ministerioacacia.org>',
      to: process.env.RECEIVER_EMAIL || 'acaciateam7@gmail.com',
      subject: `Nuevo mensaje de ${name}. Formulario de contacto.`,
      react: EmailTemplate({
        name,
        email,
        message,
      }),
    });

    if (error) {
      console.error(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.error(error);
    return Response.json({ error }, { status: 500 });
  }
}
