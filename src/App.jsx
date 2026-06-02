import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience';
import Presentation from './components/Presentation/Presentation';
import MyProjects from './components/Projects/MyProjects';
import TechStack from './components/TechStack/TechStack';

function App() {
  return (
    <>
      <div className='AppBar'></div>
      <div className="App">
        <Presentation />
        <Experience />
        <MyProjects />
        <AboutMe />
        <TechStack />
      </div>
    </>
  )
}

export default App