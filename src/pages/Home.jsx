import "../styles/home.css";

// Components
import CustomHero from "../components/CustomHero.jsx";

export default function Home() {
    return (
        <main>
            <CustomHero />

            <section className="intro">
                <div className="text-wrapper">
                    <h2>Bem vindo à ER TECH</h2>
                    <p>Na ER TECH, unimos inovação e confiança.
                        Cuidamos da sua segurança, conectamos o seu mundo
                        e transformamos tecnologia em soluções que facilitam sua vida.</p>
                </div>

                <img src={new URL("../assets/standing_computer.jpg", import.meta.url)} alt="Standing computer" />
    
            </section>
        </main>
    )
}