import React from 'react';

const Header = () =>(
     <header className="header">
         <img src="" alt="" className="header_img"/>
         <div className="header_menu">
             <div className="header_menu--profile">
                 <img src="" alt=""/>
                 <p>Perfil</p>
             </div>
             <ul>
                 <li><a href="/">Cuenta</a></li>
                 <li><a href="/">Cerrar sesion</a></li>
             </ul>
         </div>
     </header>
);

export default Header;