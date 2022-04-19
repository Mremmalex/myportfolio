import { useState } from "react";
import ContactSection from "./components/layout/ContactSection";
import HeroSection from "./components/layout/HeroSection";
import Navbar from "./components/ui/Navbar";
import ServiceSection from "./components/layout/ServiceSection";
import SkillSection from "./components/layout/SkillSection";

function App() {
	return (
		<div className="overflow-hidden">
			<Navbar />
			<HeroSection />
			<SkillSection />
			<ServiceSection />
			<ContactSection />
		</div>
	);
}

export default App;
