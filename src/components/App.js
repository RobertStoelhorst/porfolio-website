import { Navbar } from './Navbar';
import { Header } from './Header';
import { About } from './About';

function App() {
  return (
    <div className="container">
      <div className="parallax">
        <Navbar />
        <Header />
        <About />
      </div>
    </div>
  );
}

export default App;