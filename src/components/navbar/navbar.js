import { Menu, MenuItem } from './style';
import { MenuContext } from '../../context/usecontext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const { isOpen } = useContext(MenuContext);

  return (
      <Menu isOpen={isOpen}>
        <MenuItem href="#">
            <Link style={{color: 'white', textDecoration: 'none'}} to='/'>Home</Link>
        </MenuItem>

        <MenuItem href="#">
            <Link style={{color: 'white', textDecoration: 'none'}} to='/Photos'>Fotos</Link>
        </MenuItem>
        
        <MenuItem href="#">Comentarios</MenuItem>
        <MenuItem href="#">Contato</MenuItem>
      </Menu>
  );
};