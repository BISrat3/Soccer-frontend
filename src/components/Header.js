import { Link } from 'react-router-dom'

function Header(props){
    return (
        <nav className='nav player'>
            <Link to='/'>
                <div >Players</div>
            </Link>
        </nav>
        
    )
}

export default Header