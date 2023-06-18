import React from "react";
import Frontendfooter from "../../landinglayouts/frontendfooter";
import Frontendmenu from "../../layouts/frontendmenu";
import Contactus from "../../layouts/contactus";
import HomeComponent from "../../layouts/Frontendhome";


function ContactComponent(){
    return(
        <React.Fragment>
            <Frontendmenu/>
            <HomeComponent/>
            <Contactus/>
            <Frontendfooter/>
        </React.Fragment>
    )
};

export default ContactComponent;