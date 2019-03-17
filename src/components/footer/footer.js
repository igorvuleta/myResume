import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
        <footer>
          <div className="row">
            <div className="twelve columns">
              {resumeData.socialLinks &&
                resumeData.socialLinks.map((item) => {
                  return (
                    <ul className="social-links" key={item.name}>
                      <li key={item.name}>
                        <a href={item.url}>
                          <i className={item.className} />
                        </a>
                      </li>
                    </ul>
                  );
                })}

              <ul className="copyright">
                <li>&copy; Copyright 2018 by {resumeData.name}</li>
                <li>
                  Design by{" "}
                  <a title="Styleshout" href="http://www.styleshout.com/">
                    {resumeData.name}
                  </a>
                </li>
              </ul>
            </div>

            <div id="go-top">
              <a className="smoothscroll" title="Back to Top" href="#home">
                <i className="icon-up-open" />
              </a>
            </div>
          </div>
        </footer>
    );
  }
}
