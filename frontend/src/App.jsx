import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Router/index";
import { Helmet } from "react-helmet"; // Import Helmet for SEO

import ErrorBoundary from "./Error/ErrorBoundary";
import Loader from "./components/Loading";
// import { AuthProvider } from './context/AuthContext';

function App() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rina Contraction Ltd",
    url: "https://yourdomain.com",
    sameAs: [
      "https://www.instagram.com/rinacontraction/",
      "https://github.com/rinacontraction",
      "https://twitter.com/rinacontraction",
      "https://www.linkedin.com/company/rinacontraction/",
    ],
    image: "./rina-logo.jpg",
    description:
      "Rina Contraction Ltd provides expert construction, renovation, and engineering solutions. We deliver quality services for residential, commercial, and industrial projects.",
  };

  return (
    <ErrorBoundary>
      {/* Adding Helmet for SEO optimization */}
      <Helmet>
        <title>Rina Contraction Ltd</title>
        {/* Title for SEO */}
        <meta
          name="description"
          content="Rina Contraction Ltd specializes in construction, renovation, and engineering solutions. Delivering excellence in building and infrastructure projects."
        />
        <meta
          name="keywords"
          content="Rina Contraction Ltd, construction services, renovation, engineering, building projects, residential construction, commercial construction, infrastructure development"
        />
        <meta name="author" content="Rina Contraction Ltd" />

        {/* Open Graph metadata for social media sharing */}
        <meta property="og:title" content="Rina Contraction Ltd" />
        <meta
          property="og:description"
          content="Discover top-notch construction and renovation services with Rina Contraction Ltd. Building excellence for homes, businesses, and industries."
        />
        <meta property="og:image" content="./rina-logo.jpg" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card metadata */}
        <meta name="twitter:title" content="Rina Contraction Ltd" />
        <meta
          name="twitter:description"
          content="Trusted construction, renovation, and engineering services by Rina Contraction Ltd."
        />
        <meta name="twitter:image" content="./rina-logo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Structured Data - JSON-LD Schema Markup for enhanced SEO */}
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-F57Y947PR2"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </script>

        {/* Favicon */}
        <link rel="icon" href="./rina-logo.jpg" />

        {/* Additional meta tags for mobile optimization */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Apple touch icon for iPhone */}
        <link rel="apple-touch-icon" href="./rina-logo.jpg" />

        {/* Theme Color */}
        <meta name="theme-color" content="#0044cc" />
      </Helmet>

      {/* Suspense and ErrorBoundary setup */}
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
