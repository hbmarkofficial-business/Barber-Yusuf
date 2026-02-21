import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Barbershop Bochum | Barber Yusuf</title>
        <meta
          name="description"
          content="Besuche unseren Premium Barbershop Barber Yusuf in Bochum für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Barbershop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Bochum"
        />
        <link rel="canonical" href="https://barberyusuf-bochum.de" />

        {/* Open Graph */}
        <meta property="og:title" content="Barber Yusuf | Premium Barbershop Bochum" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Gentleman in Bochum."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://barberyusuf-bochum.de" />
        <meta property="og:image" content="https://barberyusuf-bochum.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Barber Yusuf | Premium Barbershop Bochum" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege für den modernen Gentleman."
        />
        <meta name="twitter:image" content="https://barberyusuf-bochum.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "Barber Yusuf",
            "image": "https://barberyusuf-bochum.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Dorstener Str. 105",
              "addressLocality": "Bochum",
              "postalCode": "44809",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "51.4912",
              "longitude": "7.2023"
            },
            "url": "https://barberyusuf-bochum.de",
            "telephone": "01772613209",
            "openingHours": "Mo-Fr 09:00-19:00, Sa 09:00-18:00",
            "priceRange": "€€",
            "servesCuisine": "Barbershop Services",
            "sameAs": [
              "https://www.facebook.com/barberyusuf",
              "https://www.instagram.com/barberyusuf"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;
