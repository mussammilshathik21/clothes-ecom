import "./Hero.css"
import heroImg from "../assets/Hero/Hero1.jpg"

function Hero(){
  return(
    <div
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-text">
        <h1>Style That Defines You </h1>
        <h3>Discover the latest men fashion</h3>
        <button>Shop Now</button>
      </div>
    </div>
  )
}

export default Hero