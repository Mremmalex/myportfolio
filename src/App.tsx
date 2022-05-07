import ContactSection from "./components/layout/contact/ContactSection";
import HeroSection from "./components/layout/hero/HeroSection";
import Navbar from "./components/ui/navbar/Navbar";
import ServiceSection from "./components/layout/service/ServiceSection";
import AboutSection from "./components/layout/about/AboutSection";
import style from "./App.module.scss";
import FooterSection from "./components/layout/footer/FooterSection";

function App() {
	return (
		<div className={style.home}>
			<Navbar />
			<HeroSection />
			<AboutSection />
			<ServiceSection />
			<ContactSection />
			<FooterSection />
		</div>
	);
}

export default App;
