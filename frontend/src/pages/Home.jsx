// frontend/src/pages/Home.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import About from "../components/About";
import Highlights from "../components/Highlights";
import Contact from "../components/Contact";

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        // Verifica se há uma âncora (hash) na URL
        if (location.hash) {
            // Pega o elemento pelo ID da âncora (removendo o '#')
            const element = document.getElementById(location.hash.slice(1));
            if (element) {
                // Rola suavemente até o elemento
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <>
            <Header />
            <div id="inicio">
                <Hero />
            </div>
            <HowItWorks />
            <About />
            <Highlights />
            <Contact />
        </>
    );
}

export default Home;