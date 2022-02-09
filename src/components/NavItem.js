export default function NavItem() {
    return (
        <ul className="nav-item flex justify-center space-x-10 py-16">
        <li>
              <a className="nav-item text-white text-opacity-60 font-semibold text-lg"> 
              Profile
              </a> 
              </li>
            
         <li>
                <a className="nav-item text-white text-opacity-60 font-semibold text-lg">
                Skills
                </a>
                </li>
                <li>
                <a className="nav-item text-white text-opacity-60 font-semibold text-lg">
                Project
                </a>
                </li>
                <li>
                <a className="nav-item text-white text-opacity-60 font-semibold text-lg">
                Contact
                </a>
                </li>
                  </ul>
             
    );
}

