import { Link } from 'react-router-dom'

function Header(props){
    return (
        <nav className='nav player'>
            <Link to='/' className='link'>Home</Link>  
            <Link to='/' className='link'>Players</Link>
        </nav>
    )
}

export default Header