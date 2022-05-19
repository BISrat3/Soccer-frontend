import React from "react"
import {MDBIcon, MDBContainer, MDBFooter} from "mdb-react-ui-kit"
import '../App.css'
// import LinkedFooter from '../images/LinkedFooter.png'

// import { MDBContainer, MDBFooter, MDBRow } from "mdbreact"

function Footer(){
    return(
        <div className='showPlayer'>
        <MDBFooter className='bg-dark text-center text-white footer' bgColor='#00695c'>
            <MDBContainer className='p-4 pb-0' bgColor='#00695c'>
            <section >
                <a className='btn btn-outline-light btn-floating m-1' href='https://www.facebook.com/' role='button'>
                <i class="fab fa-facebook-f"></i>
                {/* <MDBIcon fab icon='facebook-f' /> */}
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </a>
          {/* <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </a> */}

          <a className='btn   m-1 linkIn' href='https://www.linkedin.com/in/bisrat-menberu/' target='_blank' role='button' style={{ backgroundColor: '#00695c'}}>
            {/* <img src={LinkedFooter} alt='name'/> */}
            {/* <MDBIcon fab icon='linkedin-in' /> */}
          </a> 

          <a className='btn btn-outline-light btn-floating m-1' href='https://github.com/BISrat3'  role='button'>
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
    </div>

    //     <footer >
    //         <span> © All right reserved| Player Profile-App By: Bisrat</span>
    //     </footer>
    // 
    ) 
}

export default  Footer