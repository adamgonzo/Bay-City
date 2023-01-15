import React, { Component } from 'react';
import "./About.scss"
export default class About extends Component {
  render() {
    let Data = this.props.Data;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/glass1.png" alt="" />

            </div>
            <br></br>
            <div className="nine columns main-col">
               <div className='about-me'>
                  <h2>About The Company</h2>
                  <p>
                     {
                        Data.aboutme
                     }
                  </p>
               </div>
            </div>
         </div>
      </section>
    );
  }
}