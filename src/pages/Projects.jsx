import Header from '@/components/Header';
import Carousel from '@/components/Carousel';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <section className="min-h-screen pt-[20px] mt-15">
        <div className="mx-auto py-12">
          <div className="flex justify-center">
            <Carousel />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
