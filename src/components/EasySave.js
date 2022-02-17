import Image0 from "../images/EasySave-copy.png";
import Image1 from "../images/icons8-react-native-48.png";
import Image2 from "../images/icons8-javascript-48.png";
import Image3 from "../images/icons8-html-5-48.png";
import Image4 from "../images/icons8-css3-48.png";
import Image5 from "../images/icons8-external-link-48.png";
import Image6 from "../images/icons8-github-white-48.png";
import Tilt from "react-vanilla-tilt";

export const EasySave = () => {
  return (
    <div className="background">
      <div className="featured">
        <h1>Projects</h1>
      </div>
      <Tilt>
        <div className="tilt-container">
          <div class="box">
            <div class="imgBx">
              <img src={Image0} width="650" height="450" alt="" />
            </div>
            <div class="contentBx">
              <h2 class="project-title">EasySave - Budget Planner</h2>
              <p>
                EasySave is an app that I built during my final project week at
                General Assembly. This project was an extremely satisfying build
                and I will continue to build on other features I had wanted to
                build this app since the beginning of the course, It is a
                replica clone both in terms of functionality and design. Please
                follow the link to my Github below for all the details.
              </p>
              <ul class="tech-stack">
                <li class="horizontal-list">
                  <img src={Image1} height="35px" alt="React icon" />
                </li>
                <li class="horizontal-list">
                  <img src={Image2} height="40px" alt="Javascript icon" />
                </li>
                <li class="horizontal-list">
                  <img src={Image3} height="40px" alt="HTML 5 icon" />
                </li>
                <li class="horizontal-list">
                  <img src={Image4} height="40px" alt="CSS 3 icon" />
                </li>
              </ul>
              <ul class="external-links">
                <li class="horizontal-list">
                  <a
                    href="https://robertstoelhorst.github.io/easy-save/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Image5} height="40px" alt="CSS 3 icon" />
                  </a>
                </li>
                <li class="horizontal-list">
                  <a
                    href="https://github.com/RobertStoelhorst/easy-save"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Image6} height="40px" alt="CSS 3 icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};
