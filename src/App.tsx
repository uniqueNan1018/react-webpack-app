import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './styles/main.scss';

const App = () => {
    return (
        <div style={{ padding: '2rem' }}>
            <Routes>
                <Route path="/home" element={<Home />} />
            </Routes>
        </div>
    );
};

export default App;