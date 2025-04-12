import Hero from '@/app/_components/pages/home/hero'
import AboutSection from '@/app/_components/pages/home/about'

export default function HomePage() {
    return(
        <div>
            <Hero />
            <div id="about">
                <AboutSection/>
            </div>
        </div>
    )
}