import Card from "../components/Header/components/Card.tsx";
import { motion } from 'framer-motion'
const Services = () => {
    return <section id={"services"}>
        <div className={"container mx-auto mt-16 text-2xl"}>
            <h2 className={"text-center sm:text-left mb-6 mt-6 text-5xl text-primary font-bold"}>Nos services</h2>
            <motion.div
                initial={{y: 100, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{type:'linear', delay: 0.5, duration: 1}}
                className={"grid lg:grid-cols-[1fr_1fr_1fr] md:grid-cols-[1fr_1fr] gap-4 p-4 w-full justify-center"}
            >
                <Card image={"./src/assets/images/desktop-cleaning.jpg"} className={"w-[375px]"}>Nettoyage de bureau</Card>
                <Card image={"./src/assets/images/home-cleaning.jpg"} className={"w-[375px]"}>Nettoyage à domicile</Card>
                <Card image={"./src/assets/images/window-cleaning.jpg"} className={"w-[375px]"}>Nettoyage des vitres</Card>
                <Card image={"./src/assets/images/work-cleaning.jpg"} className={"w-[375px]"}>Nettoyage après travaux/incendie</Card>
                <Card image={"./src/assets/images/bail-cleaning.jpg"} className={"w-[375px]"}>Nettoyage de fin/début de bail</Card>
                <Card image={"./src/assets/images/pressure-cleaning.jpg"} className={"w-[375px]"}>Nettoyage haute pression</Card>
                <Card image={"./src/assets/images/carpet-cleaning.jpg"} className={"w-[375px]"}>Nettoyage de tapis</Card>
                <Card image={"./src/assets/images/solar-cleaning.jpg"} className={"w-[375px]"}>Nettoyage pannaux solaires</Card>
            </motion.div>
        </div>
    </section>
}

export default Services
