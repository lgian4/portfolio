import { useState } from "react";
import "./App.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import StickyName from "./components/StickyName";
import Summary from "./components/Summary";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  const [selectedSkill, setSelectedSkill] = useState<string>("");
  return (
    <div className="bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl px-8 md:px-12 lg:px-24 xl:px-32 mx-auto text-left relative mb-12 ">
        <DarkModeToggle />
        <StickyName />
        <Hero />
        <Summary />
        <Experience />
        <Education />
        <Skills selectedSkills={selectedSkill} onChange={setSelectedSkill} />
        <Projects selectedSkill={selectedSkill} />
      </div>
    </div>
  );
}

export default App;
