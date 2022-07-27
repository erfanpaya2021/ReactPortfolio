import { Fragment } from "react";
import { Header } from "../components/header";
import { Showcase, About, Projects, Skills, Contact } from "../components/main";

const App = () => {
    return (
        <Fragment>
            <Header />
            <main>
                <Showcase />
                <About />
                <Projects />
                <Skills />
                <Contact />
            </main>
        </Fragment>
    );
};

export default App;
