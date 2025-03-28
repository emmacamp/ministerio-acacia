'use server';

import { Heading, Img } from '@/components';
import { ContactForm } from '@/components/ContacForm';
import { sendEmail } from '@/lib/gmail-contact-form';
import Link from 'next/link';
export async function Contact() {
  async function handleContactForm(formData: FormData) {
    'use server';

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    try {
      const emailBody = `
     <html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
        color: #333;
      }
      .container {
        max-width: 600px;
        margin: 40px auto;
        background-color: #ffffff;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 30px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
      }
      h1 {
        font-size: 22px;
        color: #222;
        margin-bottom: 25px;
      }
      .info-row {
        margin-bottom: 15px;
      }
      .label {
        display: inline-block;
        font-weight: bold;
        margin-bottom: 5px;
        color: #555;
      }
      .message {
        white-space: pre-line;
        padding: 15px;
        background-color: #f9f9f9;
        border-left: 4px solid #0073e6;
        border-radius: 4px;
        font-size: 15px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Nuevo mensaje de contacto</h1>
      <div class="info-row">
        <div class="label">Nombre:</div>
        <div>${name}</div>
      </div>
      <div class="info-row">
        <div class="label">Email:</div>
        <div>${email}</div>
      </div>
      <div class="info-row">
        <div class="label">Mensaje:</div>
        <div class="message">${message.replace(/\n/g, '<br>')}</div>
      </div>
    </div>
  </body>
</html>
    `;

      // Enviar el correo usando la API de Gmail
      const to = process.env.NOTIFICATION_EMAIL as string;
      await sendEmail(to, `Nuevo mensaje de contacto de ${name}.`, emailBody);
      return { success: true, message: 'Email enviado correctamente' };
    } catch (error) {
      console.error('Error al enviar el email:', error);
      return { success: false, message: 'Error al enviar el email' };
    }
  }

  return (
    <div className='relative bg-white-a700 h-[750px] mt-10 tablet:h-[450px]'>
      <div id='contacto' className='mx-auto flex-1'>
        <Img
          src='home/contact.jpeg'
          width={1440}
          height={464}
          alt='contact image home section'
          className='h-[464px] w-full object-cover md:h-auto tablet:hidden'
        />
        <div className='flex tablet:hidden justify-center bg-blue_gray-700 py-[58px] md:py-5'>
          <div className='container-xs mb-[34px] flex items-start justify-center gap-[30px] px-14 md:flex-col md:px-5'>
            <div data-aos='fade-up' className='flex w-[24%] flex-col items-start gap-2 md:w-full'>
              <Heading size='heading5' as='h2' className='!text-[22px] !font-bold'>
                Número Telefónico
              </Heading>
              <a href='tel:8298564016' className='!text-white-a700'>
                (829) 856 - 4016
              </a>
            </div>
            <div
              data-aos='fade-up'
              className='flex w-[68%] flex-col items-start gap-2.5 self-center md:w-full'
            >
              <Link href='#'>
                <Heading size='heading5' as='h3' className='!text-[22px] !font-bold'>
                  Correo Electrónico
                </Heading>
              </Link>
              <div className='flex items-start gap-1 self-stretch'>
                <a href='mailto:acaciateam7@gmail.com' className='!text-white-a700'>
                  acaciateam7@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm
        handleContactForm={handleContactForm}
        className='absolute tablet:relative tablet:mx-auto tablet:top-auto tablet:right-auto tablet:my-0 bottom-0 right-[14%] top-0 my-auto flex h-max w-[32%] flex-col tablet:w-[80%] tablet:items-center items-start rounded-[20px] bg-white-a700 p-[50px] tablet:p-5 max-w-[500px] tablet:border shadow'
      />
    </div>
  );
}
