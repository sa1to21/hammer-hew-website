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
    "@type": ["HomeImprovementBusiness", "LocalBusiness"],
    "name": "Hammer & Hew",
    "alternateName": "Hammer and Hew Deck Construction",
    "description": "Professional deck construction and restoration services serving the Bay Area for over 15 years",
    "url": url,
    "telephone": "(555) 123-4567",
    "email": "info@hammerandhew.com",
    "foundingDate": "2008",
    "logo": `${url}/logo.png`,
    "image": [
      `${url}/images/deck-construction.jpg`,
      `${url}/images/deck-restoration.jpg`,
      `${url}/images/gallery-1.jpg`
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "CA",
      "addressLocality": "Bay Area",
      "postalCode": "94105"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.7749,
      "longitude": -122.4194
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "San Francisco",
        "containedInPlace": { "@type": "State", "name": "California" }
      },
      {
        "@type": "City", 
        "name": "San Jose",
        "containedInPlace": { "@type": "State", "name": "California" }
      },
      {
        "@type": "City",
        "name": "Palo Alto", 
        "containedInPlace": { "@type": "State", "name": "California" }
      }
    ],
    "serviceType": ["Deck Construction", "Deck Restoration", "Deck Repair", "Deck Staining", "Custom Design"],
    "services": [
      {
        "@type": "Service",
        "name": "New Deck Construction",
        "description": "Custom decks built to last generations",
        "offers": {
          "@type": "Offer",
          "price": "15000",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "15000",
            "priceCurrency": "USD",
            "unitText": "starting at"
          }
        }
      }
    ],
    "priceRange": "$1,500 - $50,000+",
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Financing"],
    "currenciesAccepted": "USD",
    "openingHours": "Mo-Sa 07:00-18:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "reviewCount": "150"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Exceptional craftsmanship and professional service. Our new deck exceeded all expectations!"
      }
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional License",
        "recognizedBy": {
          "@type": "Organization",
          "name": "California State License Board"
        }
      }
    ],
    "award": [
      "Angie's List Super Service Award",
      "Better Business Bureau A+ Rating"
    ],
    "memberOf": {
      "@type": "Organization",
      "name": "Better Business Bureau"
    },
    "sameAs": [
      "https://www.facebook.com/hammerandhew",
      "https://www.linkedin.com/company/hammerandhew",
      "https://www.yelp.com/biz/hammerandhew"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Hammer & Hew" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="theme-color" content="#166534" />
      
      {/* Performance & Security */}
      <meta httpEquiv="X-DNS-Prefetch-Control" content="on" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex,nofollow" />
      ) : (
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
      )}
      
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