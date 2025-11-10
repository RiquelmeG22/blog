import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='navBar'>
        <h2>
            <Link to={'/'}>Blog</Link>
        </h2>
        <ul>
            <li>
                <Link to={'/'} className='newBtn'>Home</Link>
            </li>
            <li> 
                <Link to={'/new'} className='newBtn'>New Post</Link>
            </li>
            <li> 
                <Link to={'/admin'} className='newBtn'>Gerenciar</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar