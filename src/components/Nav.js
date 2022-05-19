import  { Nav} from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'

function Header(props){
    return (
         <Navbar bg="success" variant="dark">
            <Nav className="me-auto">
            <Nav.Link href="/" className="me-auto">Home</Nav.Link> 
            <Nav.Link href="/players/search">Players</Nav.Link>
         </Nav>
       </Navbar>
    )
}

export default Header