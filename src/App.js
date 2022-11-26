import React from 'react'
import Form from './pages/form.js'
import Submitted from './pages/submitted.js'
import View from './pages/view.js'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {

    document.body.style.backgroundColor = "#9CBEC7";

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/form" element={<Form />}/>
                <Route path="/submission" element={<Submitted />}/>
                <Route path="/view" element={<View />} />
                <Route path="/" element={<Navigate to="/form"/>}/>
            </Routes>
        </BrowserRouter>
    )

}

export default App;