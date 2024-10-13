import { Menu, MenuItem } from './style';
import { MenuContext } from '../../context/usecontext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const { isOpen, toggleMenu } = useContext(MenuContext);

  return (
      <Menu isOpen={isOpen}>
        <MenuItem onClick={toggleMenu} href="#">
            <Link style={{color: 'white', textDecoration: 'none'}} to='/'>Home</Link>
        </MenuItem>

        <MenuItem onClick={toggleMenu} href="#">
            <Link style={{color: 'white', textDecoration: 'none'}} to='/Photos'>Fotos</Link>
        </MenuItem>
        
        <MenuItem onClick={toggleMenu} href="#">
            <Link style={{color: 'white', textDecoration: 'none'}} to='/Coments'>Comentarios</Link>
        </MenuItem>

        <MenuItem onClick={toggleMenu} href="#">Contato</MenuItem>
      </Menu>
  );
};