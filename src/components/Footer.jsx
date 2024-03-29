// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
// import '../styles/Footer.css'
import '../App.css'
import github from '../images/github.png'
import linkedin from '../images/linkedin.jpg'


// In Navbar, we can assign a style from an object by using curly braces
function Footer() {
  return (
    <footer>
        <a href="https://github.com/tronmitch"><img src={github} alt="" /></a>
        <a href="https://linkedin.com/in/theron-mitchell-9510552ba"><img src={linkedin} alt="" /></a>
</footer>
  );
}

export default Footer;

