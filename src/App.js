import React from "react";
import {BrowserRouter as Router, Routes, Switch} from "react-router-dom";
const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<IndexPage/>} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;