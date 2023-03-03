import { Navbar, PageLinks, PageLink } from "../../components";

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <section className='hero' id='home'>
                <div className='hero-banner'>
                    <h1>superhero dating app</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                        explicabo debitis est autem dicta.
                    </p>
                    <a href='#tours' className='btn hero-btn '>
                        explore tours
                    </a>
                </div>
            </section>
        </>
    )
}

export default LandingPage
