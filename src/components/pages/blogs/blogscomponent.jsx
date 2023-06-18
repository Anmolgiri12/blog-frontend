import React from "react";
import Frontendfooter from "../../landinglayouts/frontendfooter";
import Frontendmenu from "../../landinglayouts/landingmenu";

function BlogComponent() {
  return (
    <React.Fragment>
      <Frontendmenu />
      <h1>blog documnets</h1>
      <Frontendfooter/>
    </React.Fragment>
  );
}

export default BlogComponent;
