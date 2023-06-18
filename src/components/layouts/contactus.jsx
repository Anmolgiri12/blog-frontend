import React from "react";
import img1 from '../img/people.png'

function Contactus(){
    return(
           <React.Fragment>
           <div className="contact_us">
              <img className="contact_img" src={img1} alt="Graphics"     />

              <div className="c_content">
               <p>
                  Lorem ipsum dolor sit  Dolore, sit? Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Maxime minus vel laborum amet? Consequatur magnam <br /> sequi, saepe, reprehenderit velit <br /> repudiandae eos accusantium accusamus quas veniam, nobis corporis <br /> quibusdam? Dicta, veritatis.
               </p>
              </div>
           </div>
           </React.Fragment>
    )
}
export default Contactus;