import { Link } from "react-scroll";

const Nav = () =>{
    return(
    <nav className="container00">
      <div className="logo">
      <ion-icon name="cube-outline"></ion-icon>
      </div>
      <ul>
        <li> <a href="#hero"><Link to="hero" smooth={true} offset={-160} duration={500}>Home</Link></a></li>
        <li> <a href="#about"><Link to="about" smooth={true} offset={-160} duration={500}>About</Link></a></li>
        <li> <a href="#skill"><Link to="skill" smooth={true} offset={-160} duration={500}>Skill</Link></a></li>
        <li> <a href="#project"><Link to="project" smooth={true} offset={-99} duration={500}>Project</Link></a></li>
        <li> <a href="#contact"><Link to="contact" smooth={true} offset={-160} duration={500}>Contact</Link></a></li>
      </ul>
    </nav> 
    )
  }
  
  export default Nav;