import React from "react";
import "./Home.css";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { GiBasketballBall } from "react-icons/gi";
import { MdOutlineEmail, MdOutlineFileDownload } from "react-icons/md";
import { FaRegPenToSquare } from "react-icons/fa6";
import { TbHomeSignal } from "react-icons/tb";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";
function Home() {
  return (
    <>
      <div className="home_pageslar">
        <div className="container">
          <div className="homepageleft">
            <h1>
              Hello, <span>I’m</span>
            </h1>
            <h2>robert fox</h2>
            <p>Professional Product Designer</p>
            <button className="homebuttonslar">let’s talk</button>
          </div>
          <div className="mainimg">
            <img src="/imgs/manimg.svg" alt="" />
          </div>

          <div className="rotateslar">
            <div className="rotateicons">
              <IoLogoInstagram />
            </div>

            <div className="rotateicons">
              <FaFacebookF />
            </div>

            <div className="rotateicons">
              <FaLinkedinIn />
            </div>

            <div className="rotateicons">
              <GiBasketballBall />
            </div>
          </div>
        </div>
      </div>
      <main>
        <section>
          <div className="aboutme">
            <div className="container">
              <div className="leftaoutme">
                <div className="aboutstra">
                  <img src="/imgs/imageone.svg" alt="" />

                  <div className="numberwithtitle">
                    <h1>Saticfied Customers</h1>

                    <div className="numbersecons">25</div>
                  </div>
                </div>

                <div className="middleaboutme">
                  <div className="titlewithnumbers">
                    <span>8</span>

                    <h1>Year of experience</h1>
                  </div>

                  <img src="/imgs/imagetwo.svg" alt="" />
                </div>
              </div>

              <div className="rightaboutmesa">
                <div className="titlewithnumberas">
                  <span>01</span>

                  <p>about me</p>
                </div>

                <div className="titleinfo">
                  <h2>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </h2>

                  <h2>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="imglogolar">
          <div className="container">
            <div className="logomainimg">
              <img src="/imgs/behace.svg" alt="" />
            </div>

            <div className="logomainimg">
              <img src="/imgs/slckae.svg" alt="" />
            </div>

            <div className="logomainimg">
              <img src="/imgs/dribbble.svg" alt="" />
            </div>

            <div className="logomainimg">
              <img src="/imgs/trible.svg" alt="" />
            </div>

            <div className="logomainimg">
              <img src="/imgs/github.svg" alt="" />
            </div>
          </div>
        </section>
        <section className="letsworktogerther">
          <div className="container">
            <div className="letdgoinfolar">
              <h1>let’s work together on Your Next Project</h1>

              <button className="hireme">HIRE ME NOW</button>

              <button className="scdownland">
                <MdOutlineFileDownload /> Download CV
              </button>
            </div>
          </div>
        </section>
        <section className="homeservice">
          <div className="container">
            <div className="servicetopslar">
              <div className="serviceentrance">
                <span>02</span>
                <h1>my service</h1>
              </div>
            </div>
            <div className="uxdesignlar">
              <div className="uxdesin">
                <FaRegPenToSquare />
                <h3>UI/UX Design</h3>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Vuis enim velit ullamco
                </p>
              </div>
              <div className="uxdesin">
                <FaRegPenToSquare />
                <h3>UI/UX Design</h3>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Vuis enim velit ullamco
                </p>
              </div>
              <div className="uxdesin">
                <FaRegPenToSquare />
                <h3>UI/UX Design</h3>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Vuis enim velit ullamco
                </p>
              </div>
              <div className="uxdesin">
                <FaRegPenToSquare />

                <h3>UI/UX Design</h3>

                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Vuis enim velit ullamco
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="homeportfolio">
          <div className="container">
            <div className="homeportfoliotop">
              <div className="numberwithtiwasalln">
                <span>03</span>

                <h2>portfolio</h2>
              </div>

              <div className="buttonrowa">
                <button>ALL</button>

                <button>ui/ux design</button>

                <button>PRODUCT DESIGN</button>

                <button>BRANDING</button>

                <button>WEB DESIGN</button>
              </div>

              <div className="arrowbutton">
                <button>
                  <BsArrowLeft />
                </button>

                <button>
                  <BsArrowRight />
                </button>
              </div>
            </div>

            <div className="mobiledesighnlar">
              <div className="mobileone">
                <img src="/imgs/portfolioone.svg" alt="" />

                <div className="mobileinfo">
                  <h1>MOBILE DESIGN</h1>

                  <h2>UI/UX Design</h2>
                </div>
              </div>

              <div className="mobileone">
                <img src="/imgs/portfolioone.svg" alt="" />

                <div className="mobileinfo">
                  <h1>MOBILE DESIGN</h1>

                  <h2>UI/UX Design</h2>
                </div>
              </div>

              <div className="mobileone">
                <img src="/imgs/portfolioone.svg" alt="" />

                <div className="mobileinfo">
                  <h1>MOBILE DESIGN</h1>

                  <h2>UI/UX Design</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimozalo">
          <div className="container">
            <div className="boysimg">
              <img src="/imgs/boyimga.svg" alt="" />
            </div>
            <div className="testimozol">
              <div className="testijmozolleft">
                <div className="knkonklkn">
                  <h1>04</h1> <span>testimonial</span>
                </div>

                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>

                <h2>Esther Howard</h2>

                <h3>CEO of Adebe</h3>
              </div>

              <div className="testimozolright">
                <h2>
                  01 <span>/03</span>
                </h2>

                <div className="btnsworsa">
                  <button>
                    <BsArrowLeft />
                  </button>

                  <button>
                    <BsArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="homecontactsla">
          <div className="container">
            <div className="homecontactleft">
              <div className="contactentrance">
                <span>05</span>

                <h2>contact</h2>
              </div>

              <div className="homephone">
                <div className="homeicons">
                  <FaPhoneAlt />
                </div>

                <div className="homeiconright">
                  <h1>Phone</h1>

                  <h2>(219) 555-0114</h2>
                </div>
              </div>

              <div className="homephone">
                <div className="homeicons">
                  <MdOutlineEmail />
                </div>

                <div className="homeiconright">
                  <h1>Email</h1>

                  <h2>robertfox@example.com</h2>
                </div>
              </div>

              <div className="homephone">
                <div className="homeicons">
                  <IoLocation />
                </div>

                <div className="homeiconright">
                  <h1>Address</h1>

                  <h2>4517 Washington Ave. Manchester, Kentucky 39495</h2>
                </div>
              </div>
            </div>

            <div className="homecontactright">
              <h1>
                I’m always open to discussing <span>product design work</span>{" "}
                or partnership
              </h1>

              <div className="email_number">
                <div className="name">
                  <h2>Your name*</h2>

                  <input type="text" placeholder="Your name*" />
                </div>

                <div className="name">
                  <h2>Email Address*</h2>

                  <input type="text" placeholder="Enter your email address" />
                </div>
              </div>

              <div className="messagelar">
                <h2>Message</h2>

                <input type="text" placeholder="Write your message here" />
              </div>

              <button className="sendmessage">send message</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
