import styles from "./page.module.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection"
import Footer from "./components/Footer";
import MemeCard from "./components/MemeCard";
import Sidebar from "./components/Sidebar";
import CategoriesSection from "./components/CategoriesSection";
import InteractionBar from "./components/InteractionBar";

export default function Home() {
    // Array de dados dos memes para serem passados como props
    const memes = [
        {
            id: 1,
            title: "Programador às 3 da manhã",
            description:
                "Quando o código finalmente funciona depois de 5 horas debugando",
            image: "https://i.imgur.com/JbIMvq2.jpg",
            likes: 452,
            comments: 87,
            author: "DevMaster",
            authorAvatar: "https://i.pravatar.cc/150?img=11",
            category: "Programação",
        },
        {
            id: 2,
            title: "Vida de estudante",
            description: "Eu entrando na prova sem estudar",
            image: "https://i.imgur.com/DpEHvFs.jpg",
            likes: 231,
            comments: 56,
            author: "StudyGuru",
            authorAvatar: "https://i.pravatar.cc/150?img=12",
            category: "Escola",
        },
        {
            id: 3,
            title: "Reunião que poderia ser um e-mail",
            description: "Minha cara depois de 2 horas de reunião",
            image: "https://i.imgur.com/a1hJwXc.jpg",
            likes: 631,
            comments: 103,
            author: "CorporateJoker",
            authorAvatar: "https://i.pravatar.cc/150?img=13",
            category: "Trabalho",
        },
        {
            id: 4,
            title: "Quando a internet cai",
            description: "POV: Você no meio de uma partida importante",
            image: "https://i.imgur.com/uGdnlGj.jpg",
            likes: 842,
            comments: 152,
            author: "GamerLife",
            authorAvatar: "https://i.pravatar.cc/150?img=14",
            category: "Games",
        },
        {
            id: 5,
            title: "Segunda-feira chegando",
            description: "Ninguém está pronto para isso",
            image: "https://i.imgur.com/aNDyAyC.jpg",
            likes: 753,
            comments: 91,
            author: "WeekendWarrior",
            authorAvatar: "https://i.pravatar.cc/150?img=15",
            category: "Trabalho",
        },
        {
            id: 6,
            title: "Minha vida amorosa",
            description: "Expectativa vs Realidade",
            image: "https://i.imgur.com/gMy6q9Y.jpg",
            likes: 523,
            comments: 78,
            author: "RomanceExpert",
            authorAvatar: "https://i.pravatar.cc/150?img=16",
            category: "Relacionamentos",
        },
    ];



    // Array de criadores em destaque
    const topCreators = [
        {
            id: 1,
            name: "MemeQueen",
            avatar: "https://i.pravatar.cc/150?img=23",
            followers: "245K",
            bio: "Criando memes que fazem seu dia melhor!",
        },
        {
            id: 2,
            name: "FunnyGuy42",
            avatar: "https://i.pravatar.cc/150?img=24",
            followers: "189K",
            bio: "Especialista em memes de programação e gatos",
        },
        {
            id: 3,
            name: "LaughFactory",
            avatar: "https://i.pravatar.cc/150?img=25",
            followers: "327K",
            bio: "Se não te fizer rir, devolvo seu tempo!",
        },
    ];

    

    // Memes em destaque
    const featuredMemes = [
        {
            id: 8,
            title: "O código em produção",
            image: "https://i.imgur.com/aVy8tFB.jpg",
            author: "DevHumor",
            category: "Programação",
            trending: true,
        },
        {
            id: 9,
            title: "Modo escuro vs Modo claro",
            image: "https://i.imgur.com/YnGsVzS.jpg",
            author: "UIDesigner",
            category: "Tecnologia",
            trending: true,
        },
        {
            id: 10,
            title: "POV: Aula online",
            image: "https://i.imgur.com/4MigGYQ.jpg",
            author: "ZoomExpert",
            category: "Escola",
            trending: false,
        },
    ];

   

    return (
        <div className={styles.container}>

            <Header />

            <div className={styles.mainContent}>
                <div className={styles.contentArea}>
                    <HeroSection />

                    <CategoriesSection />

                    {/* COMPONENTE: Feed */}
                    <section className={styles.feedSection}>
                        <div className={styles.feedHeader}>
                            <h2 className={styles.sectionTitle}>Memes Populares</h2>
                            <div className={styles.feedFilters}>
                                <button className={`${styles.filterButton} ${styles.active}`}>
                                    Recentes
                                </button>
                                <button className={styles.filterButton}>Mais curtidos</button>
                                <button className={styles.filterButton}>Mais comentados</button>
                            </div>
                        </div>

                        <div className={styles.feedGrid}>
                            <div className={styles.feedGrid}>
                                {/* Aqui mapeamos os memes do array para criar múltiplos cards */}
                                {memes.map((meme) => (
                                    <MemeCard key={meme.id} meme={meme} />
                                ))}
                            </div>

                        </div>

                    </section>
                    {/* FIM COMPONENTE: Feed */}

                    {/* COMPONENTE: FeaturedMemesSection */}
                    <section className={styles.featuredSection}>
                        <h2 className={styles.sectionTitle}>Memes em Destaque</h2>
                        <div className={styles.featuredGrid}>
                            {featuredMemes.map((meme) => (
                                // COMPONENTE: FeaturedMemeCard
                                <div key={meme.id} className={styles.featuredCard}>
                                    <div className={styles.featuredImageContainer}>
                                        <img
                                            src={meme.image}
                                            alt={meme.title}
                                            className={styles.featuredImage}
                                        />
                                        {meme.trending && (
                                            <span className={styles.trendingBadge}>🔥 Trending</span>
                                        )}
                                    </div>
                                    <div className={styles.featuredContent}>
                                        <h3 className={styles.featuredTitle}>{meme.title}</h3>
                                        <div className={styles.featuredInfo}>
                                            <span className={styles.featuredAuthor}>
                                                Por {meme.author}
                                            </span>
                                            <span className={styles.featuredCategory}>
                                                {meme.category}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                // FIM COMPONENTE: FeaturedMemeCard
                            ))}
                        </div>
                    </section>
                    {/* FIM COMPONENTE: FeaturedMemesSection */}

                    {/* COMPONENTE: CreatorsSection */}
                    <section className={styles.creatorsSection}>
                        <h2 className={styles.sectionTitle}>Criadores em Destaque</h2>
                        <div className={styles.creatorsGrid}>
                            {topCreators.map((creator) => (
                                // COMPONENTE: CreatorCard
                                <div key={creator.id} className={styles.creatorCard}>
                                    <img
                                        src={creator.avatar}
                                        alt={creator.name}
                                        className={styles.creatorAvatar}
                                    />
                                    <h3 className={styles.creatorName}>{creator.name}</h3>
                                    <p className={styles.creatorBio}>{creator.bio}</p>
                                    <div className={styles.creatorStats}>
                                        <span className={styles.creatorFollowers}>
                                            {creator.followers} seguidores
                                        </span>
                                    </div>
                                    <button className={styles.followButton}>Seguir</button>
                                </div>
                                // FIM COMPONENTE: CreatorCard
                            ))}
                        </div>
                    </section>
                    {/* FIM COMPONENTE: CreatorsSection */}

                    {/* COMPONENTE: NewsletterSection */}
                    <section className={styles.newsletterSection}>
                        <div className={styles.newsletterContent}>
                            <h2 className={styles.newsletterTitle}>Fique por dentro!</h2>
                            <p className={styles.newsletterDescription}>
                                Assine nossa newsletter e receba os melhores memes toda semana!
                            </p>
                            <div className={styles.newsletterForm}>
                                <input
                                    type="email"
                                    placeholder="Seu melhor e-mail"
                                    className={styles.newsletterInput}
                                />
                                <button className={styles.newsletterButton}>Assinar</button>
                            </div>
                            <p className={styles.newsletterDisclaimer}>
                                Nós respeitamos sua privacidade. Cancele quando quiser.
                            </p>
                        </div>
                        <div className={styles.newsletterImageContainer}>
                            <img
                                src="https://i.imgur.com/OELrGl5.jpg"
                                alt="Newsletter"
                                className={styles.newsletterImage}
                            />
                        </div>
                    </section>
                    {/* FIM COMPONENTE: NewsletterSection */}
                </div>

                <Sidebar />
            </div>
            <Footer />
        </div>
    );
}
