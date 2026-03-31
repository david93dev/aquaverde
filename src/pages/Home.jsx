
import { Hero } from "@/components/hero/Hero"
import { Navbar } from "@/components/navbar/Navbar"
import { AboutProject } from "@/components/about/AboutProject"
import { ObjectivesSection } from "@/components/objectives/ObjectivesSection"
import { HowWorks } from "@/components/howWorks/HowWorks"
import { Results } from "@/components/results/Results"
import { TeamSection } from "@/components/team/TeamSection"



export const Home = () => {
  return (
    <div className="flex flex-col bg-secondary pb-20">
        <Navbar />
        <Hero />
        <AboutProject />
        <ObjectivesSection />
        <HowWorks />
        <Results />
        <TeamSection />
    </div>
  )
}

