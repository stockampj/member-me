import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';
// import DropDown from './DropDown';

function NavBar() {
  return (
    <div className="">
      <div className='row top-nav-row'>
        <ul>
          <li><Link className='btn home-button' to='/'><i className="fas fa-cat">  'Member Me? </i></Link></li>
        </ul>
      </div>


    <div className='row bottom-nav-row'>
      <div className='left-cluster'>


          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="">
              <a className="btn" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Awards</a>
            </li>
            <li className="">
              <a className="btn" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Honorable Mentions</a>
            </li>
          </ul>
        </div>
        <div className='right-cluster'>
          <p>

          <Link className='btn shopping-icon' to='/HotPicks'><i className='fas fa-shopping-bag'></i></Link> 

          </p>
        </div>


      </div>




    </div>
  );
}

export default NavBar;