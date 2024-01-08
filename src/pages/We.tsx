import { motion } from "framer-motion";
const We = () => {
    return <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,128L80,128C160,128,320,128,480,149.3C640,171,800,213,960,229.3C1120,245,1280,235,1360,229.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        <section id={"we"} className={"bg-primary text-white mt-0 md:mt-[-20px] lg:mt-[-65px]"}>
            <div className={"container mx-auto flex flex-col gap-4"}>
                <div className={"flex flex-col md:flex-row justify-between p-4 text-xl"}>
                    <motion.div
                        whileInView={{ x: 0, opacity: 100 }}
                        initial={{x: -200, opacity: 0}}
                        transition={{ duration: 1}}
                        className="md:w-[40%] w-full"
                    >
                        <h2 className={"white text-4xl sm:text-5xl text-center mb-4"}>Qui sommes-nous ?</h2>
                        <p className={"text-justify font-light"}>Chez Balai-futé, nous nous engageons à apporter une propreté impeccable à chaque coin de votre environnement. Fondés en 2008, nous avons bâti notre réputation sur la qualité de nos services et notre approche personnalisée. Nos équipes spécialisées dans le nettoyage résidentiel, commercial et industriel utilisent des produits écologiques et des techniques avancées pour garantir un résultat à la hauteur de vos attentes.</p>
                        <p className={"text-justify mt-2 font-light"}>Notre mission est de créer des espaces sains et agréables pour vivre et travailler. Nous comprenons que chaque client a des besoins uniques, c’est pourquoi nous offrons des solutions sur mesure. Que ce soit pour un nettoyage régulier, une grande désinfection ou un service après-sinistre, nous sommes là pour assurer votre tranquillité d'esprit.</p>
                        <p className={"text-justify mt-2 font-light"}>Avec Balai-futé, vous bénéficiez d'un service client sans pareil, d'interventions rapides et d'une transparence totale. Nous sommes fiers de contribuer à votre bien-être et celui de l'environnement. Contactez-nous aujourd'hui pour un devis personnalisé et laissez-nous prendre soin de votre espace comme si c'était le nôtre</p>
                    </motion.div>
                    <motion.div
                        whileInView={{x: 0, opacity: 100 }}
                        initial={{x: 200, opacity: 0}}
                        transition={{ duration: 1}}
                        className={"md:w-[40%] w-full flex justify-center items-center"}
                    >
                        <img src={"./src/assets/images/we.jpg"} className={"mt-6 md:mt-0 rounded-br-[100px] rounded-bl-[100px] rounded-tl-[300px] rounded-tr-[100px]"}/>
                    </motion.div>
                </div>
            </div>
        </section>
        <svg className={"rotate-180 absolute"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,224L120,229.3C240,235,480,245,720,229.3C960,213,1200,171,1320,149.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    </>
}

export default We
