import React, { Component } from 'react';
import { Row, Col, Container, CardDeck, Card } from "react-bootstrap"
import DailyDiary from "../Components/DailyDiary"
import FoodDiary from "../Components/FoodDiary"
import BowelChart from "../Components/BowelChart"
import WaterTemperature from "../Components/WaterTemperature"
import {withRouter} from "react-router-dom"
import "../css/Home.css"
class Home extends Component {
    state = {
        serviceUsers: [] ,
        serviceUsersFirstName: "",
        serviceUsersLastName : ""
        
    }
    componentDidMount = async () => {
        const response = await fetch("http://localhost:3003/serviceusers", {
            method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
        })
        const serviceUsers = await response.json()
        if (response.ok) {         
            this.setState({
                serviceUsers
            })
            console.log(this.state.serviceUsers)
        }
        else {
            alert("Something Went Wrong, Can't Get Service Users")
        }
    }
    render() { 
        return ( 
         <>
                <div id="welcome-text" className=" container d-flex justify-content-between">
                  <p>Welcome User</p>
                    <p> {new Date().toDateString()}</p>   
                </div>
                <div className="container">
                    <h3>Daily Diary</h3>
                    <CardDeck className="diary-cards">
                        {this.state.serviceUsers.map((user) => {
                            return <> 
                                <DailyDiary firstName={user.firstName} lastName={user.lastName} id={user._id} />     
                            </>
                        })}
                    </CardDeck>
                    <h3>Bowel Chart</h3>
                    <CardDeck className="diary-cards">
                        {this.state.serviceUsers.map((user) => {
                            return <>
                                
                                 <BowelChart firstName={user.firstName} lastName={user.lastName}/>
                            
                            </>
                        })}
                    </CardDeck>
                    <h3>Food Diary</h3>
                     <CardDeck className="diary-cards">
                        {this.state.serviceUsers.map((user) => {
                            return <>
                                
                               
                                <FoodDiary firstName={user.firstName} lastName={user.lastName}/>
                               
                            </>
                        })}
                    </CardDeck>
                    <h3>Water Temperature</h3>
                     <CardDeck className="diary-cards">
                        {this.state.serviceUsers.map((user) => {
                            return <>
                                
                                <WaterTemperature firstName={user.firstName} lastName={user.lastName}/>
                              
                            </>
                        })}
                    </CardDeck>
                </div>
        </>
                
           
         );
    }
}
 
export default withRouter(Home);