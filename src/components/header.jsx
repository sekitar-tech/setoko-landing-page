import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro container">
          <div className="row">
            <div className="col-md-4 col-md-offset-2">
              <div className="text">
                <h1>
                  {this.props.data ? this.props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>
                  {this.props.data ? this.props.data.paragraph : "Loading"}
                </p>
                <div style={{'display': 'flex', 'justify-content': 'center'}}>
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll">
                    Download Aplikasi
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4" >
              <div style={{'display': 'flex', 'justify-content': 'center'}}>
                <img src={this.props.data ? this.props.data.img :  "/"}
                  alt="header-img" 
                  style={{'width': 'auto', 'height': '500px'}}></img>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
