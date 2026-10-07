import BackgroundEffects from './components/Background/BackgroundEffects';
import Navbar from './components/Navbar/Navbar';
import Presentation from './components/Presentation/Presentation';
import Experience from './components/Experience/Experience';
import MyProjects from './components/Projects/MyProjects';
import AboutMe from './components/AboutMe/AboutMe';
import TechStack from './components/TechStack/TechStack';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import FloatingCTA from './components/FloatingCTA/FloatingCTA';
import RevealOnScroll from './components/common/RevealOnScroll';
import './App.scss';

function App() {
  return (
    <div className="App">
      {/* Interactive Animated Background Canvas & Floating Aurora Mesh */}
      <BackgroundEffects />

      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Content Sections with Fluid Scroll-Reveal Transitions */}
      <main className="main-content">
        <RevealOnScroll direction="fade" delay={100} threshold={0.05} reappear={true}>
          <Presentation />
        </RevealOnScroll>

        <RevealOnScroll direction="up" threshold={0.08} reappear={true}>
          <Experience />
        </RevealOnScroll>

        <RevealOnScroll direction="up" threshold={0.08} reappear={true}>
          <MyProjects />
        </RevealOnScroll>

        <RevealOnScroll direction="up" threshold={0.08} reappear={true}>
          <AboutMe />
        </RevealOnScroll>

        <RevealOnScroll direction="up" threshold={0.08} reappear={true}>
          <TechStack />
        </RevealOnScroll>

        <RevealOnScroll direction="up" threshold={0.08} reappear={true}>
          <Contact />
        </RevealOnScroll>
      </main>

      {/* High Visibility Footer */}
      <Footer />

      {/* Persistent Floating Quick Contact Action */}
      <FloatingCTA />
    </div>
  );
}

export default App;