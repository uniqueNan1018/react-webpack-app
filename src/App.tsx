import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/main.scss';

const Home = lazy(() => import('@pages/Home'));
const Profile = lazy(() => import('@pages/Profile'));

const App = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Suspense>
    );
};

export default App;