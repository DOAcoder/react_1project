import "./index.scss";
import logo from "../../assets/image/footer/IMAGE.svg";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="wrapper">
          <div className="top_side">
            <a className="footer_logo" href="#">
              <img src={logo} alt="LOGO" />
            </a>
            <p className="footer_desc1">
              © 2018 Noiceland™, all rights reserved
            </p>
          </div>

          <div className="bottom_side">
            <div className="left_side">
              <h3 className="left_side-title">Categories</h3>
              <ul className="foot_list1">
                <li className="foot_list1-item">
                  <a className="foot_list1-item-link" href="#">
                    Animation
                  </a>
                  <a className="foot_list1-item-link" href="#">
                    Interactive Design
                  </a>
                </li>
                <li className="foot_list1-item">
                  <a className="foot_list1-item-link" href="#">
                    Architecture
                  </a>
                  <a className="foot_list1-item-link" href="#">
                    Miscellaneous
                  </a>
                </li>
                <li className="foot_list1-item">
                  <a className="foot_list1-item-link" href="#">
                    Graphic Design
                  </a>
                  <a className="foot_list1-item-link" href="#">
                    Photography
                  </a>
                </li>
                <li className="foot_list1-item">
                  <a className="foot_list1-item-link" href="#">
                    Illustration
                  </a>
                  <a className="foot_list1-item-link" href="#">
                    Product Design
                  </a>
                </li>
              </ul>

              <ul className="foot_list2">
                <li className="foot_list2-item">
                  <h3 className="foot_list2-item-title">Information</h3>
                  <a className="foot_list2-item-link" href="#">
                    about
                  </a>
                  <a className="foot_list2-item-link" href="#">
                    contact
                  </a>
                  <a className="foot_list2-item-link" href="#">
                    terms
                  </a>
                </li>
                <li className="foot_list2-item">
                  <h3 className="foot_list2-item-title">follow us</h3>
                  <a className="foot_list2-item-link" href="#">
                    instagram
                  </a>
                  <a className="foot_list2-item-link" href="#">
                    facebook
                  </a>
                  <a className="foot_list2-item-link" href="#">
                    twitter
                  </a>
                </li>
                <li className="foot_list2-item">
                  <h3 className="foot_list2-item-title">Template</h3>
                  <a className="foot_list2-item-link" href="#">
                    Image License Info
                  </a>
                  <a className="foot_list2-item-link" href="#">
                    Powered by Webflow
                  </a>
                </li>
              </ul>
            </div>
            <div className="right_side">
              <h3 className="right_side-title">Subscribe to newsletter</h3>
              <div className="input_box">
                <input
                  className="input"
                  type="email"
                  placeholder="Email address"
                />
                <button className="btn">send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
