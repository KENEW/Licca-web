import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;

    const sp = "images/sneakpick/" + this.props.data.image;

    const bio = this.props.data.bio;
    const price = this.props.data.price;
    const maxPer = this.props.data.maxPer;
    const mintDay = this.props.data.mintDay;
    
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
        <section id="about1">

        </section>
    );
  }
}

export default About;
