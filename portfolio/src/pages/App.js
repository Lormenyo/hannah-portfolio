import React from 'react';
import './App.css';
import NavBar from '../components/navBar/navBar';
import IntroSection from '../components/introSection/introSection';
import ProjectSection from '../components/projectSection/projectSection';
import SkillsSection from '../components/skillsSection/skillsSection';
import ContactSection from '../components/contactSection/contactSection';
import AppFooter from '../components/appFooter/appFooter';
import ScrollToTop from '../components/scrollToTop/scrollToTop';
import { toDarkMode } from '../theme/theme';



function App() {
  toDarkMode();

  return (
    <div className="App dark:bg-appBackground bg-white">
      <NavBar />
      <IntroSection />
      <ProjectSection />
      <SkillsSection />
      <ContactSection />
      <ScrollToTop />
      <AppFooter />
    </div>
  );
}

export default App;
