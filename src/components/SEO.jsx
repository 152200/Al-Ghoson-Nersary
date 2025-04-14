import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords, image, url }) => {
  const siteTitle = "حضانة جمعية دير الغصون";
  const defaultDescription = "حضانة جمعية دير الغصون في طولكرم - بيئة تعليمية آمنة ومحفزة لنمو طفلك";
  const defaultImage = "/logo.png";
  const siteUrl = "https://www.deiralghosonnursery.ps";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "حضانة جمعية دير الغصون",
    "alternateName": "Deir Al-Ghosoun Nursery",
    "@id": siteUrl,
    "url": siteUrl,
    "logo": `${siteUrl}${defaultImage}`,
    "description": defaultDescription,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "دير الغصون",
      "addressRegion": "طولكرم",
      "addressCountry": "PS"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.3125",
      "longitude": "35.0286"
    },
    "telephone": "+970922943415",
    "email": "info@deiralghosonnursery.ps",
    "openingHours": ["Mo-Th 07:00-14:00", "Sa 08:00-14:00"],
    "areaServed": "طولكرم",
    "teaches": ["Early Childhood Education", "Kindergarten", "Preschool Education"],
    "educationalLevel": "Preschool"
  };

  return (
    <Helmet>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph */}
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={`${siteUrl}${image || defaultImage}`} />
      <meta property="og:url" content={`${siteUrl}${url || ''}`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ar_PS" />

      {/* Twitter */}
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={`${siteUrl}${image || defaultImage}`} />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Additional Meta Tags */}
      <meta name="geo.region" content="PS-TKM" />
      <meta name="geo.placename" content="Deir Al-Ghosoun" />
      <meta name="geo.position" content="32.3125;35.0286" />
      <meta name="ICBM" content="32.3125, 35.0286" />
      <meta name="revisit-after" content="7 days" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Arabic" />

      {/* Schema.org Markup */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;