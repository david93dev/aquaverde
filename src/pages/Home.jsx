
import { Hero } from "@/components/hero/Hero"
import { Navbar } from "@/components/navbar/Navbar"
import { AboutProject } from "@/components/about/AboutProject"
import { ObjectivesSection } from "@/components/objectives/ObjectivesSection"
import { HowWorks } from "@/components/howWorks/HowWorks"
import { Results } from "@/components/results/Results"
import { TeamSection } from "@/components/team/TeamSection"
import { ContactSection } from "@/components/contact/ContactSection"
import { FooterAnimated } from "@/components/footer/Footer"



export const Home = () => {
  return (
    <div className="flex flex-col bg-secondary">
        <Navbar />
        <Hero />
        <AboutProject />
        <ObjectivesSection />
        <HowWorks />
        <Results />
        <TeamSection />
        <ContactSection />
        <FooterAnimated />
    </div>
  )
}

