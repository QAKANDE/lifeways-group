import React, { Component } from 'react';
import { Nav, Dropdown, DropdownButton, Button } from "react-bootstrap"
import "../css/NavLayout.css"
import {Link} from "react-router-dom"

class NavLayout extends Component {
  state = {
  }
  // getUrl = async () => {
  //   const url = window.location.href
  //   const name = "Terry"
  //   const currentUrl = {url , name}
  //    const res = await fetch("http://localhost:3003/files/pdf/", {
  //     method: "POST",
  //     body: JSON.stringify(currentUrl),
  //       headers: {
  //         "Content-Type": "application/json",
  //       }
  //   })
     
  //  }
  // getpdf = async () => {
  //   this.getUrl()
  //   const res = await fetch("http://localhost:3003/files/pdf/", {
  //     method: "GET",
  //       headers: {
  //         "Content-Type": "application/pdf",
  //       }
  //   })
  // }
  render() { 
        return (
            <Nav
  activeKey="/home"
                className="justify-content-center pt-5"
          >
            <Nav.Item>
    <Nav.Link eventKey="link-1" >Home</Nav.Link>
            </Nav.Item>
              <Nav.Item>
    <Nav.Link eventKey="link-1">Tasks</Nav.Link>
            </Nav.Item>
            <Nav.Item>
    <Nav.Link eventKey="link-1">Notification</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Finance</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Incidence Report Form</Nav.Link>
                </Nav.Item>
                 <Nav.Item>
    <Nav.Link eventKey="link-2">Rota</Nav.Link>
            </Nav.Item>
              <Nav.Item>
    <Nav.Link eventKey="link-2">Weekly Timesheet</Nav.Link>
            </Nav.Item>
            <DropdownButton className="dropdown-basic-button" title="Weekly Checks">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <DropdownButton className="dropdown-basic-button" title="Monthly Checks">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
             <Nav.Item>
    <Nav.Link eventKey="link-2">Logout</Nav.Link>
            </Nav.Item>
  
</Nav>
         );
    }
}
 
export default NavLayout;