import Image from 'next/image';
import Link from 'next/link';
import style from "./style.module.css";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

class Myform extends React.Component{
	
	
	documentData;
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            his: '',
            docname: '',
            booknum: '',            
            username: '',
            mobnum: '',
            age: '',
            doctor: '',
            date: '',
            consulttype: '',            
            time: '',
            donate: '',
            donateamt: '',
            totalprice: '',
			Doc: '',
			unerrormessage: '',
			daterr: '',
			timeerr: '',
			radioerr: '',
			donateerr: '',
			amt: ''
        }
    }
	
    handleChange = (e)=> {
    
		this.setState({
			[e.target.name]:e.target.value});
		
        let nam = e.target.name;
        let val = e.target.value;
        let n, p;
        let err = '';
       
          
        //let format = '/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/';
    
        if (nam == "username") {
          if (val!="" && Number(val)) {
            err = <label style={{color: "red", marginLeft: "15px"}} className="errmsg">Your name should only consist of charachters</label>
          }else{
            err="";
          }
            this.setState({unerrormessage: err});
            this.setState({[nam]: val});
        }
        else if (nam == "date") {
			var GivenDate = val;
			var CurrentDate = new Date();
			GivenDate = new Date(GivenDate);

		
          if (GivenDate < CurrentDate){
            err = <label style={{color: "red", marginLeft: "15px"}} className="errmsg">Choose a Correct Date </label>
          } else {
            err="";
          }
          this.setState({daterr: err});
            this.setState({[nam]: val});
        }
		else if (nam == "time") {
          if (val == "Choose"){
            err = <label style={{color: "red", marginLeft: "15px"}} className="errmsg">Choose a Correct Time </label>
          } else {
            err="";
          }
          this.setState({timeerr: err});
            this.setState({[nam]: val});
        }
		else if(nam == "donateamt"){
			if(val == ""){
				this.setState({donateamt: 0});
			}else{
				this.setState({donateamt: val})
			}
		}
		else if(nam=="donate")
		{
			if(val == "Yes"){
				if(this.state.donateamt == ""){
					err = <label style={{color: "red", marginLeft: "15px"}} className="errmsg">Enter Amount</label>
				}else{
					err="";
					this.state.donateamt = 0;
				}
			}else if(val == "No"){
				err="";
			}
			this.setState({donateerr: err});
            this.setState({[nam]: val});
		}else if(nam=="docname"){
			this.setState({[nam]: val});
		}else if(nam=="donateamt"){
			if(val == ""){
				val = 0;
			}else{
				val = Number(val);
			}
			this.setState({[nam]: val});
		}

    }
   
	handleFormSubmit(e) {
		e.preventDefault()
	   localStorage.setItem('document',JSON.stringify(this.state));
			
		let price = 0;
		let tprice;
			//console.log(this.state.copies);

		
		if (this.state.docname == "Dilip Wilson"){
			
			tprice = 200;
			//this.state.docname = "Dilip Walson";
			this.setState({
					amt: tprice,
			});
			console.log("200");
			console.log(tprice);
		}
		else if (this.state.docname == "Vanshika Joshi"){
			
			tprice = 300;
			this.setState({
				amt: tprice
			});
			console.log("300");
			console.log(tprice);
		}
        else if (this.state.docname == "Kapil Agarwal"){
			
			tprice = 400;
			this.setState({
				amt: tprice
			});
			console.log("400");
			console.log(tprice);
		}
        else if (this.state.docname == "Madhuri Sharma"){
			
			tprice = 500;
			this.setState({
				amt: tprice
			});
			console.log("500");
			console.log(tprice);
		}
		
		let nobook = Number(this.state.booknum);
		console.log("nobook"+nobook);
		let nodonate = 0;
        if (this.state.donateamt == ""){
            nodonate=0;
		}else{
            nodonate = Number(this.state.donateamt);
        }
		console.log("nodonate"+nodonate);
		console.log(tprice);
		
		var finalAmount = 0;
	    finalAmount = (tprice*nobook)+nodonate;
		console.log("final"+finalAmount);
		this.setState({
			amt: finalAmount
		})
		console.log("New");
		console.log(finalAmount);
		
	}

	handleReset = ()=> {
    this.setState({
            his: '',
            docname: '',
            booknum: '',            
            username: '',
            mobnum: '',
            age: '',
            doctor: '',
            date: '',
            consulttype: '',            
            time: '',
            donate: '',
            donateamt: '',
            totalprice: '',
			Doc: ''
		});
	}
	


	componentDidMount() {
		this.documentData = JSON.parse(localStorage.getItem('document'));

		if (localStorage.getItem('document')) {
			this.setState({
                his: this.documentData.his,
                docname: this.documentData.docname,
                booknum: this.documentData.booknum,            
                username: this.documentData.username,
                mobnum: this.documentData.mobnum,
                age: this.documentData.age,
                doctor: this.documentData.doctor,
                date: this.documentData.date,
                consulttype: this.documentData.consulttype,            
                time: this.documentData.time,
                donate: this.documentData.donate,
                donateamt: this.documentData.donateamt,
                totalprice: this.documentData.totalprice,
				amt: this.documentData.amt,
				Doc: this.documentData.Doc
		})
	} else {
		this.setState({
			his: '',
            docname: '',
            booknum: '',            
            username: '',
            mobnum: '',
            age: '',
            doctor: '',
            date: '',
            consulttype: '',            
            time: '',
            donate: '',
            donateamt: '',
            totalprice: '',
			Doc: '',
			amt: ''
		})
	}
	}

	
	render(){
		
		return(
		
				<div className="container-fluid text-justify" style={{font: "15px Calibri"}}>

					<div className="row">
						<div className="col-sm-1">	</div>

						<div className="col-sm-10">

							<p style={{textAlign: "center", color: "#008080", font: "28px Calibri", paddingTop: "10px", paddingBottom: "4px"}}>Book Your Appointment</p>


							<form onSubmit={this.handleFormSubmit}>



                            <div className="row pt-1" style={{borderBottom: "1px solid lightgrey", paddingBottom: "20px"}}>
									
                                    <div className="col-sm-4">
										
									</div>
									
								
									<div className="col-sm-4">
									<Form.Label column sm={12}>
											Username
										</Form.Label>
										<Col sm={12}>
											<Form.Control size="sm" name="username" type="input" placeholder="Enter your Username" onChange={this.handleChange} required />
										</Col>
										{this.state.unerrormessage}
									</div>

                                    <div className="col-sm-4">
                                    
									</div>
								</div>
								

																	
								<div className="row pt-1" style={{borderBottom: "1px solid lightgrey", paddingBottom: "20px"}}>
									
                                    <div className="col-sm-4">
										<Form.Label column sm={12}>
											Select Spcialist
										</Form.Label>
										<Col sm={12}>
											<Form.Control size="sm" name="doctor" placeholder="Choose" value={this.state.doctor} onChange={this.handleChange} required as="select">
												
												<option>General Physician</option>
												<option>Gynacologist</option>
                                                <option>Dentist</option>
												<option>Dermetologist</option>
												<option>Homeopathy</option>
                                                <option>Ayurveda</option>
                                                <option>Others</option>
											</Form.Control>
										</Col>
									</div>
									
								
									<div className="col-sm-4">
										<Form.Label column sm={12}>
											Select Date
										</Form.Label>
										<Col sm={12}>
											<Form.Control size="sm" name="date" type="Date" min="1" placeholder="1" value={this.state.date} onChange={this.handleChange} required />
										</Col>
										{this.state.daterr}
									</div>

                                    <div className="col-sm-4">
                                    <Form.Label column sm={12}>
											Select Time
										</Form.Label>
										<Col sm={12}>
											<Form.Control size="sm" name="time" value={this.state.time} onChange={this.handleChange} required as="select">
												<option>Choose</option>
												<option>11 AM to 12 PM</option>
												<option>12 PM to 1 PM</option>
                                                <option>3 PM to 4 PM</option>
												<option>4 PM to 5 PM</option>
											</Form.Control>
										</Col>
										{this.state.timeerr}
									</div>
								</div>

                                <Form.Label inline="true" column sm={12}>
										  Select a Doctor
										</Form.Label>
                                    

                                <div class="container">
  <div class="row">
  <div class="row">
                    <div class="col-sm-3">
                    <Form.Check inline="true" type="radio" name="docname" value="Dilip Wilson" onChange={this.handleChange} />
                    <div class="card col-lg-9" style={{margin: "0 auto", padding:"0px"}}>
                        
                            <img class="card-img-top" src=
                             "https://t4.ftcdn.net/jpg/03/11/50/27/360_F_311502737_TZ2RJj273mcoaZyKBSHqbdM7QMcb6HfP.jpg"></img>
        
                            <div class="card-body" style={{backgroundColor: "#E6FFF8"}}>
                                
                                <h3 class="card-title text-left" style={{fontFamily: "sans-serif",fontSize: "16px", fontWeight: "bold"}}>Dr. Dilip Wilson</h3>
                                <p class="card-text" style={{fontSize: "12px"}}>| 10 yrs exp.<br/>| Consultation Fees: 200/- <br/>| Banglore</p>
                               
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                    <Form.Check inline="true" type="radio" name="docname" value="Vanshika Joshi" onChange={this.handleChange}/>
                    <div class="card col-lg-9" style={{margin: "0 auto", padding:"0px"}}>
                            <img class="card-img-top" src=
                             "https://media.istockphoto.com/photos/one-confident-attractive-indian-businesswoman-stock-image-picture-id1029826628?k=6&m=1029826628&s=612x612&w=0&h=MfCbHiXxFRYmYVzinKiZnw6JQLgez5oa0qlYni-VKo4="></img>
        
                            <div class="card-body" style={{backgroundColor: "#E6FFF8"}}>
                            <h3 class="card-title text-left" style={{fontFamily: "sans-serif",fontSize: "16px", fontWeight: "bold"}}>Dr. Vanshika Joshi</h3>
                                <p class="card-text" style={{fontSize: "12px"}}>| 11 yrs exp.<br/>| Consultation Fees: 300/- <br/>| Chennai</p>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                    <Form.Check inline="true" type="radio" name="docname" value="Kapil Agarwal" onChange={this.handleChange}/>
                    <div class="card col-lg-9" style={{margin: "0 auto", padding:"0px"}}>
                            <img class="card-img-top" src=
                             "https://thumbs.dreamstime.com/b/indian-male-doctor-clipboard-stethoscope-medicine-profession-healthcare-concept-smiling-white-coat-over-grey-138207484.jpg"></img>
        
                            <div class="card-body" style={{backgroundColor: "#E6FFF8"}}>
                            <h3 class="card-title text-left" style={{fontFamily: "sans-serif",fontSize: "16px", fontWeight: "bold"}}>Dr. Kalpit Agarwal</h3>
                                <p class="card-text" style={{fontSize: "12px"}}>| 12 yrs exp.<br/>| Consultation Fees: 400/- <br/>| Banglore</p>
                               
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                    <Form.Check inline="true" type="radio" name="docname" value="Madhuri Sharma" onChange={this.handleChange}/>
                    <div class="card col-lg-9" style={{margin: "0 auto", padding:"0px"}}>
                            <img class="card-img-top" src=
                             "https://t4.ftcdn.net/jpg/03/20/74/45/360_F_320744517_TaGkT7aRlqqWdfGUuzRKDABtFEoN5CiO.jpg"></img>
        
                            <div class="card-body" style={{backgroundColor: "#E6FFF8"}}>
                            <h3 class="card-title text-left" style={{fontFamily: "sans-serif",fontSize: "16px", fontWeight: "bold"}}>Dr. Madhuri Sharma</h3>
                                <p class="card-text" style={{fontSize: "12px"}}>| 13 yrs exp.<br/>| Consultation Fees: 500/- <br/>| Pune</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
				{this.state.radioerr}
  </div>
</div>




			
			
							
								<div className="row pt-3" style={{borderBottom: "2px solid lightgrey", paddingBottom: "20px"}}>
									<div className="col-sm-4">
										<Form.Label column sm={12}>
											Number of Bookings
										</Form.Label>
										<Col sm={12}>
											<Form.Control size="sm" name="booknum" value={this.state.booknum} onChange={this.handleChange} required as="select">
												<option>Choose no of persons</option>
												<option>1</option>
												<option>2</option>
                                                <option>3</option>
												<option>4</option>
												<option>More than 4</option>
											</Form.Control>
										</Col>
									</div>
									<div className="col-sm-4">
										<Form.Label column sm={12}>
											Select Consultation Way
										</Form.Label>
										<Col sm={12}>
											<Form.Control size="sm" name="consulttype" value={this.state.consulttype} onChange={this.handleChange} required as="select">
												<option>Choose....</option>
												<option>Video Call</option>
												<option>Audio Call</option>
												<option>In-Clinic</option>
											</Form.Control>
										</Col>
									</div>
                                    <div className="col-sm-4">
										<Form.Label column sm={12}>
										 Health Issues
										</Form.Label>
										<Col sm={12}>
											<Form.Control size="sm" name="his" value={this.state.his} onChange={this.handleChange} required type="text" placeholder="Write Problems here...." />
										</Col>
									</div>
									
								</div>
			
			
								<div className="row pt-3">
									<div className="col-sm-4">
										<Form.Label column sm={12}>
                                            Do you want to Donate to help a Needy
										</Form.Label>
										<Col sm={12}>
											
                                            <Form.Check value="Yes" label="Yes" inline="true" type="radio" name="donate" onChange={this.handleChange}/>
                                            <Form.Check value="No" label="No" inline="true" type="radio" name="donate" onChange={this.handleChange}/>
										</Col>
									</div>
									
									<div className="col-sm-4">
									<Form.Label column sm={12}>
											Enter Donation Amount
										</Form.Label>
										<Col sm={12}>
											<Form.Control size="sm" name="donateamt" type="input" placeholder="Enter Donation Amount" onChange={this.handleChange}/>
										</Col>
										{this.state.donateerr}
									</div>

                                    <div className="col-sm-4" style={{fontWeight: "bold", fontSize: "18px"}}>
										
										<Form.Label column sm={12}>
										  Calculated Price 
										</Form.Label>
										<Col sm={12}>
											<Form.Control size="sm" name="amt" readOnly value={this.state.amt} type="text" style={{backgroundColor: "transparent", border: "1px", fontWeight: "bold", fontSize: "18px"}}  />
										</Col>
										
									</div>
								</div>
			
								


								
								<div className="row pt-1 text-center">
								<div className="col-sm-4 text-center" >
													
											</div>
											
											<div className="col-sm-4 text-center" style={{padding: "15px 15px 0px"}}>
											<div className="row tex-center">
											<div className="col-sm-3 text-center" style={{padding: "15px 15px 0px", paddingLeft: "28%"}}>
													<Button size="sm" type="submit" variant="outline-success">Save</Button> <br/>
											</div>
											<div className="col-sm-3 text-center" style={{padding: "15px 15px 0px",paddingLeft: "28%"}}>
											
												<Button size="sm" type="reset" onClick={this.handleReset} variant="outline-danger">Reset</Button> <br/>
											</div>

											</div>
												<Link href="/Paysuccess">
													<div style = {{textAlign: "", cursor: "pointer", marginTop: "15px"}}>
														<p style = {{font: "15px Calibri", color: "blue", border: "0px solid black"}}>PROCEED</p>
													</div>
												</Link>	
											</div>
											<div className="col-sm-4 text-center" style={{padding: "15px 15px 0px"}}>
												
											</div>
									
								
								</div>
								
							</form>
							
			
						</div>

						<div className="col-sm-1">	</div>
					</div>
                    <div style={{height: "40px"}}></div>
				</div>
	
			
		);
	}	
}

export default Myform;
