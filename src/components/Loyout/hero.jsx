import "./hero.scss";
import Hero_img from "../../assets/image/IMAGE.PNG";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-wrapper">
          <div className="left_side">
            <img className="img" src={Hero_img} alt="rasm" />
          </div>
          <div className="right_side">
            <p className="right_side_desc1">Illustration</p>
            <h1 className="right_side_title">
              Japan House opens in mountainside to foster peak creativity.
            </h1>
            <article className="right_side_art">
              Enim omittam qui id, ex quo atqui dictas complectitur. Nec ad
              timeam accusata, hinc justo falli id eum, ferri novum molestie eos
              cu.
            </article>
            <p className="right_side_desc2">B Reta Torphy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
