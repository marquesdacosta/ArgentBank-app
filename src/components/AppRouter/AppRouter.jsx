import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Signin from '../../pages/Sign-in';
import User from '../../pages/User';
import Footer from '../../containers/Footer';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<Signin />} />
                <Route path="/user" element={<User />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default AppRouter;
