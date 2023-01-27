import React, { Component } from "react";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const sneakpickImg = "images/sneakpick/sneackpick4-2.png";

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
          <div key={id++} className="columns portfolio-item">
            <div className="item-wrap">
              <img src={projectImage}/>
              <div className="team-name">
                  {
                    projects.title
                  }
              </div>
              <div className="team-content-wrap">
                <div className="team-content">
                  {
                    projects.des1
                  }
                </div>
                <div className="team-content">
                  {
                    projects.des2
                  }
                </div>
                <div className="team-content">
                  {
                    projects.des3
                  }
                </div>
              </div>

            </div>
          </div>
      );
    });

    return (
      <section id="about">
        <Fade left duration={1000} distance="40px">
          <div className="sneakpickLayout">
            <img
                className="sneakpickLayout"
                src={sneakpickImg}
            />
          </div>
          <div className="nftInfo">
            <p>
              LICCA supplies 1000 KIGURUMI NFTs.
            </p>
            <p>
              In addition to NEKO, USAGI, and KUMA included in SNACK-PICK,
            </p>
            <p>
              You can have a larger collection of animal pajamas.
            </p>
            <p>
              Please look forward to the cute LICCAN NFT mint soon ! :)
            </p>
          </div>
            <div className="nftInfo">
            <p>
              Also, our team is finding a new direction for NFT.
            </p>
            <p>
              Soon, we will announce the function to interact with LICCA NFT.
            </p>
          </div>

        </Fade>
      </section>
    );
  }
}

export default Portfolio;
