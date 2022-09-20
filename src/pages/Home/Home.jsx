import FAQ from '../../components/FAQ';
import Hero from '../../components/Hero/Hero';
import Programs from '../../components/Programs';
import Testimonials from '../../components/Testimonials/Testimonials';
import Values from '../../components/Values/Values';

const Home = () => {
    return (
        <>
            <section>
                <Hero />
                <Programs />
                <Values />
                <FAQ />
                <Testimonials />
            </section>
        </>
    );
};

export default Home;
