import img1 from '../img/Anmol.png'
import { Link } from 'react-router-dom';

function Frontendmenu(){
    return(
    //    <div className=" flex justify-between items-center rounded-3xl	 h-24 max-w-[1260px] mx-auto px-10 bg-purple-500 shadow  text-white "><img className='w-40 rounded-3xl		' src={img1} alt="" />
    //    <ul className="flex">
    //     <li className="p-8  hover:bg-red-200 font-bold text-red-400 "><Link to="/">Home</Link></li>
    //     <li className="p-8 hover:bg-red-200 font-bold"><Link to='/contact'>Contact</Link></li>
    //     <li className="p-8  hover:bg-red-200 font-bold"><Link to='/about us'>About us</Link></li>
    //     <li className="p-8  hover:bg-red-200 font-bold"><Link to='/blog'>Blog</Link></li>
    //    </ul>
    //    </div>
    <nav className='home_nav'>
        <img className='home_logo' src={img1} alt="" />

        <main className='home_nav'>
            <Link className='home_name' to={'/'}>Home</Link>
            <Link className='home_name'  to={'/contact'}>Contact</Link>
            <Link className='home_name'  to={'/aboutus'}>About us</Link>
            <Link className='home_name' to={'/blog'}>Blog</Link>
        </main>
    </nav>

    )
};

export default Frontendmenu;