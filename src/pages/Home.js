import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import "./Home.css";
const Home = () => {
  return ReactDOM.createPortal(
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Hello, my name is</div>
          <div className="text-2">Md Parvez Musharaf</div>
          <div className="text-3">
            And I'm a <span className="typing"></span>
          </div>
          <Link to="/hiring">Hire me</Link>
        </div>
      </div>
    </section>,
    document.getElementById("homes")
  );
};
export default Home;
