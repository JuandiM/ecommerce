import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        
        <footer className="footer page-footer font-small blue pt-4 mt-2">
          <div className="container-fluid text-center text-md-left">           
            <div className="row">            
              <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase mt-2">One-D Shop</h5>
                <Row>
                    <Col className='mt-3'>
                    <img className='px-2' src="/images/fb.png" alt=""></img>
                    <img className='px-2' src="/images/twt.png" alt=""></img>
                    <img className='px-2' src="/images/inst.png" alt=""></img>
                    </Col>
                </Row>        
              </div>      
              <hr className="clearfix w-100 d-md-none pb-3" />
              <div className="col-md-3 mb-md-0 mb-3">
               <h5 className="text-uppercase mt-2">Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="/login">Sign In</a>
                  </li>
                  <li>
                    <a href="Register">Sign Up</a>
                  </li>
                </ul>
              </div> 
              <div className="col-md-3 mb-md-0 mb-3 mt-2">
                <h5 class="text-uppercase">Pages</h5>  
                <ul className="list-unstyled">
                  <li>
                    <a href="/aboutme">About me</a>
                  </li>
                  <li>
                    <a href="/cart">Cart</a>
                  </li>
                </ul>      
              </div>
            </div>
          </div>
          <div className="footer-copyright text-center py-2">© 2021 Copyright:
            <a href="#!"> One-D Shop</a>
          </div>
        </footer>  
    )
}

export default Footer
