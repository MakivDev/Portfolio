import Header from "./../components/homePage/header/Header"
import Projects from "./../components/homePage/projects/Projects"
import Skills from "./../components/homePage/skills/Skills"
import AboutMe from "./../components/homePage/about-me/AboutMe"
import Contacts from "./../components/homePage/contacts/Contacts"

import "./../components/homePage/styles/animation.css"
import "./../components/homePage/styles/media.css"

const Home = () => {
    return ( 
        <>
        <Header />
        <Projects/>
        <Skills/>
        <AboutMe/>
        <Contacts/>
        
        </>
     );
}
 
export default Home;