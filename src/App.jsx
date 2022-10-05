import './App.css';
import Topbar from './components/topbar/topbar';
import Home from './pages/home/home';
import Projects from './pages/projects/projects';
import About from './pages/aboutme/aboutme';
import Footer from './components/footer/footer';
import { Route, Routes } from 'react-router-dom';


function App() {
    return (
        <>
            <Topbar></Topbar>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/projects' element={<Projects/>}></Route>
                <Route path='/about' element={<About/>}></Route>
            </Routes>
            <Footer></Footer>
        </>
    );
}

export default App;
