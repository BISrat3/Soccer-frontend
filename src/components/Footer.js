import React from "react"
import {MDBIcon, MDBContainer, MDBFooter} from "mdb-react-ui-kit"
import '../App.css'
// import { MDBContainer, MDBFooter, MDBRow } from "mdbreact"

function Footer(){
    return(
        <MDBFooter className='bg-dark text-center text-white' bgColor='#00695c'>
            <MDBContainer className='p-4 pb-0' bgColor='#00695c'>
            <section className='mb-6'>
                <a className='btn btn-outline-light btn-floating m-1' href='https://www.facebook.com/' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </a>
          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='https://www.linkedin.com/in/bisrat-menberu/' role='button' style={{ backgroundColor: '#00695c'}}>
            <MDBIcon fab icon='linkedin-in' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </a>
        </section>
      </MDBContainer >
        <MDBContainer fluid>
        <div className='text-center p-3' style={{ backgroundColor: '#00695c' }}>
            &copy; {new Date().getFullYear()}  Copyright: 
        <a className='text-white' href='https://www.linkedin.com/in/bisrat-menberu/'>
            - Bisrat Amtataw
        </a>
      </div>
      </MDBContainer>
    </MDBFooter>

    //     <footer className="footer">
    //         <span> © All right reserved| Player Profile-App By: Bisrat</span>
    //     </footer>
    // 
    ) 
}

export default  Footer