import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Soundwave from"./pages/Soundwave" 
import Join from"./pages/Join" 
import Discover from"./pages/Discover"
import NavBarExample from './Componentes/NavBarExample';
import background from "./images/fondo1.png";
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Footer from './Componentes/Footer';

function App() {
  return (
    <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs">
    <div style={{ backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',}}>
    <div className="App">
      <Router>
        <NavBarExample/>
        <Routes>
          <Route exact path="/" element={<Soundwave />} />
          <Route exact path="Join" element={<Join />} />
          <Route exact path="Discover" element={<Discover />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
