const Card = ({ title, desc, image, author }) => {
  return (
    <div className="card">
      <div className="card_img_box">
        <img className="img" src={image} alt="image" />
      </div>
      <div className="card_body">
        <h4 className="card_body_title">{title}</h4>
        <article className="card_body_desc1">{desc}</article>
        <p className="card_body_desc2">{author}</p>
      </div>
    </div>
  );
};

export default Card;
