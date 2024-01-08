import {useEffect, useState} from "react";
import {motion} from 'framer-motion'

const navItem = "anchor text-lg hover:text-primary"

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
    const [open, setOpen] = useState(!isMobile)

    useEffect(() => {
        const handleResize = () => {
            if (isMobile !== (window.innerWidth <= 768)) {
                setIsMobile(window.innerWidth <= 768)
                setOpen(window.innerWidth > 768)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [open, isMobile]);

    useEffect(() => {
        const scrollEvent = () => {
            const scrollY = window.scrollY
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

    const handleLinkClick = () => {
        if (isMobile) setOpen(false)
    }

    return <>
        <motion.nav
            initial={{x: "-100%", opacity: 0}}
            animate={open ? {x: 0, opacity: 1} : ""}
            transition={{type: "linear"}}
            className={"absolute overflow-hidden top-0 left-0 w-full h-screen bg-primary text-white z-50 flex justify-center items-center md:relative md:w-auto md:h-auto md:bg-transparent"}>
            <ul className="flex flex-col gap-4 justify-center items-center text-5xl md:flex-row">
                <li className={"link home-link active"}>
                    <a onClick={handleLinkClick} href="#home" className={navItem}>Accueil</a>
                </li>
                <li className={"link services-link"}>
                    <a onClick={handleLinkClick} href="#services" className={navItem}>Services</a>
                </li>
                <li className={"link we-link"}>
                    <a onClick={handleLinkClick} href="#we" className={navItem}>Nous</a></li>
                <li className={"link security-link"}>
                    <a onClick={handleLinkClick} href="#security" className={navItem}>Sécurité</a>
                </li>
                <li className={"link contact-link"}>
                    <a onClick={handleLinkClick} href="#contact" className={navItem}>Contact</a>
                </li>
            </ul>
        </motion.nav>
        <motion.svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setOpen((open) => !open)}
            className={"block md:hidden cursor-pointer"}
            animate={open ? {rotate: "90deg"} : ""}
            transition={{duration: 0.2, delay: 0}}
        >
            <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
        </motion.svg>
    </>
}

export default Navbar
