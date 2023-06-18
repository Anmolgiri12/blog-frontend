import React from "react";
import Frontendfooter from "../../landinglayouts/frontendfooter";
import Frontendmenu from "../../landinglayouts/landingmenu";
import FrontendLanding from "../../landinglayouts/frontendlanding";

function Landingpage(){
    return(
        <React.Fragment>
            <Frontendmenu/>
             <FrontendLanding/>
             <Frontendfooter/>
        </React.Fragment>
           
       
    )
};

export default Landingpage;