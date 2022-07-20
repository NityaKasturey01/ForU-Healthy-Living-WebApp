import style from "./style.module.css";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../Login';
import Link from 'next/link';

//report - wireframe - stylesheet


const Header = () => {
    return <div>

<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light shadow p-2 mb-5 bg-white" style={{width: "100%"}}>
        <a class="navbar-brand" href="#" className={style["head-name-container"]}><p className={style["head-container"]}>ForU</p><b>For Your Healthy Life</b></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li id="home" class="nav-item active">
                <a class="nav-link" href="http://localhost:3000/"><i class="fa fa-home" style = {{margin: "4px"}}></i>Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item" className={style["aleft"]}>
                <a class="nav-link" href="#" >About Us</a>
            </li>
            <li class="nav-item" className={style["aleft"]}>
                <a class="nav-link" href="#">Find A Doctor</a>
            </li>
            <li class="nav-item" className={style["aleft"]}>
                <a class="nav-link" href="#">Donate</a>
            </li>
            </ul>
            
            <form className="form-inline">
					  <input list="data" className="form-control mr-sm-2" type="search" placeholder="Search Here" />
					  <datalist id="data">
						  <option value="Schedule Appointment" />
						  <option value="Donation" />
						  <option value="Look for Dentist" />
						  <option value="Search Doctors" />
						  <option value="Previous Consultation" />
						  <option value="My Profile" />
                          <option value="Use My Wallet" />
                          <option value="Edit Profile" />
					  </datalist>
						<button type="reset" style = {{backgroundColor:"transparent", border:"0px solid black", cursor: "pointer"}}><i class="fa fa-close" style={{fontSize: "px", color: "hsl(0, 100%, 78%)"}}></i></button>
					  <Link href="/Placeyourorder">
						  <button className="btn my-2 my-sm-0 btn-outline-info" type="submit" style={{marginLeft: "10px", marginRight: "15px"}}>Search</button>
					  </Link>
					</form>
            
            <Link href="/Logins">
						  <button class="btn btn-outline-success my-2 my-sm-0 btn my-2 my-sm-0" type="submit" style={{marginLeft: "5px"}}>LOGIN</button>
					  </Link>
                      <Link href="/Registers">
						  <button class="btn btn-outline-success my-2 my-sm-0 btn my-2 my-sm-0" type="submit" style={{marginLeft: "10px"}}>SIGNUP</button>
					  </Link>
           
        </div>
        </nav>

    </div>
    
}
export default Header;