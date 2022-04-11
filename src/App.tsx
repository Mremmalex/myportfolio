import { useState } from "react";
import HeroSection from "./components/layout/HeroSection";
import Navbar from "./components/layout/Navbar";
import SkillSection from "./components/layout/SkillSection";

function App() {
	return (
		<>
			<Navbar />
			<HeroSection />
			<SkillSection />
		</>
	);
}

export default App;
