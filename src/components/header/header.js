import React, { Component } from "react";
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <header id="home">
        <nav id="nav-wrap">
          <a
            className="mobile-btn"
            rel="nofollow"
            href="#nav-wrap"
            title="Show navigation"
          >
            Show navigation
          </a>

          <a className="mobile-btn"  title="Hide navigation">
            Hide navigation
          </a>
          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#testimonials">
                Testimonials
              </a>
            </li>
          </ul>
        </nav>
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm {resumeData.name}</h1>
            <h3>
              I'm a Bischofswiesen based <span>{resumeData.role}</span>, and
              with my skills in <span>Javascript</span> , <span>C#</span> always
              looking for the right opportunity. Let's{" "}
              <a className="smoothscroll" href="#about">
                start scrolling{" "}
              </a>
              and learn more{" "}
              <a className="smoothscroll" href="#about">
                about me
              </a>
              .
            </h3>

            <hr />
            <ul className="social">
              {resumeData.socialLinks &&
                resumeData.socialLinks.map(item => {
                  return (
                    <li key={item.name}>
                      <a href={item.url} rel="noopener noreferrer" target="_blank">
                        <i className={item.className} />
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle" />
          </a>
        </p>
      </header>
    );
  }
}
