import React from "react"
import {MDBIcon, MDBContainer, MDBFooter} from "mdb-react-ui-kit"
import '../App.css'

function Footer(){
    return(
        <div className='showPlayer'>
            <MDBFooter className='bg-dark text-center text-white footer' bgColor='#00695c'>
                <MDBContainer className='p-4 pb-0' bgColor='#00695c'>
                <section >
                    <a className='btn  btn-outline-light m-1 linkIn'  href='https://www.linkedin.com/in/bisrat-menberu/' role='button' style={{ backgroundColor: '#00695c'}}> LinkedIn
                <MDBIcon fab icon='linkedin-in' />
                    </a> 
                    <a className='btn btn-outline-light m-1 linkIn' href='https://github.com/BISrat3'  role='button' style={{ backgroundColor: '#00695c'}}>GitHub
                    </a>
                </section>
            </MDBContainer >
            <MDBContainer fluid>
                <div className='text-center p-3' style={{ backgroundColor: '#00695c' }}>Powered By sportmonks API. All Rights Reserved. Copyright:  
                    &copy; {new Date().getFullYear()} Bisrat Amtataw
                    <a className='text-white foot Link' href='https://www.linkedin.com/in/bisrat-menberu/'> 
                  
                    </a>
                </div>
            </MDBContainer>
            </MDBFooter>
        </div>
    ) 
}

export default  Footer