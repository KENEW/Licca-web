import React, { Component, useState,useEffect } from "react";
import { Fade, Slide } from "react-reveal";
const fetch = require('node-fetch');

class Contact extends Component {


  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;
    function inputEnter(){
      const name = document.getElementById('name').value;
      document.getElementById("result").innerText = name;
      console.log(name);
    }

    return (
      <section id="contact">
        {
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="addressInput">
              <fieldset>
                <legend>White List Check</legend>
                <input type="text" name="name" id="name"
                       onChange={()=>inputEnter()} placeholder="0x123..."/>
              </fieldset>
              <div className="descriptionBox">
                <div id = 'result'>
                </div>
                <h1>
                  add
                </h1>
                <p>
                  Congration! this is White List
                </p>
              </div>

            </div>
          </div>
        </Fade>
        }
      </section>
    );
  }


}

export default Contact;
