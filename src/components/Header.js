import { Link } from 'react-router-dom'

function Header(props){
    return (
        <nav className='nav player'>
            <Link to='/' className='link'>Home</Link>  
            <Link to='/' className='link'>About</Link>
        </nav>
    )
}

export default Header