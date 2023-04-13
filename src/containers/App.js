import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import New from '../pages/New';
import BlogDetails from '../components/BlogDetails';
import NotFound from '../pages/NotFound';



const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/new' element={<New />} />
                <Route path='/blogs/:id' element={<BlogDetails />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    );
}
export default App;