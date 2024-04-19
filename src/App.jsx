import About from "./components/About"
import Contacts from "./components/Contacts"
import Experience from "./components/Experience"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Title from "./components/Title"
import Footer from "./components/Footer"


export default function App() {
  return (
    
      <div className=''>
        <Navbar />
        <Title />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contacts />
        <Footer />
      </div>
    )
}
