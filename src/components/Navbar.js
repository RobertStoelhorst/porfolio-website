import Image1 from "../images/icons8-twitter-48.png";
import Image2 from "../images/icons8-github-48.png";
import Image3 from "../images/icons8-linkedin-48.png";
import Image4 from "../images/icons8-download-resume-48.png";
import Image5 from "../images/icons8-microsoft-outlook-2019-48.png";
import Pdf from "./files/RobertStoelhorstEPAM.pdf";

export const Navbar = () => {
  return (
    <nav class="navbar">
      <ul class="socials">
        <li class="horizontal-list">
          <a
            href="https://twitter.com/RStoelhorst"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Image1} alt="twitter link icon" height="48px" />
          </a>
        </li>
        <li class="horizontal-list">
          <a
            href="https://github.com/RobertStoelhorst"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Image2} alt="github link icon" height="48px" />
          </a>
        </li>
        <li class="horizontal-list">
          <a
            href="https://www.linkedin.com/in/robertstoelhorst/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Image3} alt="limkedin link icon" height="48px" />
          </a>
        </li>
        <li class="horizontal-list" title="View and Download Resume">
          <a href={Pdf} target="_blank" rel="noreferrer">
            <img
              src={Image4}
              alt="resume link icon to download pdf"
              height="48px"
            />
          </a>
        </li>
        <li class="horizontal-list">
          <a href="mailto:robbiestoelhorst@hotmail.com">
            <img src={Image5} alt="outlook email link icon" height="48px" />
          </a>
        </li>
      </ul>
    </nav>
  );
};
