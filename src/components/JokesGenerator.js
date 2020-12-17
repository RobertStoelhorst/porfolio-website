import Image0 from '../images/Jokes-Generator.png';
import Image1 from '../images/ruby.png';
import Image2 from '../images/rails.png';
import Image3 from '../images/icons8-bootstrap-48.png';
import Image4 from '../images/icons8-html-5-48.png';
import Image5 from '../images/icons8-css3-48.png';
import Image6 from '../images/icons8-external-link-48.png';
import Image7 from '../images/icons8-github-white-48.png';
import Tilt from 'react-vanilla-tilt';

export const JokesGenerator = () => {
    return (
        <div className="background">
        <Tilt>
            <div className="tilt-container">
                <div class="box">
            <div class="imgBx">
                <a href="https://murmuring-basin-92750.herokuapp.com/" target="_blank"><img src={ Image0 } width="650" height="450" alt="" /></a>                
            </div>
                <div class="contentBx">
                    <h2 class="project-title">Jokes Generator - Social App</h2>
                    <p>Jokes Generator was my first real project after Tic Tac Toe, Where a user can sign-up, 
                       generate random jokes from the database, generate random jokes from a Gem, add 
                       there own jokes and like other users jokes It has 3 models built with Ruby on 
                       Rails.</p>
                    <ul class="tech-stack">
                        <li class="horizontal-list"><img src={ Image1 } height="30px" alt="Ruby icon" /></li>
                        <li class="horizontal-list"><img src={ Image2 } height="30px" alt="Rails icon" /></li>
                        <li class="horizontal-list"><img src={ Image3 } height="40px" alt="Bootstrap icon" /></li>
                        <li class="horizontal-list"><img src={ Image4 } height="40px" alt="HTML 5 icon" /></li>
                        <li class="horizontal-list"><img src={ Image5 } height="40px" alt="CSS 3 icon" /></li>
                    </ul>
                        <ul class="external-links">
                            <li class="horizontal-list"><a href="https://murmuring-basin-92750.herokuapp.com/" target="_blank"><img src={ Image6 } height="40px" alt="site link icon" /></a></li>
                            <li class="horizontal-list"><a href="https://github.com/RobertStoelhorst/Project1" target="_blank"><img src={ Image7 } height="40px" alt="github link icon" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Tilt>    
        </div>  
    );
}