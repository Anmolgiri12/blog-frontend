import * as React from "react";
import { Routes , Route } from "react-router-dom";
import Landingpage from "../components/pages/landingpage/landingpage";
import AboutComponent from "../components/pages/about/Aboutcomponent";
import ContactComponent from "../components/pages/contact/Contactcomponent";
import Pagenotfound from "../components/error/pagenotfound";
import BlogComponent from "../components/pages/blogs/blogscomponent";
import Logincomponent from "../components/pages/auth/logincomponent";
import RegisterComponent from "../components/pages/auth/registercomponent.jsx";
import Admincomponent from "../components/admin-panel/pages/dashboardcomponent.jsx";
import HomeComponents from '../components/pages/home/Homecomponent.jsx'
// import Routemiddleware from "../components/middleware/routemiddleware";
function WebRouter(){
    return(
        <Routes>
            <Route path="/" element={<Landingpage/>}/>
            <Route path="/about us" element={<AboutComponent/>}/>
            <Route path="/contact" element={<ContactComponent/>}/>
            <Route path="/blog" element={<BlogComponent/>}/>
            <Route path="*" element={<Pagenotfound/>}/>
            <Route path="/login" element={<Logincomponent/>}/>
            <Route path="/register" element={<RegisterComponent/>}/>
            <Route path="/home" element={<HomeComponents/>}/>

            <Route path="/admin" element={<Admincomponent/>}/>
            {/* <Route element={<Routemiddleware/>}> */}
            {/* </Route> */}
        </Routes>
    )
}

export default WebRouter;