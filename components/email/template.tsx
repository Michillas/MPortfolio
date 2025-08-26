import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function EmailTemplate({ name, email, subject, message }: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <h2 style={{ color: '#2c5282', borderBottom: '2px solid #2c5282', paddingBottom: '10px' }}>
          Nueva consulta desde tu Portfolio
        </h2>
        
        <div style={{ backgroundColor: '#f7fafc', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
          <h3 style={{ margin: '0 0 15px 0', color: '#2d3748' }}>Información del contacto:</h3>
          
          <div style={{ marginBottom: '10px' }}>
            <strong>Nombre:</strong> {name}
          </div>
          
          <div style={{ marginBottom: '10px' }}>
            <strong>Email:</strong> {email}
          </div>
          
          <div style={{ marginBottom: '10px' }}>
            <strong>Asunto:</strong> {subject}
          </div>
        </div>
        
        <div style={{ margin: '20px 0' }}>
          <h3 style={{ color: '#2d3748', marginBottom: '10px' }}>Mensaje:</h3>
          <div style={{ 
            backgroundColor: '#ffffff', 
            padding: '15px', 
            borderLeft: '4px solid #2c5282',
            borderRadius: '4px',
            whiteSpace: 'pre-wrap'
          }}>
            {message}
          </div>
        </div>
        
        <div style={{ marginTop: '30px', fontSize: '12px', color: '#718096', borderTop: '1px solid #e2e8f0', paddingTop: '15px' }}>
          <p>Este mensaje fue enviado desde tu portfolio personal.</p>
          <p>Puedes responder directamente a este email para contactar con {name}.</p>
        </div>
      </div>
    </div>
  );
}