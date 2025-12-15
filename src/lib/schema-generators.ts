const siteUrl = 'https://gradosdediscapacidad.es';

export interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
}

export function generateOrganizationSchema(props?: OrganizationSchemaProps) {
  return {
    '@type': 'MedicalBusiness',
    name: props?.name || 'Grados de Discapacidad',
    url: props?.url || siteUrl,
    logo: props?.logo || `${siteUrl}/logo.svg`,
    description: props?.description || 'Expertos en peritaje médico y valoración de grados de discapacidad en España',
    areaServed: 'ES',
    priceRange: '€€',
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '20:00',
    },
  };
}

export interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  publishedTime: string;
  modifiedTime?: string;
  image?: string;
  author?: string;
}

export function generateArticleSchema(props: ArticleSchemaProps) {
  return {
    '@type': 'Article',
    headline: props.title,
    description: props.description,
    url: props.url,
    datePublished: props.publishedTime,
    dateModified: props.modifiedTime || props.publishedTime,
    image: props.image || `${siteUrl}/images/og-default.jpg`,
    author: {
      '@type': 'Organization',
      name: props.author || 'Grados de Discapacidad',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Grados de Discapacidad',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.svg`,
      },
    },
  };
}

export interface LocalBusinessSchemaProps {
  name: string;
  region: string;
  description: string;
  url: string;
}

export function generateLocalBusinessSchema(props: LocalBusinessSchemaProps) {
  return {
    '@type': 'LocalBusiness',
    '@id': props.url,
    name: props.name,
    description: props.description,
    url: props.url,
    address: {
      '@type': 'PostalAddress',
      addressRegion: props.region,
      addressCountry: 'ES',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: props.region,
    },
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '20:00',
    },
  };
}

export interface FAQSchemaProps {
  questions?: Array<{
    question: string;
    answer: string;
  }>;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

export function generateFAQSchema(props: FAQSchemaProps) {
  const faqList = props.questions || props.faqs || [];
  return {
    '@type': 'FAQPage',
    mainEntity: faqList.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': item.url,
        name: item.name,
      },
    })),
  };
}
