import '../App.css'
import img from '../images/profile.png'

export default function About() {
  return (
    <div>
    <h1>Our Company</h1>
    <div className = "about">
      <img className ="profile" src ={img} alt="Theron Mitchell Profile picture" />
      <p>
        Our Company
       </p>
    </div>
    </div>
  );
}
