import Header from "./components/Header/Header.tsx";
import Home from "./pages/Home.tsx";
import We from "./pages/We.tsx";
import Services from "./pages/Services.tsx";
import Security from "./pages/Security.tsx";
import Contact from "./pages/Contact.tsx";

function App() {
    return (
        <>
            <Header/>
            <main>
                <Home/>
                <Services/>
                <We/>
                <Security/>
                <Contact/>
            </main>
        </>
    )
}

export default App
