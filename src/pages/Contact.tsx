const Contact = () => {
    return <>
        <svg className={"mt-[-100px]"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" d="M0,288L120,288C240,288,480,288,720,282.7C960,277,1200,267,1320,261.3L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        <section id={"contact"} className={"bg-primary text-white pb-8"}>
            <div className={"container mx-auto flex flex-col gap-4"}>
                <div className={"flex flex-col-reverse md:flex-row justify-between p-4 text-xl"}>
                    <div className="md:w-[40%] mt-4 md:mt-0 w-full flex flex-col justify-center items-center">
                        <h3 className={"white text-3xl text-center mb-2"}>Ouvertures</h3>
                        <div className={"flex flex-col justify-center items-center mt-2 gap-2 text-center text-2xl font-light tracking-wide"}>
                            <p>Lundi: ouvert 24h/24</p>
                            <p>Mardi: ouvert 24h/24</p>
                            <p>Mercredi: ouvert 24h/24</p>
                            <p>Jeudi: ouvert 24h/24</p>
                            <p>Vendredi: ouvert 24h/24</p>
                            <p>Samedi: ouvert 24h/24</p>
                            <p>Dimanche: ouvert 24h/24</p>
                        </div>
                    </div>
                    <div className={"md:w-[40%] w-full"}>
                        <h2 className={"white text-5xl text-center mb-6"}>Nous contacter</h2>
                        <form className={"w-full flex flex-col gap-4"}>
                            <input name={"name"} placeholder={"Nom"} className={"p-2 rounded-lg outline-none w-full text-zinc-700"}/>
                            <input name={"address"} placeholder={"Adresse"} className={"p-2 rounded-lg outline-none w-full text-zinc-700"}/>
                            <input name={"postal"} placeholder={"Code postal"} className={"p-2 rounded-lg outline-none w-full text-zinc-700"}/>
                            <input name={"email"} placeholder={"Email"} className={"p-2 rounded-lg outline-none w-full text-zinc-700"}/>
                            <textarea name={"email"} placeholder={"Message"} className={"p-2 rounded-lg outline-none w-full text-zinc-700"}/>
                            <input type={"submit"} className={"p-2 bg-white rounded-lg text-primary active:bg-primary active:text-white active:border active:border-white cursor-pointer"}/>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
};

export default Contact;
