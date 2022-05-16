import { Link } from 'react-router-dom'

function Header(props){
    return (
        <nav className='nav player'>
            <Link to='/'>Home</Link>  
            <Link to='/'>About</Link>
        </nav>
    )
}

export default Header