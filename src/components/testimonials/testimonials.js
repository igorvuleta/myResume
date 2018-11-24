import React, { Component } from "react";
export default class Testimonials extends Component {
  render() {
    return (
        <section id="testimonials">
          <div className="text-container">
            <div className="row">
              <div className="two columns header-col">
                <h1>
                  <span>Client Testimonials</span>
                </h1>
              </div>
              <div className="ten columns flex-container">
                <div className="flexslider">
                  <ul className="slides">
                    <li>
                      <blockquote>
                        <p>
                          Objects are like people. They’re living, breathing things that have knowledge inside them about how to do things and have memory inside them so they can remember things. And rather than interacting with them at a very low level, you interact with them at a very high level of abstraction...
                        </p>
                        <cite>Steve Jobs</cite>
                      </blockquote>
                    </li>{" "}
                    {/* slide ends */}
                    <li>
                      <blockquote>
                        <p>
                        Every time you write a comment, you should grimace and feel the failure of your ability of expression.
                        </p>
                        <cite>Robert C. Martin</cite>
                      </blockquote>
                    </li>{" "}
                    {/* slide ends */}
                  </ul>
                </div>{" "}
                {/* div.flexslider ends */}
              </div>{" "}
              {/* div.flex-container ends */}
            </div>{" "}
            {/* row ends */}
          </div>{" "}
          {/* text-container ends */}
        </section>
    );
  }
}
