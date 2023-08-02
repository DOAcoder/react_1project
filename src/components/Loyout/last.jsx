import { resp } from "../../assets/data_b";
import Item from "./../Card/item";
import "./last.scss";

const Last = () => {
  return (
    <section id="last_sec">
      <div className="container">
        <div className="last_sec_wrapper">
          <div className="last_sec_wrapper_title">featured POSTS</div>

          <div className="card_box">
            {resp?.map((item) => (
              <Item
                image={item.image}
                title={item.title}
                desc={item.desc}
                author={item.author}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Last;
