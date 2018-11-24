import React, { Component } from "react";
export default class Portfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            {/* portfolio-wrapper */}
            <div
              id="portfolio-wrapper"
              className="row"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  return (
                    <div className="three columns header-col">
                    <div className="stupid">
                      <a href={item.url} target="_blank">Project</a>

                      <h5>{item.name}</h5>
                      <p>{item.description}</p>
                    </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
