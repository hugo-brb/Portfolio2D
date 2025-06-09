import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./layout/About";
import Contact from "./layout/Contact";
import Main from "./layout/Main";
import Projects from "./layout/Projects";

function App() {
    return (
        <>
            <Header />
            <Main />
            <div className=" border-t-2 border-[var(--gris)] w-2/3 h-1 mx-auto" />
            <About />
            <div className=" border-t-2 border-[var(--gris)] w-2/3 h-1 mx-auto" />
            <Projects />
            <div className=" border-t-2 border-[var(--gris)] w-2/3 h-1 mx-auto" />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
