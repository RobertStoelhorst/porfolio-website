import { Navbar } from './Navbar';
import { Header } from './Header';
import { About } from './About';
import { EasySave } from './EasySave';
import { Photospread } from './Photospread';
import { JokesGenerator } from './JokesGenerator';


function App() {
  return (
    <div className="container">
      <div className="parallax">
        <Navbar />
        <Header />
        <About />       
        <EasySave />
        <Photospread />           
        <JokesGenerator />           
      </div>
    </div>
  );
}

export default App;