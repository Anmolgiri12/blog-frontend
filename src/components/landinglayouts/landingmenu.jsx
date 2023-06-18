import img1 from '../img/Anmol.png'
import { Link } from 'react-router-dom';

function Frontendmenu(){
    return(
       <div className=" landing_menu flex   items-center rounded-3xl bg-green-900  h-24 max-w-[1260px] mx-auto px-10 shadow  text-white ">
        <div className='first_logo'>
            <img className=' w-40 rounded-3xl flex text-center	' src={img1} alt="" />
       </div>

       </div>
    )
};

export default Frontendmenu;