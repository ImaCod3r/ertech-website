export default function CustomHero() {
    return (
        <section className="hero">
            <div className="text-wrapper">
                <h1>Tecnologia inteligente, soluções reais</h1>
                <p>Estamos prontos para criar a solução que você procura. Clique no botão e comece hoje mesmo.</p>
                <button style={{ marginTop: 20 }}>Ver serviços</button>
            </div>

            <img src={new URL("../assets/texture.jpg", import.meta.url)} alt="Texture" />
        </section>
    )
}