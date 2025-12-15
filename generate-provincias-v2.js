import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Importar datos de provincias
const provinciasData = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'src/data/provincias.json'), 'utf-8')
);

// Template para generar el contenido de cada provincia (SIN campo slug)
function generateProvinciaContent(provincia) {
  return `---
nombre: "${provincia.nombre}"
capital: "${provincia.capital}"
comunidad: "${provincia.comunidad}"
poblacion: ${provincia.poblacion || 0}
descripcion: "Peritaje médico y valoración de discapacidad en ${provincia.nombre}"
metaDescription: "Servicios de peritaje médico para grados de discapacidad en ${provincia.nombre}. Expertos en ${provincia.capital}. Primera consulta gratuita."
---

## Peritaje Médico en ${provincia.nombre}

Servicios profesionales de peritaje médico y valoración de grados de discapacidad en la provincia de ${provincia.nombre}.

### Servicios en ${provincia.nombre}

#### Peritaje y Valoración

Ofrecemos servicios completos para el reconocimiento del grado de discapacidad:

- Informes periciales médicos especializados
- Evaluación exhaustiva de limitaciones funcionales
- Documentación médica completa y fundamentada
- Preparación para la comparecencia ante el tribunal médico
- Asesoramiento personalizado durante todo el proceso

#### Recursos y Reclamaciones

Si tu solicitud ha sido denegada o el porcentaje reconocido es inferior al esperado:

- Recursos de reposición ante el mismo órgano
- Recursos de alzada en segunda instancia
- Informes periciales de refuerzo para el recurso
- Análisis detallado de la resolución
- Estrategia específica para cada caso

#### Revisión de Grado

¿Tu situación médica ha empeorado desde el último reconocimiento?

- Solicitud de revisión por agravamiento
- Documentación del empeoramiento de tu estado
- Nuevos informes médicos actualizados
- Gestión completa del trámite administrativo

### Proceso de Valoración en ${provincia.nombre}

El proceso de reconocimiento del grado de discapacidad en ${provincia.capital} sigue estos pasos:

1. Presentación de solicitud en los registros oficiales de ${provincia.comunidad}
2. Aportación de documentación médica que acredite la enfermedad
3. Citación por parte del tribunal médico (plazo de 2-4 meses)
4. Valoración por equipo multiprofesional
5. Resolución oficial (máximo 6 meses desde la solicitud)

### Cobertura en la Provincia

Atendemos en ${provincia.capital} y todo el territorio de ${provincia.nombre}:

- Consultas presenciales en ${provincia.capital}
- Atención online para mayor comodidad
- Desplazamientos a otras localidades de la provincia
- Horario flexible adaptado a tus necesidades

### Enfermedades y Patologías Comunes

Las patologías más frecuentes que atendemos en ${provincia.nombre} incluyen:

- Fibromialgia y síndrome de fatiga crónica
- Trastornos mentales: Depresión mayor, ansiedad, trastorno bipolar
- Enfermedades reumatológicas: Artritis reumatoide, lupus, espondilitis
- Esclerosis múltiple y otras enfermedades neurológicas
- Dolor crónico: Hernias discales, artrosis avanzada
- Diabetes con complicaciones
- Enfermedades cardiovasculares
- EPOC y otras patologías respiratorias

### Beneficios del Reconocimiento

Con el certificado de discapacidad en ${provincia.nombre} accedes a:

- Deducciones fiscales en el IRPF según grado reconocido
- Tarjeta de aparcamiento para personas con movilidad reducida
- Descuentos en transporte público municipal y provincial
- Reserva de plazas en empleo público (cupo del 5%)
- Ayudas para adaptación de vivienda
- Protección laboral adicional
- Bonificaciones en servicios culturales y deportivos

### Nuestro Método de Trabajo

**Fase 1: Análisis Inicial**
- Consulta gratuita en ${provincia.nombre}
- Estudio de viabilidad del caso
- Evaluación del porcentaje estimado
- Sin compromiso

**Fase 2: Preparación**
- Revisión de documentación médica completa
- Identificación de informes adicionales necesarios
- Planificación de la estrategia

**Fase 3: Informe Pericial**
- Elaboración del informe médico especializado
- Fundamentación técnica según baremo oficial
- Documentación exhaustiva de limitaciones

**Fase 4: Seguimiento**
- Acompañamiento durante todo el proceso
- Resolución de dudas
- Actualizaciones cuando sea necesario

### Por Qué Elegirnos

- Experiencia en ${provincia.comunidad}: Conocemos el sistema regional
- Profesionales especializados: Peritos médicos colegiados
- Atención personalizada: Cada caso es único
- Confidencialidad absoluta: Protección de tus datos
- Primera consulta gratuita: Sin compromiso
- Alto índice de éxito: Especialmente en recursos

### Contacta con Nosotros en ${provincia.nombre}

Si necesitas ayuda con tu grado de discapacidad en ${provincia.capital} o cualquier localidad de ${provincia.nombre}:

📍 **Ubicación**: ${provincia.capital} y toda la provincia de ${provincia.nombre}
⏰ **Horario**: Lunes a Viernes, 9:00 - 20:00
💻 **Modalidad**: Presencial u online según tus necesidades
🆓 **Primera consulta**: Totalmente gratuita y sin compromiso

No esperes más para conseguir el reconocimiento que mereces. El certificado de discapacidad puede cambiar tu vida, dándote acceso a múltiples beneficios y ayudas.

[Solicita tu consulta gratuita](/contacto) y te asesoraremos de forma personalizada.
`;
}

// Crear directorio si no existe
const provinciasDir = path.join(__dirname, 'src/content/provincias');
if (!fs.existsSync(provinciasDir)) {
  fs.mkdirSync(provinciasDir, { recursive: true });
}

// Generar archivos para todas las provincias
let createdCount = 0;
let errorCount = 0;

provinciasData.forEach((provincia) => {
  const filename = `${provincia.slug}.md`;
  const filepath = path.join(provinciasDir, filename);

  try {
    const content = generateProvinciaContent(provincia);
    fs.writeFileSync(filepath, content, 'utf-8');
    createdCount++;
    console.log(`✓ Creado: ${filename}`);
  } catch (error) {
    errorCount++;
    console.error(`✗ Error creando ${filename}:`, error.message);
  }
});

console.log(`\n=== Resumen ===`);
console.log(`Provincias creadas: ${createdCount}`);
console.log(`Errores: ${errorCount}`);
console.log(`Total: ${provinciasData.length} provincias`);
