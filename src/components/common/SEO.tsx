import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = "Deck Construction & Restoration Services | Hammer & Hew | Bay Area",
  description = "Professional deck construction, restoration & repair in Bay Area. Licensed & insured with 10-year warranty. Free estimates. Call (555) 123-4567",
  keywords = "deck construction, deck restoration, deck repair, Bay Area, licensed contractor, deck builder",
  image = "/og-image.jpg",
  url = "https://hammerandhew.com",
  type = "website",
  noindex = false,
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HomeImprovementBusiness",
    "name": "Hammer & Hew",
    "description": "Professional deck construction and restoration services",
    "url": url,
    "telephone": "(555) 123-4567",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "CA",
      "addressLocality": "Bay Area"
    },
    "areaServed": ["Bay Area", "San Francisco", "San Jose"],
    "serviceType": ["Deck Construction", "Deck Restoration", "Deck Repair"],
    "priceRange": "$$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "license",
        "recognizedBy": {
          "@type": "Organization",
          "name": "California State License Board"
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Hammer & Hew" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Local SEO */}
      <meta name="geo.region" content="US-CA" />
      <meta name="geo.position" content="37.7749;-122.4194" />
      <meta name="ICBM" content="37.7749, -122.4194" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;