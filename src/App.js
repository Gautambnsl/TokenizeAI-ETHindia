import './App.css';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
import SideBar from './components/SideBar/SideBar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <SideBar/>
      <MainSection />
    </BrowserRouter>
    </>
  );
}

export default App;
