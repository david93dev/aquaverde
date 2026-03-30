
import { Hero } from "@/components/hero/Hero"
import { Navbar } from "@/components/navbar/Navbar"
import { AboutProject } from "@/components/about/AboutProject"
import { ObjectivesSection } from "@/components/objectives/ObjectivesSection"
import { HowWorks } from "@/components/howWorks/HowWorks"



export const Home = () => {
  return (
    <div className="flex flex-col bg-secondary pb-20">
        <Navbar />
        <Hero />
        <AboutProject />
        <ObjectivesSection />
        <HowWorks />
    </div>
  )
}

