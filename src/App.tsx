import { useState } from "react";
import "./App.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import StickyName from "./components/StickyName";
import Summary from "./components/Summary";

function App() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  return (
    <div className="max-w-7xl px-8 md:px-12 lg:px-24 xl:px-32 mx-auto text-left relative mb-12">
      <StickyName />
      <Hero />
      <Summary />
      <Experience />
      <Education />
      <Skills selectedSkills={selectedSkills} onChange={setSelectedSkills} />
      <Projects selectedSkills={selectedSkills} />
      
    </div>
  );
}

export default App;
