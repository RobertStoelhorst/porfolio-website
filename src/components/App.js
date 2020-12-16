import { Navbar } from './Navbar';
import { Header } from './Header';
import { About } from './About';
import { EasySave } from './EasySave';
// import { Tilt } from '../react-vanilla-tilt';

function App() {
  return (
    <div className="container">
      <div className="parallax">
        <Navbar />
        <Header />
        <About />
        <EasySave />
      </div>
    </div>
  );
}

export default App;