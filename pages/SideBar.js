import { ImProfile } from 'react-icons/im'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineFolderOpen } from 'react-icons/ai'
import Link from 'next/link';

const SideBar = () => {
return(
  <div className="fixed top-20 left-8 h-screen w-16 m-0
                  flex flex-col">
    <ul>
        <li>
          <Link href="/">
           <a><SideBarIconAbout icon ={<ImProfile size="45" />} /></a>
          </Link>     
                
          <Link href="/projects">
            <a><SideBarIconPortfolio icon ={<AiOutlineFolderOpen size="45" />} /></a>
          </Link>
            
          <Link href="/contact">
            <a><SideBarIconContact icon ={<BsTelephone size="45" />} /></a>
          </Link>
            
        </li>
    </ul>

  </div>  
);
};

const SideBarIconAbout = ({ icon, text = 'About' }) => (
<div className="sidebar-icon group 
                h-12 w-12 mt-8 mb-2 mx-auto 
              text-blue-600
              hover:text-blue-900">
    {icon}

    <span className="sidebar-tooltip 
                     group-hover:scale-100
                     absolute w-auto p-2 min-w-max left-14 
                     rounded-md shadow-md
                     text-white bg-gray-900
                     text-xs font-bold
                     transition-all duration-100 scale-0 origin-left">
        {text}
    </span>
</div>
);

const SideBarIconPortfolio = ({ icon, text = 'Projects' }) => (
    <div className="sidebar-icon group 
                    h-12 w-12 mt-8 mb-2 mx-auto 
                  text-blue-600
                  hover:text-blue-900">
        {icon}
    
        <span className="sidebar-tooltip 
                         group-hover:scale-100
                         absolute w-auto p-2 min-w-max left-14
                         rounded-md shadow-md
                         text-white bg-gray-900
                         text-xs font-bold
                         transition-all duration-100 scale-0 origin-left">
            {text}
        </span>
    </div>
    );

    const SideBarIconContact = ({ icon, text = 'Contact' }) => (
        <div className="sidebar-icon group 
                        h-12 w-12 mt-8 mb-2 mx-auto 
                      text-blue-600
                      hover:text-blue-900">
            {icon}
        
            <span className="sidebar-tooltip 
                             group-hover:scale-100
                             absolute w-auto p-2 min-w-max left-14
                             rounded-md shadow-md
                             text-white bg-gray-900
                             text-xs font-bold
                             transition-all duration-100 scale-0 origin-left">
                {text}
            </span>
        </div>
        );
export default SideBar;