import type { APIRoute } from 'astro';
import { isValidEmail, isValidSpanishPhone, sanitizeString } from '@lib/utils';

interface ContactFormData {
  nombre: string;
  email: string;
  telefono: string;
  provincia: string;
  tipoConsulta?: string;
  mensaje: string;
  rgpd: string;
}

function validateFormData(data: ContactFormData): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Validate nombre
  if (!data.nombre || data.nombre.trim().length < 2) {
    errors.push('El nombre debe tener al menos 2 caracteres');
  }

  // Validate email
  if (!data.email || !isValidEmail(data.email)) {
    errors.push('El email no es válido');
  }

  // Validate telefono
  if (!data.telefono || !isValidSpanishPhone(data.telefono)) {
    errors.push('El teléfono debe ser un número español válido de 9 dígitos');
  }

  // Validate provincia
  if (!data.provincia || data.provincia.trim().length === 0) {
    errors.push('Debes seleccionar una provincia');
  }

  // Validate mensaje
  if (!data.mensaje || data.mensaje.trim().length < 10) {
    errors.push('El mensaje debe tener al menos 10 caracteres');
  }

  // Validate RGPD
  if (data.rgpd !== 'on') {
    errors.push('Debes aceptar la política de privacidad');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse form data
    const data = (await request.json()) as ContactFormData;

    // Validate data
    const validation = validateFormData(data);
    if (!validation.valid) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Datos del formulario inválidos',
          errors: validation.errors,
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      nombre: sanitizeString(data.nombre),
      email: sanitizeString(data.email),
      telefono: sanitizeString(data.telefono),
      provincia: sanitizeString(data.provincia),
      tipoConsulta: data.tipoConsulta ? sanitizeString(data.tipoConsulta) : 'No especificado',
      mensaje: sanitizeString(data.mensaje),
    };

    // TODO: Send email using service (SendGrid, Resend, etc.)
    // For now, we'll just log the data
    console.log('📧 Nueva consulta recibida:', sanitizedData);

    // Simulate email sending
    // In production, you would integrate with an email service here:
    /*
    const emailSent = await sendEmail({
      to: process.env.CONTACT_EMAIL || 'info@gradosdediscapacidad.es',
      subject: `Nueva consulta de ${sanitizedData.nombre} - ${sanitizedData.provincia}`,
      html: generateEmailTemplate(sanitizedData),
    });

    if (!emailSent) {
      throw new Error('Error al enviar el email');
    }
    */

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Tu consulta ha sido enviada correctamente. Nos pondremos en contacto contigo pronto.',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);

    return new Response(
      JSON.stringify({
        success: false,
        message: 'Ha ocurrido un error al procesar tu consulta. Por favor, inténtalo de nuevo más tarde.',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};

// Helper function to generate email template (for future use)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function generateEmailTemplate(data: {
  nombre: string;
  email: string;
  telefono: string;
  provincia: string;
  tipoConsulta: string;
  mensaje: string;
}): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #374151; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #1E3A8A; color: white; padding: 20px; text-align: center; }
          .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; }
          .field { margin-bottom: 20px; }
          .label { font-weight: bold; color: #1E3A8A; }
          .value { margin-top: 5px; }
          .footer { margin-top: 20px; padding: 20px; text-align: center; color: #6b7280; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Nueva Consulta - Grados de Discapacidad</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Nombre:</div>
              <div class="value">${data.nombre}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${data.email}</div>
            </div>
            <div class="field">
              <div class="label">Teléfono:</div>
              <div class="value">${data.telefono}</div>
            </div>
            <div class="field">
              <div class="label">Provincia:</div>
              <div class="value">${data.provincia}</div>
            </div>
            <div class="field">
              <div class="label">Tipo de Consulta:</div>
              <div class="value">${data.tipoConsulta}</div>
            </div>
            <div class="field">
              <div class="label">Mensaje:</div>
              <div class="value">${data.mensaje}</div>
            </div>
          </div>
          <div class="footer">
            <p>Este email ha sido enviado desde el formulario de contacto de gradosdediscapacidad.es</p>
          </div>
        </div>
      </body>
    </html>
  `;
}
