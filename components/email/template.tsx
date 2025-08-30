import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
  language?: 'es' | 'en';
}

// Static translations for email template
const emailTranslations = {
  es: {
    title: 'Nueva consulta desde tu Portfolio',
    contactInfo: 'Información del contacto:',
    name: 'Nombre:',
    email: 'Email:',
    subject: 'Asunto:',
    message: 'Mensaje:',
    footerSent: 'Este mensaje fue enviado desde tu portfolio personal.',
    footerReply: 'Puedes responder directamente a este email para contactar con'
  },
  en: {
    title: 'New inquiry from your Portfolio',
    contactInfo: 'Contact information:',
    name: 'Name:',
    email: 'Email:',
    subject: 'Subject:',
    message: 'Message:',
    footerSent: 'This message was sent from your personal portfolio.',
    footerReply: 'You can reply directly to this email to contact'
  }
};

export function EmailTemplate({ name, email, subject, message, language = 'es' }: EmailTemplateProps) {
  const t = emailTranslations[language];
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <h2 style={{ color: '#2c5282', borderBottom: '2px solid #2c5282', paddingBottom: '10px' }}>
          {t.title}
        </h2>
        
        <div style={{ backgroundColor: '#f7fafc', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
          <h3 style={{ margin: '0 0 15px 0', color: '#2d3748' }}>{t.contactInfo}</h3>
          
          <div style={{ marginBottom: '10px' }}>
            <strong>{t.name}</strong> {name}
          </div>
          
          <div style={{ marginBottom: '10px' }}>
            <strong>{t.email}</strong> {email}
          </div>
          
          <div style={{ marginBottom: '10px' }}>
            <strong>{t.subject}</strong> {subject}
          </div>
        </div>
        
        <div style={{ margin: '20px 0' }}>
          <h3 style={{ color: '#2d3748', marginBottom: '10px' }}>{t.message}</h3>
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
          <p>{t.footerSent}</p>
          <p>{t.footerReply} {name}.</p>
        </div>
      </div>
    </div>
  );
}