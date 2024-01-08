const Security = () => {
    return <section id="security" className={"mt-[200px]"}>
        <div className={"container mx-auto mt-4 text-2xl"}>
            <div className={"flex flex-col md:flex-row-reverse justify-between p-4 text-xl"}>
                <div className="md:w-[40%] w-full">
                    <h2 className={"mb-6 mt-6 text-5xl text-primary font-bold text-center"}>La sécurité au travail</h2>
                    <p className={"text-justify font-light"}>
                        La sécurité au travail est un élément essentiel des opérations de toute organisation. Il est essentiel que les employeurs créent un environnement sûr et sain pour leurs employés, car cela les protège non seulement des dommages potentiels, mais contribue également à augmenter le moral et la productivité. En mettant en œuvre des protocoles de sécurité appropriés, les employeurs peuvent s’assurer que leurs employés sont en mesure de travailler dans un environnement exempt de risques et de dangers potentiels. De plus, la sécurité au travail peut également aider à réduire les coûts associés aux blessures et aux maladies professionnelles. Les employeurs doivent s’efforcer de créer un environnement où les employés se sentent à l’aise et en sécurité, afin qu’ils puissent travailler en toute sécurité et efficacement.
                    </p>
                </div>
                <div className={"md:w-[40%] w-full flex justify-center items-center"}>
                    <img src={"./src/assets/images/ESST.png"} className={"mt-6 md:mt-0 rounded-br-[100px] rounded-bl-[100px] rounded-tl-[300px] rounded-tr-[100px]"}/>
                </div>
            </div>
        </div>
    </section>
};

export default Security;
