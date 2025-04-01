import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, email, message }) => (
  <div
    style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#333',
      margin: '0 auto',
      padding: '20px',
      maxWidth: '600px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    }}
  >
    <div
      style={{
        textAlign: 'center',
        padding: '15px 0 25px 0',
        borderBottom: '1px solid #eaeaea',
      }}
    >
      <img
        src='https://www.ministerioacacia.org/_next/image?url=%2Fimages%2Fimg_header_logo_black.png&w=64&q=75'
        alt='ministerio acacia logo'
        width={200}
        height={80}
        style={{
          objectFit: 'contain',
          marginBottom: '15px',
        }}
      />
      <h2
        style={{
          fontSize: '16px',
          color: '#666',
          fontWeight: 'normal',
          margin: '0 0 5px 0',
        }}
      >
        Nuevo mensaje de contacto
      </h2>
      <h1
        style={{
          fontSize: '24px',
          fontWeight: 'bold',
          margin: '0',
          color: '#0066cc',
        }}
      >
        Nuevo mensaje de contacto
      </h1>
    </div>

    <div
      style={{
        padding: '25px 0',
      }}
    >
      <div
        style={{
          marginBottom: '15px',
          display: 'flex',
          borderBottom: '1px solid #f0f0f0',
          paddingBottom: '12px',
        }}
      >
        <div
          style={{
            width: '100px',
            fontWeight: '600',
            color: '#555',
          }}
        >
          Nombre:
        </div>
        <div
          style={{
            flex: '1',
          }}
        >
          {name}
        </div>
      </div>

      <div
        style={{
          marginBottom: '15px',
          display: 'flex',
          borderBottom: '1px solid #f0f0f0',
          paddingBottom: '12px',
        }}
      >
        <div
          style={{
            width: '100px',
            fontWeight: '600',
            color: '#555',
          }}
        >
          Email:
        </div>
        <div
          style={{
            flex: '1',
          }}
        >
          <a href={`mailto:${email}`} style={{ color: '#0066cc', textDecoration: 'none' }}>
            {email}
          </a>
        </div>
      </div>

      <div
        style={{
          marginBottom: '15px',
          display: 'flex',
          borderBottom: '1px solid #f0f0f0',
          paddingBottom: '12px',
        }}
      >
        <div
          style={{
            width: '100px',
            fontWeight: '600',
            color: '#555',
          }}
        >
          Número:
        </div>
        <div
          style={{
            flex: '1',
          }}
        >
          {name}
        </div>
      </div>

      <div
        style={{
          marginBottom: '15px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            fontWeight: '600',
            color: '#555',
            marginBottom: '8px',
          }}
        >
          Mensaje:
        </div>
        <div
          style={{
            backgroundColor: '#f9f9f9',
            padding: '15px',
            borderRadius: '6px',
            lineHeight: '1.5',
            whiteSpace: 'pre-wrap',
          }}
          dangerouslySetInnerHTML={{ __html: message.replace(/\n/g, '<br>') }}
        />
      </div>
    </div>

    <div
      style={{
        borderTop: '1px solid #eaeaea',
        padding: '15px 0',
        fontSize: '12px',
        color: '#666',
        textAlign: 'center',
      }}
    >
      <p style={{ margin: '5px 0' }}>
        Este mensaje fue enviado desde el formulario de contacto de la web ministerioacacia.org.
      </p>
    </div>
  </div>
);

export default EmailTemplate;
