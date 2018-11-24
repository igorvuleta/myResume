import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
        <footer>
          <div class="row">
            <div class="twelve columns">
              {resumeData.socialLinks &&
                resumeData.socialLinks.map((item) => {
                  return (
                    <ul class="social-links">
                      <li key={item.name}>
                        <a href={item.url}>
                          <i class={item.className} />
                        </a>
                      </li>
                    </ul>
                  );
                })}

              <ul class="copyright">
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
              <a class="smoothscroll" title="Back to Top" href="#home">
                <i class="icon-up-open" />
              </a>
            </div>
          </div>
        </footer>
    );
  }
}
