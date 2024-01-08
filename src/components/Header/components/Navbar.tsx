import {useEffect} from "react";

const navItem = "anchor text-lg hover:text-primary"

const Navbar = () => {
    useEffect(() => {
        const scrollEvent = () => {
            const scrollY = window.scrollY
            console.log(scrollY)
            document.querySelectorAll('.link').forEach(link => link.classList.remove('active'))
            if (scrollY > 2000) {
                document.querySelector(".contact-link")?.classList.add('active')
            } else if (scrollY > 1750) {
                document.querySelector(".security-link")?.classList.add('active')
            } else if (scrollY > 850) {
                document.querySelector(".we-link")?.classList.add('active')
            } else if (scrollY > 200) {
                document.querySelector(".services-link")?.classList.add('active')
            } else {
                document.querySelector(".home-link")?.classList.add('active')
            }
        }

        document.addEventListener('scroll', scrollEvent)
        return () => document.removeEventListener('scroll', scrollEvent)
    }, []);
    return <nav>
        <ul className="flex gap-4">
            <li className={"link home-link active"}><a href="#home" className={navItem}>Accueil</a></li>
            <li className={"link services-link"}><a href="#services" className={navItem}>Services</a></li>
            <li className={"link we-link"}><a href="#we" className={navItem}>Nous</a></li>
            <li className={"link security-link"}><a href="#security" className={navItem}>Sécurité</a></li>
            <li className={"link contact-link"}><a href="#contact" className={navItem}>Contact</a></li>
        </ul>
    </nav>
}

export default Navbar
