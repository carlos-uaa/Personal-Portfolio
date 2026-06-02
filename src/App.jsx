import AboutMe from './Components/AboutMe/AboutMe';
import Experience from './Components/Experience/Experience';
import Presentation from './Components/Presentation/Presentation';
import MyProjects from './Components/Projects/MyProjects';
import TechStack from './Components/TechStack/TechStack';

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