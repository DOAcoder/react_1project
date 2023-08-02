import "./index.scss";
import logo1 from "../../assets/image/Vector.svg";

const Header = ()=>{
  return (
    <header>
      <div className="container">
        <nav className="nav">
          <a className="nav_logo" href="#logo">
            <img src={logo1} alt="logo"/>
          </a>
          <ul className="nav_list">
            <li className="nav_list-item">
              <a className="nav_list-item-link" href="#">
                Home
              </a>
            </li>
            <li className="nav_list-item">
              <a className="nav_list-item-link" href="#">
                Latest
              </a>
            </li>
            <li className="nav_list-item">
              <a className="nav_list-item-link" href="#">
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;