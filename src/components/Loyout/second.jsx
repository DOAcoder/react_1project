import { data } from "../../assets/data_b";
import Card from "../Card/card";
import "./second.scss";

const Second = () => {
  
  return (
    <section id="second_sec">
      <div className="container">
        <div className="sec-wrapper">
          {data?.map((item) => (
            <Card
              image={item.image}
              title={item.title}
              desc={item.desc}
              author={item.author}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Second;
