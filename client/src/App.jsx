import './App.css';
import Navbar from './components/Layout/navbar/navbar';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Page1/>
      <Page2/>
      <Page3/>
    </div>
    
  );
}



export default App;
