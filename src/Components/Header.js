import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    const body = document.querySelector("body");
    const iconDiscord = "images/siteicon/" + "icon-discord.png";
    const iconEtherScan = "images/siteicon/" + "icon-etherscan.png";
    const iconOpenSea = "images/siteicon/" + "icon-opensea.png";
    const iconTwitter = "images/siteicon/" + "icon-twitter.png";
    const musicIcon = "images/musicIcon.png";
    const forestImg = document.querySelector(".wanderer-img");
    const MIN_DURATION = 5;
    function makeSnow()
    {
      const snow = document.createElement("img");
      let rainType = (Math.random() * 3).toFixed();
      switch (rainType)
      {
        case "0" :
          snow.src = "images/rain/" + "rain-dog.png";
          break;
        case "1" :
          snow.src = "images/rain/" + "rain-cat.png";
          break;
        case "2" :
          snow.src = "images/rain/" + "rain-bear.png";
          break;
      }

      snow.classList.add("snowFlake");

      const delay = 0;//Math.random() * 10;
      const initialOpacity = Math.random();
      const duration = Math.random() * 25 + MIN_DURATION;

      setTimeout(()=> {
        body.removeChild(snow);
      }, (duration + delay) * 1000);

      snow.style.left = `${Math.random() * window.screen.width}px`;
      snow.style.animationDelay = `{delay}s`;
      snow.style.opacity = initialOpacity;
      snow.style.animation = `fall ${duration}s linear`;

      document.body.appendChild(snow);
    }

    /*
    for(let i = 0; i < 5000; i++)
    {
      setTimeout(makeSnow, 500 * i);
    }
*/

    function PlayMusic() {
      var music = new Audio()
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                HOME
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#map">
                MAP
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                ABOUT
              </a>
            </li>
          </ul>
          <ul id="right-nav" className="right-nav">
            {/*
            <li>
              <a target="_blank">
                <img
                    width="30px"
                    height="100%"
                    src={iconDiscord}
                />
              </a>
            </li>
            <li>
              <a target="_blank">
                <img
                    src={iconEtherScan}
                    width="27px"
                    height="100%"
                />
              </a>
            </li>
            <li>
              <a target="_blank">
                <img
                    src={iconOpenSea}
                    width="27px"
                    height="100%"
                />
              </a>
            </li>
            */}
            <li>
              <a href="https://twitter.com/KigurumiLicca" target="_blank">
                <img
                    src={iconTwitter}
                    width="27px"
                    height="100%"
                />
              </a>
            </li>
          </ul>
        </nav>
        <div className="row banner">
          <div className="banner-text">
            <Fade bottom duration={1000}>
              <img
                  src={"images/" + "KigurumiLiccaLogo.png"}
              ></img>
            </Fade>

            <hr />
            {/* <Fade bottom duration={2000}>
              <ul className="social">
                <a href={project} className="button btn project-btn">
                  <i className="fa fa-book"></i>Project
                </a>
                <a href={github} className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
            </Fade> */}
            
          </div>
        </div>

        {/*
        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
        */}
      </header>
    );
  }
}

export default Header;
