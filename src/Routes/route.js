import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../Pages/Home/home.jsx"
import Class from "../Pages/Class/class.jsx"
import Error from "../Pages/Error/error.jsx"

function RouteIndex() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/class" element={<Class />} />

                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteIndex