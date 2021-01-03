import React, { Component } from 'react';
import { Form } from "react-bootstrap"
import "../css/DailyDiaryForm.css"
import DialyDiaryText from '../Components/DailyDiaryText';

class DailyDiaryForm extends Component {
    state = { 
        dailyDiaryDetails: {
            morning: "",
            afternoon: "",
            night: "",
            choices: "",
            special: "",
            health: "",
            changeInSupport: "",
            actionIfYesToChangeInSupport : ""    
        },
        serviceUsername: "", 
        staffName : "James Moffat" ,
        morningdiv: false,
        text : []
    }

    updateForm = (event) => {
        event.preventDefault() 
        let dailyDiaryDetails = this.state.dailyDiaryDetails;
    let id = event.currentTarget.id;
        dailyDiaryDetails[id] = event.currentTarget.value;      
    this.setState({
      dailyDiaryDetails,
    });
        
    }

    uploadMorning = () => {
        this.setState({
            morningdiv: true
        })
    }

    edit = () => {
        this.setState({
            morningdiv:false
        })
    }

    componentDidMount = async () => {
        const response = await fetch(`http://localhost:3003/serviceusers/${this.props.match.params.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
        })
        const singleServiceUser = await response.json()
        if (singleServiceUser) {
            this.setState({
                serviceUsername : singleServiceUser.firstName +" "+ singleServiceUser.lastName
            })
        }
    }
      getUrl = async () => {
        //   const url = window.location.href
        //   const name = this.state.serviceUsername
        //   const currentUrl = { url, name }
            const mornTxt = []
        mornTxt.push(this.state.dailyDiaryDetails)
      const dailyTextToBackend = {
            morning: mornTxt[0].morning,
            afternoon: mornTxt[0].afternoon,
            night: mornTxt[0].night,
            choices: mornTxt[0].choices,
            special: mornTxt[0].special,
            health: mornTxt[0].health,
            changeInSupport: mornTxt[0].changeInSupport,
          actionIfYesToChangeInSupport: mornTxt[0].actionIfYesToChangeInSupport,
          serviceUsername: this.state.serviceUsername,
            staffName : this.state.staffName
        }
     const res = await fetch("http://localhost:3003/files/pdf/", {
      method: "POST",
      body: JSON.stringify(dailyTextToBackend),
        headers: {
          "Content-Type": "application/json",
        }
    })
     
   }
    getpdf = async () => {
        this.getUrl()
    // const res = await fetch("http://localhost:3003/files/pdf/", {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/pdf",
    //     }
    // })
  }
    
    
    render() { 
        return ( 
            <>
                 <div  className="container d-flex justify-content-between">
                    <p className="service-username">{this.state.serviceUsername}</p>
                <p  className="service-username"> {new Date().toDateString()}</p>   
                </div>
                {this.state.morningdiv=== true ? <div>
                            <div className="daily-diary-text">
                        <DialyDiaryText morningText={this.state.morning}/>
                            </div>
                            <button onClick={()=> this.edit()}>Edit</button>
                    </div> : <div>show</div> }
                <Form className="container">
                   
                        <Form.Group controlId="morning" className="daily-diary-form">
    <Form.Label>About my morning</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={8}
                            value={this.state.morning}
                onChange={(e) => this.updateForm(e)}
                        />          
                </Form.Group> 
                     
                
                    <Form.Group controlId="afternoon"  className="daily-diary-form">
    <Form.Label>About my afternoon</Form.Label>
    <Form.Control onChange={(e) => this.updateForm(e)} as="textarea" rows={8} value={this.state.afternoon} />
                </Form.Group>
                    <Form.Group controlId="night"  className="daily-diary-form">
    <Form.Label>About my night</Form.Label>
    <Form.Control onChange={(e) => this.updateForm(e)} as="textarea" rows={8} value={this.state.night}/>
                </Form.Group>
                        <Form.Group controlId="choices"  className="daily-diary-form">
    <Form.Label>What choices have i made today ? </Form.Label>
    <Form.Control onChange={(e) => this.updateForm(e)} as="textarea" rows={8}  value={this.state.choices}/>
                </Form.Group>
                        <Form.Group controlId="special"  className="daily-diary-form">
    <Form.Label>Did I do something special ? </Form.Label>
    <Form.Control onChange={(e) => this.updateForm(e)} as="textarea" rows={8} value={this.state.special}/>
                </Form.Group>
                        <Form.Group controlId="health"  className="daily-diary-form">
    <Form.Label>About my health</Form.Label>
    <Form.Control onChange={(e) => this.updateForm(e)} as="textarea" rows={8} value={this.state.health} />
                </Form.Group>
                        <Form.Group controlId="changeInSupport"  className="daily-diary-form">
    <Form.Label>Does anything need to change in how you support me or my plan ? </Form.Label>
    <Form.Control onChange={(e) => this.updateForm(e)} as="textarea" rows={8} value={this.state.changeInSupport}/>
                </Form.Group>
                        <Form.Group controlId="actionIfYesToChangeInSupport"  className="daily-diary-form">
    <Form.Label>If yes to above question , what action has been taken ? </Form.Label>
    <Form.Control onChange={(e) => this.updateForm(e)} as="textarea" rows={8} value={this.state.actionIfYesToChangeInSupport}/>
  </Form.Group>
                </Form>
                <button onClick={()=> this.getpdf()}>Submit Daily Diary</button>
                </>
         );
    }
}
 
export default DailyDiaryForm;