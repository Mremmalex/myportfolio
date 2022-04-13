import { useState } from "react";
import ContactSection from "./components/layout/ContactSection";
import HeroSection from "./components/layout/HeroSection";
import Navbar from "./components/layout/Navbar";
import SkillSection from "./components/layout/SkillSection";

function App() {
	return (
		<div className="overflow-hidden">
			<Navbar />
			<HeroSection />
			<SkillSection />
			<ContactSection />
		</div>
	);
}

export default App;
