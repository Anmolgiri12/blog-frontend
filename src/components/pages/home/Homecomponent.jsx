import React from "react";
import Frontendmenu from "../../layouts/frontendmenu";
import HomeComponent from "../../layouts/Frontendhome.jsx";
import Frontendfooter from "../../landinglayouts/frontendfooter";
import Contactus from "../../layouts/contactus";
import AboutComponent from "../../layouts/aboutus";
import BlogsComponent from "../../layouts/blogs";

function HomeComponents(){
    return(
<React.Fragment>
    <Frontendmenu/>
    <HomeComponent/>
    <Contactus/>
    <AboutComponent/>
    <BlogsComponent/>
    <Frontendfooter/>
</React.Fragment>
    )
}

export default HomeComponents;