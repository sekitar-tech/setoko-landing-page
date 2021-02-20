import React, { Component } from "react";

export class features extends Component {
  render() {
    return (
      <div id="features" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Langkah</h2>
          </div>
          {this.props.data
            ? this.props.data.map((d,i) => (
                <div className="row"
                  style={{'margin': '25px'}}>
                  <div className="col-md-5 col-md-offset-2">
                    <div className="text">
                      <h1>
                        Langkah {i + 1}
                      </h1>
                      <h3>
                        {d.title}
                      </h3>
                      <p>
                        {d.text}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3"
                    style={{'style': 'flex', 'justify-content': 'center'}}>
                    <img src={d.img} alt={`${d.title}`}
                      style={{'height': '400px'}}></img>
                  </div>
                </div>
                // <div  key={`${d.title}-${i}`} className="col-md-6 col-md-offset-2">
                //   {" "}
                //   <img src={d.img} alt={`${d.title}`} 
                //     width="300" height="300"></img>
                //   <h3>{d.title}</h3>
                //   <p>{d.text}</p>
                // </div>
              ))
            : "Loading..."}
            <div style={{'margin-top': '50px'}}>
              <a
                href="#features"
                className="btn btn-custom btn-lg page-scroll"
              >
                Buat tokomu sekarang!
              </a>
            </div>
        </div>
      </div>
    );
  }
}

export default features;
