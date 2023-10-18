import { NavLink } from 'react-router-dom';
import cl from './Navbar.module.css'
import Friends from './Friends/Friends';

const Navbar = (props) => {
  console.log(props);
  return (
    <nav className={cl.nav}>
      <div>
        <NavLink to='/profile'>Profile</NavLink>
      </div>
      <div>
        <NavLink to='/messages'>Messages</NavLink>
      </div>
      <div>
        <NavLink to='/news'>News</NavLink>
      </div>
      <div>
        <NavLink to='music'>Music</NavLink>
      </div>
      <div>
        <NavLink to='setting'>Settings</NavLink>
      </div>
      <div>
        <Friends friends={props.friends}/>
      </div>
    </nav>
  )
};

export default Navbar;