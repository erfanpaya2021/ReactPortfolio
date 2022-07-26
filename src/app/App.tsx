import { Header } from "../components/header";
import { Showcase, About, Projects, Skills, Contact } from "../components/main";

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Showcase />
                <About />
                <Projects />
                <Skills />
                <Contact />
            </main>
        </>
    );
};

export default App;
