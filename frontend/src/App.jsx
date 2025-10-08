import React, { Suspense, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Router/index";
import { Helmet } from "react-helmet";

import ErrorBoundary from "./Error/ErrorBoundary";
import ReactGA from "react-ga4";
import Loader from "./components/Loading";

function App() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RANI | Professional Civil & Construction Solutions",
    url: "https://rani-construction.com",
    sameAs: [
      "https://www.instagram.com/rani_construction/",
      "https://github.com/rani-construction",
      "https://twitter.com/rani_construction",
      "https://www.linkedin.com/company/rani-construction/",
    ],
    image: "./rani-logo.jpg",
    description:
      "RANI provides professional civil engineering and construction solutions across residential, commercial, and industrial projects in Rwanda and beyond. We build with quality, trust, and innovation.",
  };

  useEffect(() => {
    ReactGA.initialize("G-XXXXXXXXXX"); // Replace with your Google Analytics ID
    ReactGA.send("pageview");
  }, []);

  return (
    <ErrorBoundary>
      <Helmet>
        <title>RANI | Professional Civil & Construction Solutions</title>
        <meta
          name="description"
          content="RANI offers expert civil engineering and construction solutions for residential, commercial, and industrial developments. Building excellence across Rwanda and beyond."
        />
        <meta
          name="keywords"
          content="RANI, construction, civil engineering, building, architecture, infrastructure, residential, commercial, industrial projects, Rwanda construction company"
        />
        <meta name="author" content="RANI Construction Company" />

        {/* Open Graph metadata */}
        <meta
          property="og:title"
          content="RANI | Professional Civil & Construction Solutions"
        />
        <meta
          property="og:description"
          content="Explore modern construction and civil engineering services with RANI. From residential housing to large-scale infrastructure, we build trust and quality."
        />
        <meta property="og:image" content="./rani-logo.jpg" />
        <meta property="og:url" content="https://rani-construction.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card metadata */}
        <meta
          name="twitter:title"
          content="RANI | Professional Civil & Construction Solutions"
        />
        <meta
          name="twitter:description"
          content="RANI provides reliable civil and construction services for all types of projects — residential, commercial, and infrastructure."
        />
        <meta name="twitter:image" content="./rani-logo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </script>

        {/* Favicon & Icons */}
        <link rel="icon" href="./rani-logo.png" />
        <link rel="apple-touch-icon" href="./rani-logo.png" />

        {/* Mobile & Theme Settings */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#004d40" />
      </Helmet>

      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
