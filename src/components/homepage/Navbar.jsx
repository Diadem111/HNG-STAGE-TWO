import React, {useState, useEffect} from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';


const Navbar = () => {

    const [nav, setNav] = useState(false);

    return (
        <nav className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
             {/* logo side */}
             <div className="flex items-center">
                    <div  onClick={()=> setNav(!nav)} className="cursor-pointer">
                        <AiOutlineMenu size={30}/>
                    </div>
                    <h1 ClassName="text-2xl sm:text-3xl lg:text-4xl font-poppins  mx-auto">
                        MovieBox222
                    </h1>
                </div>

                {/* search input area */}
                <div className="bg-pink-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]" >
                   <AiOutlineSearch size={25}/>
                   <input
                   className="bg-transparent p-2 w-full focus:outline-none"
                   type="text"
                   placeholder="Search movies"
                   />
                </div>
                {/* sign button */}
                <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full ">
                    Sign in
                </button>
        </nav>
    );
};

export default Navbar;