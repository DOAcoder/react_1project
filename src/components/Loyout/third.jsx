import { baza } from "../../assets/data_b";
import Box from "../Card/box";
import "./third.scss";

const Third = () => {
  return (
    <section id="third">
      <div className="container">
        <div className="thrid-wrapper">
          <h3 className="thrid-wrapper_title">LATEST POSTS</h3>
          <div className="card_box">
            {baza?.map((item) => (
              <Box
                image={item.image}
                title={item.title}
                desc={item.desc}
                author={item.author}
              />
            ))}
          </div>
          <button className="thrid-wrapper_btn">view all latest posts</button>
        </div>
      </div>
    </section>
  );
};

export default Third;
