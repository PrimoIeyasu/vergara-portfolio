import Header from '@/components/Header';
import AboutMe from '@/components/AboutMe';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <section className="min-h-screen py-12">
        <AboutMe />
      </section>

      {/* other sections */}
      <Footer />
    </>
  );
}
