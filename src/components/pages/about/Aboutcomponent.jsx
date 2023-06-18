import React from "react";
import Frontendmenu from "../../landinglayouts/landingmenu";
import Frontendfooter from "../../landinglayouts/frontendfooter";

function AboutComponent(){
    return(
        <React.Fragment>
            <Frontendmenu/>
            <h1>About component</h1>
            <Frontendfooter/>
        </React.Fragment>
    )
};

export default AboutComponent;