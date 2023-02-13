import React from "react";
import Me from "../asset/me.jpeg";
import Gloqal from "../asset/gloqal.png";
import Merck from "../asset/merck.jpeg";
import Poket from "../asset/poket.png";
import Dillali from "../asset/dillali.png";
import Babybliss from "../asset/babybliss.jpeg";
import Airsmat from "../asset/airsmat.jpeg";

export default function Container() {
  return (
    <main className="main-page-wrapper">
      <div id="home" className="rn-slider-area">
        <div className="slide slider-style-1">
          <div className="container">
            <div className="row row--30 align-items-center">
              <div className="order-2 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30"  style={{zIndex:"99999999"}}>
                <div className="content">
                  <div className="inner" style={{ textAlign: "left",zIndex:"9999999" }}>
                    <span className="subtitle">Welcome to my world</span>
                    <h1 className="title">
                      Hi, I’m <span>Anele Tracy Amarachi</span>
                      <br />
                      <span className="header-caption" id="page-top">
                        <span className="cd-headline clip is-full-width">
                          <span>a {' '}</span>
                          <span className="cd-words-wrapper" style={{marginLeft:"15px"}}>
                            <b className="is-visible"> Frontend Developer.</b>
                            <b className="is-hidden"> Backend Developer.</b>
                            <b className="is-hidden"> Mobile App Developer.</b>
                          </span>
                        </span>
                      </span>
                    </h1>

                    <div>
                      <p className="description">
                      As a senior software engineer with over 5 years of experience, I have a proven track record in web application development. I have had the opportunity to work on various projects that have allowed me to gain a deep understanding of software development and acquire new skills and perspectives.
                      <br/>

I have developed numerous applications both independently and as part of a team. I am also proficient in creating enterprise solutions, including ERP, CRM, HRM, Inventory management systems, etc.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12">
                    <div className="skill-share-inner">
                        <span className="title">find with on</span>
                        <ul className="skill-share d-flex liststyle">
                          <li><a href="https://www.linkedin.com/in/tracy12/">
                            <img
                              src="assets/images/icons/icons-01.png"
                              alt="Icons Images"
                            /></a>
                          </li>
                          <li>
                            <a href="https://github.com/tracie96">
                            <img
                              src="assets/images/icons/github.png"
                              alt="Icons Images"
                            /></a>
                          </li>
                     
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12 mt_mobile--30">
                      <div className="skill-share-inner">
                     
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 order-lg-2 col-lg-5">
                <div className="thumbnail">
                  <div className="inner">
                    <img src={Me} alt="Personal Portfolio Images" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="rn-service-area rn-section-gap section-separator"
        id="features"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-left"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
                data-aos-once="true"
              >
                <span className="subtitle">Features</span>
                <h2 className="title">What I Do</h2>
              </div>
            </div>
          </div>
          <div className="row row--25 mt_md--10 mt_sm--10">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
              data-aos-once="true"
              className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30"
            >
              <div className="rn-service">
                <div className="inner">
                  <div className="icon">
                    <i data-feather="menu"></i>
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#">Front End Development</a>
                    </h4>
                    <p className="description">
                      I am a Frontend Developer with over 4 years of front-end experience
                      and a strong understanding of Responsive Web Design and
                      have demonstrated past work experience working in the
                      frontend development industry.
                    </p>
                    <p>Languages/Libraries : JavaScript, React, TypeScript,JEST, Redux, HTML/CSS/SCSS</p>

                    <a className="read-more-button" href="#">
                      <i className="feather-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <a className="over-link" href="#"></a>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="300"
              data-aos-once="true"
              className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30"
            >
              <div className="rn-service">
                <div className="inner">
                  <div className="icon">
                    <i data-feather="book-open"></i>
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#">Back End Development</a>
                    </h4>
                    <p className="description">
                      I am a dexterious backend Engineer with over 5years
                      experience creating websites for startups, i am highly
                      skiled in building secured API's,databases,user focused
                      experiences. I have in-depth training in system
                      architecture, software development, frameworks and
                      optimizing applications.
                    </p>
                    <p>Languages/Libraries : JavaScript, Python, Node Js, Fast API, Express, AWS</p>

                    <a className="read-more-button" href="#">
                      <i className="feather-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <a className="over-link" href="#"></a>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="500"
              data-aos-once="true"
              className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30"
            >
              <div className="rn-service">
                <div className="inner">
                  <div className="icon">
                    <i data-feather="tv"></i>
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#">
                      Mobile App Development
                      </a>
                    </h4>
                    <p className="description">
                    Over 3 years industry experience in the field of crossplatform app development ith react native, i have planned, designed, developed and implemented successful large-scale projects from conception to completion Proficient with Android and ios application development lifecycle from application creation to deployment in Google Play/App Store. </p>
                    <p>Languages/Libraries : JavaScript, TypeScript, React Native, Expo</p>
                    <a className="read-more-button" href="#">
                      <i className="feather-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <a className="over-link" href="#"></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="rn-portfolio-area rn-section-gap section-separator"
        id="portfolio"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle">
                </span>
                <h2 className="title">My Portfolio</h2>
              </div>
            </div>
          </div>

          <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
            >
              <div
                className="rn-portfolio"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                <div className="inner">
                  <div className="thumbnail">
                    <a href="https://airsmat.com/">
                      <img src={Airsmat} alt="Personal Portfolio Images" />
                    </a>
                  </div>
                  <div className="content">
                    <div className="category-info">
                      <div className="category-list">
                        <a href="https://airsmat.com/">Airsmat</a>
                      </div>
                    </div>
                    <h4 className="title">
                      <a href="https://airsmat.com/">
                        The Farm Manager app from AirSmat gives users an easy
                        way to keep track of all their daily activities on the
                        farm. Users can record everything from chemical and
                        fertilizer use to crop and field agent details.{" "}
                        <i className="feather-arrow-up-right"></i>
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
              className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
            >
              <div
                className="rn-portfolio"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                <div className="inner">
                  <div className="thumbnail">
                    <a href="https://babybliss.com.ng/">
                      <img src={Babybliss} alt="Personal Portfolio Images" />
                    </a>
                  </div>
                  <div className="content">
                    <div className="category-info">
                      <div className="category-list">
                        <a href="https://babybliss.com.ng/">Babybliss</a>
                      </div>
                    </div>
                    <h4 className="title">
                      <a href="https://babybliss.com.ng/">
                        BabyBliss is an online collection of baby products for
                        infants to toddlers from trusted local & international
                        brands. I also helped in building a community
                        application for connecting expectant moms to each other
                        <i className="feather-arrow-up-right"></i>
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="true"
              className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
            >
              <div
                className="rn-portfolio"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                <div className="inner">
                  <div className="thumbnail">
                    <a href="https://www.gloqal.co/">
                      <img src={Gloqal} alt="Gloqal" />
                    </a>
                  </div>
                  <div className="content">
                    <div className="category-info">
                      <div className="category-list">
                        <a href="https://www.gloqal.co/">Gloqal</a>
                      </div>
                    </div>
                    <h4 className="title">
                      <a href="javascript:void(0)" className="textsize">
                        Glo gives its users cross-platform analytics for Web3
                        establishments to create NFT's. I worked on both the
                        frontend and backend,and help to webbscrapping with
                        python and selenium.
                        <i className="feather-arrow-up-right"></i>
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
            >
              <div
                className="rn-portfolio"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                <div className="inner">
                  <div className="thumbnail">
                    <a href="javascript:void(0)">
                      <img src={Merck} alt="Merck" />
                    </a>
                  </div>
                  <div className="content">
                    <div className="category-info">
                      <div className="category-list">
                        <a href="javascript:void(0)">Merck</a>
                      </div>
                    </div>
                    <h4 className="title">
                      <a href="javascript:void(0)">
                        Merck is an American multinational pharmaceutical
                        company headquartered in Kenilworth, New Jersey. It is
                        named after the Merck family, which set up Merck Group
                        in Germany in 1668. Merck & Co. was established as an
                        American affiliate in 1891{" "}
                        <i className="feather-arrow-up-right"></i>
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
              className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
            >
              <div
                className="rn-portfolio"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                <div className="inner">
                  <div className="thumbnail">
                    <a href="javascript:void(0)">
                      <img src={Dillali} alt="Personal Portfolio Images" />
                    </a>
                  </div>
                  <div className="content">
                    <div className="category-info">
                      <div className="category-list">
                        <a href="javascript:void(0)">Dillali</a>
                      </div>
                    </div>
                    <h4 className="title">
                      <a href="javascript:void(0)">
                        Dillali is mobile first income and expense platform for
                        SMEs in Africa and other emerging markets. it is a
                        platform that manages financial records as a business
                        and as an individual.
                        <i className="feather-arrow-up-right"></i>
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="true"
              className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
            >
              <div
                className="rn-portfolio"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                <div className="inner">
                  <div className="thumbnail">
                    <a href="javascript:void(0)">
                      <img src={Poket} alt="Poket" />
                    </a>
                  </div>
                  <div className="content">
                    <div className="category-info">
                      <div className="category-list">
                        <a href="javascript:void(0)">Poket</a>
                      </div>
                    </div>
                    <h4 className="title">
                      <a href="javascript:void(0)">
                        Poket is a multi-currency wallet that enables people and
                        businesses to manage money balances in crypto,
                        stablecoins and fiat currencies.{" "}
                        <i className="feather-arrow-up-right"></i>
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="rn-resume-area rn-section-gap section-separator"
        id="resume"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="title">My Resume</h2>
              </div>
            </div>
          </div>
          <div className="row mt--45">
            <div className="col-lg-12">
              <ul
                className="rn-nav-list nav nav-tabs"
                id="myTabs"
                role="tablist"
              >
                 <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="experience-tab"
                    data-toggle="tab"
                    href="#experience"
                    role="tab"
                    aria-controls="experience"
                    aria-selected="false"
                  >
                    experience
                  </a>
                </li>
                 <li className="nav-item">
                  <a
                    className="nav-link"
                    id="professional-tab"
                    data-toggle="tab"
                    href="#professional"
                    role="tab"
                    aria-controls="professional"
                    aria-selected="false"
                  >
                    professional Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="education-tab"
                    data-toggle="tab"
                    href="#education"
                    role="tab"
                    aria-controls="education"
                    aria-selected="true"
                  >
                    education
                  </a>
                </li>
               
        
               
              </ul>
              <div className="rn-nav-content tab-content" id="myTabContents">
              <div
                  className="tab-pane show active fade single-tab-area"
                  id="experience"
                  role="tabpanel"
                  aria-labelledby="experience-tab"
                >
                  <div className="personal-experience-inner mt--40">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-12">
                        <div className="content">
                          <span className="subtitle">2017 - Current</span>
                          <h4 className="maintitle">Job Experience</h4>
                          <div className="experience-list">
                            <div className="resume-single-list">
                              <div className="inner">
                                <div className="heading">
                                  <div className="title">
                                    <h4>LEAD SOFTWARE ENGINEER</h4>
                                    <span>GradientFi</span>
                                  </div>
                                  <div className="date-of-time">
                                    <span>JUNE 2022 - Current</span>
                                  </div>
                                </div>
                                <p className="description">
                                  <ul>
                              <li>Built the backend solutionwhere users can create,list and sell NFT</li>
                             <li>Designed both the backend and frontend Interface of the platform with Node js and TypeScript(React) Respectively</li>
                             <li>Mentored and Coached Junior Engineers on the team</li>
                            <li>Created Customizable Currency swap features between multiple currencies</li>
                             <li>Discussed project progress with project managers and CEO, collected feedback on different stages and directly addressed concerns.</li>
                             <li>Developed the mobile platform with react native and scaled the app.</li>
                             </ul>
                                </p>
                              </div>
                            </div>

                            <div className="resume-single-list">
                              <div className="inner">
                                <div className="heading">
                                  <div className="title">
                                    <h4> SOFTWARE ENGINEER ( II )</h4>
                                    <span>
                                    Gloqal Inc.
                                    </span>
                                  </div>
                                  <div className="date-of-time">
                                    <span>JULY 2021 - MAY 2022</span>
                                  </div>
                                </div>
                                <p className="description">
                                  <ul>
                            <li>Created Database Models and API's to Interact with Frontend.</li>
                            <li>Converted Figma Designs to responsive web pages.</li>
                            <li>Automated end to end testing with Selenium, saving engineers over 6hours trying to find ays to extract data on third party api's without Oauth</li>
                             <li>Reviewed project specifications and designed technology solutions that met or exceeded performance expectations.</li>
                             <li>Promoted experience with Kubernetes, Docker and Amazon Web Services.</li>
                             </ul>
                                </p>
                              </div>
                            </div>

                            <div className="resume-single-list">
                              <div className="inner">
                                <div className="heading">
                                  <div className="title">
                                    <h4>SOFTWARE ENGINEER AND PROGRAM FACILITATOR</h4>
                                    <span>
                                    Decagon Institute of Technology
                                    </span>
                                  </div>
                                  <div className="date-of-time">
                                    <span>MAR 2020 - JULY 2021</span>
                                  </div>
                                </div>
                                <p className="description">
                                <ul>
                            <li>Created coaching strategy and technical Syllabus to train effectively aspiring software Engineers</li>
                            <li>Trained/Training students effectively in the field of Python,Node Js and React Js</li>
                            <li>Developed in-house web app using Node, React, and HTML/CSS that allowed employees to manage and recommend books</li>
                             <li>RCollaborated with engineers to brainstorm and implement ideas and feedback into app's development</li>
                             <li>Built and developed e-commerce platforms under babybliss and mumsvilage</li>
                             <li>Provided direction and guidance to process improvements and established policies.</li>
                             </ul>
                                </p>
                              </div>
                            </div>


                            <div className="resume-single-list">
                              <div className="inner">
                                <div className="heading">
                                  <div className="title">
                                    <h4>SOFTWARE ENGINEER</h4>
                                    <span>
                                    Peexoo Technologies, Lagos
                                    </span>
                                  </div>
                                  <div className="date-of-time">
                                    <span>FEB 2019 - MAR 2020</span>
                                  </div>
                                </div>
                                <p className="description">
                                <ul>
                            <li>Developed viral findmyface tool that matches your picture to find your celebrity lookalike</li>
                            <li>Partnered with a senior developer to implement RESTful APIs in Node Js, enabling analytics team to increase reporting speed by 24%</li>
                            <li>Created Filters with OPENCV</li>
                             <li>Created Database Models</li>
                             <li>Coordinated efficient large-scale software deployments</li>
                             <li>Consulted with engineering team members to determine system loads and develop improvement plans.</li>
                             </ul>
                                </p>
                              </div>
                            </div>


                            <div className="resume-single-list">
                              <div className="inner">
                                <div className="heading">
                                  <div className="title">
                                    <h4>SOFTWARE ENGINEER INTERN</h4>
                                    <span>
                                    Zinox Technologies
                                    </span>
                                  </div>
                                  <div className="date-of-time">
                                    <span>MAR 2020 - JULY 2021</span>
                                  </div>
                                </div>
                                <p className="description">
                                <ul>
                            <li>Prepared and submitted reports and other documentation to assist development team members</li>
                            <li>Prioritized assigned change requests and completed in order of priority.</li>
                            <li>Assisted senior engineers with interpretation of views from ui/ux to react components.</li>
                             <li>Participated in requirements gathering to solidify prerequisites and determine best technical solution to meet business needs.</li>
                             <li>Managed development milestones from initial steps through final delivery.</li>
                             </ul>
                                </p>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade "
                  id="education"
                  role="tabpanel"
                  aria-labelledby="education-tab"
                >
                  <div className="personal-experience-inner mt--40">
                    <div className="row">
                      <div className="col-lg-6 col-md-12 col-12">
                        <div className="content">
                          <h4 className="maintitle">Education</h4>
                          <div className="experience-list">
                            <div className="resume-single-list">
                              <div className="inner">
                                <div className="heading">
                                  <div className="title">
                                    <h4>Nnamdi Azikiwe University</h4>
                                    <span> 2013 - 2017</span>
                                  </div>
                                  <div className="date-of-time">
                                    <span>B.Sc Computer Science</span>
                                  </div>
                                </div>
                              
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                   
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade "
                  id="professional"
                  role="tabpanel"
                  aria-labelledby="professional-tab"
                >
                  <div className="personal-experience-inner mt--40">
                    <div className="row row--40">
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="progress-wrapper">
                          <div className="content">
                            <span className="subtitle"></span>
                            <h4 className="maintitle"></h4>
                            <div className="progress-charts">
                              <h6 className="heading heading-h6">JavaScript</h6>
                              <div className="progress">
                                <div
                                  className="progress-bar wow fadeInLeft"
                                  data-wow-duration="0.0s"
                                  data-wow-delay=".0s"
                                  role="progressbar"
                                  style={{ width: "100%" }}
                                  aria-valuenow="85"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="percent-label">100%</span>
                                </div>
                              </div>
                            </div>
                            <div className="progress-charts">
                              <h6 className="heading heading-h6">NodeJs</h6>
                              <div className="progress">
                                <div
                                  className="progress-bar wow fadeInLeft"
                                  data-wow-duration="0.1s"
                                  data-wow-delay=".1s"
                                  role="progressbar"
                                  style={{ width: "85%" }}
                                  aria-valuenow="85"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="percent-label">85%</span>
                                </div>
                              </div>
                            </div>

                            <div className="progress-charts">
                              <h6 className="heading heading-h6">React</h6>
                              <div className="progress">
                                <div
                                  className="progress-bar wow fadeInLeft"
                                  data-wow-duration="0.1s"
                                  data-wow-delay=".1s"
                                  role="progressbar"
                                  style={{ width: "90%" }}
                                  aria-valuenow="85"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="percent-label">90%</span>
                                </div>
                              </div>
                            </div>

                            <div className="progress-charts">
                              <h6 className="heading heading-h6">
                                TypeScript
                              </h6>
                              <div className="progress">
                                <div
                                  className="progress-bar wow fadeInLeft"
                                  data-wow-duration="0.1s"
                                  data-wow-delay=".1s"
                                  role="progressbar"
                                  style={{ width: "65%" }}
                                  aria-valuenow="85"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="percent-label">65%</span>
                                </div>
                              </div>
                            </div>

                            <div className="progress-charts">
                              <h6 className="heading heading-h6">Next Js</h6>
                              <div className="progress">
                                <div
                                  className="progress-bar wow fadeInLeft"
                                  data-wow-duration="0.1s"
                                  data-wow-delay=".1s"
                                  role="progressbar"
                                  style={{ width: "55%" }}
                                  aria-valuenow="85"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="percent-label">55%</span>
                                </div>
                              </div>
                            </div>

                            <div className="progress-charts">
                              <h6 className="heading heading-h6">HTML/CSS</h6>
                              <div className="progress">
                                <div
                                  className="progress-bar wow fadeInLeft"
                                  data-wow-duration="0.1s"
                                  data-wow-delay=".1s"
                                  role="progressbar"
                                  style={{ width: "95%" }}
                                  aria-valuenow="85"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="percent-label">95%</span>
                                </div>
                              </div>
                            </div>

                            <div className="progress-charts">
                              <h6 className="heading heading-h6">POSTGRES/MYSQl</h6>
                              <div className="progress">
                                <div
                                  className="progress-bar wow fadeInLeft"
                                  data-wow-duration="0.1s"
                                  data-wow-delay=".1s"
                                  role="progressbar"
                                  style={{ width: "65%" }}
                                  aria-valuenow="85"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="percent-label">65%</span>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12 mt_sm--60">
                        <div className="progress-wrapper">
                          <div className="content">
                            <span className="subtitle"></span>
                            <h4 className="maintitle"></h4>
                            <div className="progress-charts">
                              <h6 className="heading heading-h6">Python</h6>
                              <div className="progress">
                                <div
                                  className="progress-bar wow fadeInLeft"
                                  data-wow-duration="0.1s"
                                  data-wow-delay=".1s"
                                  role="progressbar"
                                  style={{ width: "75%" }}
                                  aria-valuenow="85"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="percent-label">75%</span>
                                </div>
                              </div>
                            </div>
                            <div className="progress-charts">
                              <h6 className="heading heading-h6">Flask API</h6>
                              <div className="progress">
                              <div
                                  className="progress-bar wow fadeInLeft"
                                  data-wow-duration="0.1s"
                                  data-wow-delay=".1s"
                                  role="progressbar"
                                  style={{ width: "75%" }}
                                  aria-valuenow="85"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="percent-label">75%</span>
                                </div>
                              </div>
                            </div>

                            <div className="progress-charts">
                              <h6 className="heading heading-h6">Fast API</h6>
                              <div className="progress">
                                <div
                                  className="progress-bar wow fadeInLeft"
                                  data-wow-duration="0.1s"
                                  data-wow-delay=".1s"
                                  role="progressbar"
                                  style={{ width: "70%" }}
                                  aria-valuenow="85"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="percent-label">70%</span>
                                </div>
                              </div>
                            </div>

                            <div className="progress-charts">
                              <h6 className="heading heading-h6">AWS</h6>
                              <div className="progress">
                                <div
                                  className="progress-bar wow fadeInLeft"
                                  data-wow-duration="0.8s"
                                  data-wow-delay=".6s"
                                  role="progressbar"
                                  style={{ width: "75%" }}
                                  aria-valuenow="85"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="percent-label">75%</span>
                                </div>
                              </div>
                            </div>

                            <div className="progress-charts">
                              <h6 className="heading heading-h6">Git</h6>
                              <div className="progress">
                                <div
                                  className="progress-bar wow fadeInLeft"
                                  data-wow-duration="0.9s"
                                  data-wow-delay=".7s"
                                  role="progressbar"
                                  style={{ width: "85%" }}
                                  aria-valuenow="85"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="percent-label">85%</span>
                                </div>
                              </div>
                            </div>

                            <div className="progress-charts">
                              <h6 className="heading heading-h6">MongoDB</h6>
                              <div className="progress">
                                <div
                                  className="progress-bar wow fadeInLeft"
                                  data-wow-duration="0.1s"
                                  data-wow-delay=".1s"
                                  role="progressbar"
                                  style={{ width: "70%" }}
                                  aria-valuenow="85"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="percent-label">70%</span>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

            
             
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <div
        className="rn-contact-area rn-section-gap section-separator"
        id="contacts"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle">Contact</span>
                <h2 className="title">Contact Me</h2>
              </div>
            </div>
          </div>
          <div className="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm">
         
            <div data-aos-delay="600" className="col-lg-12 contact-input">
              <div className="contact-form-wrapper">
                <div className="introduce">
                  <form
                    className="rnt-contact-form rwt-dynamic-form row"
                    id="contact-form"
                    method="POST"
                    action="mail.php"
                  >
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label for="contact-name">Your Name</label>
                        <input
                          className="form-control form-control-lg"
                          name="contact-name"
                          id="contact-name"
                          type="text"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <label for="contact-phone">Phone Number</label>
                        <input
                          className="form-control"
                          name="contact-phone"
                          id="contact-phone"
                          type="text"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <label for="contact-email">Email</label>
                        <input
                          className="form-control form-control-sm"
                          id="contact-email"
                          name="contact-email"
                          type="email"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <label for="subject">subject</label>
                        <input
                          className="form-control form-control-sm"
                          id="subject"
                          name="subject"
                          type="text"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <label for="contact-message">Your Message</label>
                        <textarea
                          name="contact-message"
                          id="contact-message"
                          cols="30"
                          rows="10"
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <button
                        name="submit"
                        type="submit"
                        id="submit"
                        disabled
                        className="rn-btn"
                      >
                        <span>SEND MESSAGE</span>
                        <i data-feather="arrow-right"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i data-feather="x"></i>
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="portfolio-popup-thumbnail">
                    <div className="image">
                      <img
                        className="w-100"
                        src="assets/images/portfolio/portfolio-04.jpg"
                        alt="slide"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="text-content">
                    <h3>
                      <span>Featured - Design</span> App Design Development.
                    </h3>
                    <p className="mb--30">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cupiditate distinctio assumenda explicabo veniam
                      temporibus eligendi.
                    </p>
                    <p>
                      Consectetur adipisicing elit. Cupiditate distinctio
                      assumenda. dolorum alias suscipit rerum maiores aliquam
                      earum odit, nihil culpa quas iusto hic minus!
                    </p>
                    <div className="button-group mt--20">
                      <a href="#" className="rn-btn thumbs-icon">
                        <span>LIKE THIS</span>
                        <i data-feather="thumbs-up"></i>
                      </a>
                      <a href="#" className="rn-btn">
                        <span>VIEW PROJECT</span>
                        <i data-feather="chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModalCenters"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-news"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i data-feather="x"></i>
                </span>
              </button>
            </div>

            <div className="modal-body">
              <img
                src="assets/images/blog/blog-big-01.jpg"
                alt="news modal"
                className="img-fluid modal-feat-img"
              />
              <div className="news-details">
                <span className="date">2 May, 2021</span>
                <h2 className="title">Digital Marketo to Their New Office.</h2>
                <p>
                  Nobis eleifend option congue nihil imperdiet doming id quod
                  mazim placerat facer possim assum. Typi non habent claritatem
                  insitam; est usus legentis in iis qui facit eorum claritatem.
                  Investigationes demonstraverunt lectores legere me lius quod
                  ii legunt saepius. Claritas est etiam processus dynamicus, qui
                  sequitur mutationem consuetudium lectorum.
                </p>
                <h4>Nobis eleifend option conguenes.</h4>
                <p>
                  Mauris tempor, orci id pellentesque convallis, massa mi congue
                  eros, sed posuere massa nunc quis dui. Integer ornare varius
                  mi, in vehicula orci scelerisque sed. Fusce a massa nisi.
                  Curabitur sit amet suscipit nisl. Sed eget nisl laoreet,
                  suscipit enim nec, viverra eros. Nunc imperdiet risus leo, in
                  rutrum erat dignissim id.
                </p>
                <p>
                  Ut rhoncus vestibulum facilisis. Duis et lorem vitae ligula
                  cursus venenatis. className aptent taciti sociosqu ad litora
                  torquent per conubia nostra, per inceptos himenaeos. Nunc
                  vitae nisi tortor. Morbi leo nulla, posuere vel lectus a,
                  egestas posuere lacus. Fusce eleifend hendrerit bibendum.
                  Morbi nec efficitur ex.
                </p>
                <h4>Mauris tempor, orci id pellentesque.</h4>
                <p>
                  Nulla non ligula vel nisi blandit egestas vel eget leo.
                  Praesent fringilla dapibus dignissim. Pellentesque quis quam
                  enim. Vestibulum ultrices, leo id suscipit efficitur, odio
                  lorem rhoncus dolor, a facilisis neque mi ut ex. Quisque
                  tempor urna a nisi pretium, a pretium massa tristique. Nullam
                  in aliquam diam. Maecenas at nibh gravida, ornare eros non,
                  commodo ligula. Sed efficitur sollicitudin auctor. Quisque nec
                  imperdiet purus, in ornare odio. Quisque odio felis,
                  vestibulum et.
                </p>
              </div>

              <div className="comment-inner">
                <h3 className="title mb--40 mt--50">Leave a Reply</h3>
                <form action="#">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-12">
                      <div className="rnform-group">
                        <input type="text" placeholder="Name" />
                      </div>
                      <div className="rnform-group">
                        <input type="email" placeholder="Email" />
                      </div>
                      <div className="rnform-group">
                        <input type="text" placeholder="Website" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                      <div className="rnform-group">
                        <textarea placeholder="Comment"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <a className="rn-btn" href="#">
                        <span>SUBMIT NOW</span>
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="backto-top">
        <div>
          <i data-feather="arrow-up"></i>
        </div>
      </div>
    </main>
  );
}
