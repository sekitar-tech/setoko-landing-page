import React, { Component } from "react";

export class Services extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>FAQ</h2>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} 
                  className="col-md-8 col-md-offset-2">
                {" "}
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
