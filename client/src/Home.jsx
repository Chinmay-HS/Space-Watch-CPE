import './App.css';
import NavbarJD from './components/layout/navbar/navbar';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page4 from './pages/Page4';



function Home() {
  return (
    <div className="Home">
      {/* <NavbarJD/> */}
      <Page1/>
      <Page2/>
      <Page4/>
    </div>
    
  );
}



export default Home;
