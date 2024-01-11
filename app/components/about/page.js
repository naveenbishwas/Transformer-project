"use client";

import React, { useEffect } from "react";
import "./about.css";
import { useInView } from "react-intersection-observer";

const page = () => {
  const { ref: processAnimationOne, inView: isProcessOneVis } = useInView();
  const { ref: processAnimationTwo, inView: isProcessTwoVis } = useInView();
  const { ref: processAnimationThree, inView: isProcessThreeVis } = useInView();
  const { ref: processAnimationFour, inView: isProcessFourVis } = useInView();
  const { ref: processAnimationFive, inView: isProcessFiveVis } = useInView();
  const { ref: processAnimationSix, inView: isProcessSixVis } = useInView();
  const { ref: processAnimationSeven, inView: isProcessSevenVis } = useInView();
  const { ref: processAnimationEight, inView: isProcessEightVis } = useInView();
  const { ref: processAnimationNine, inView: isProcessNineVis } = useInView();
  const { ref: processAnimationTen, inView: isProcessTenVis } = useInView();
  const { ref: processAnimationEleven, inView: isProcessElevenVis } =
    useInView();
  const { ref: processAnimationTwelve, inView: isProcessTwelveVis } =
    useInView();
  const { ref: processAnimationThirteen, inView: isProcessThirteenVis } =
    useInView();
  const { ref: processAnimationFourteen, inView: isProcessFourteenVis } =
    useInView();
  const { ref: processAnimationFifteen, inView: isProcessFifteenVis } =
    useInView();
  const { ref: processAnimationSixteen, inView: isProcessSixteenVis } =
    useInView();
  const { ref: processAnimationSeventeen, inView: isProcessSeventeenVis } =
    useInView();
  const { ref: processAnimationEighteen, inView: isProcessEighteenVis } =
    useInView();

  return (
    <div className="main-container">
      <header>
        <div class="making-ellipse">
          <div class="ellipse1"></div>
          <div class="ellipse2"></div>
          <div class="ellipse3"></div>
        </div>
        <nav>
          <h1>
            <a href="/components/homepage">Tashe</a>
          </h1>
        </nav>

        <section class="header-heading">
          <div class="head-width">
            <div class="dit-guy">
              <h1 id="with-break">About us</h1>
              <p>
                We are one of the first companies in India to manufacture
                Corrugated Tanks and Fin Walls and have been serving in India
                and across the globe to various transformer OEMs.
              </p>
            </div>

            <div className="header-dot-df">
              <div className="header-dot"></div>
              <div className="header-sun">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 57 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.5 57L29.3205 38.9278C29.409 36.9781 31.9518 36.2968 33.0033 37.941L42.75 53.1817L34.4245 37.1205C33.5263 35.3878 35.3878 33.5263 37.1205 34.4245L53.1817 42.75L37.941 33.0034C36.2968 31.9518 36.9781 29.409 38.9278 29.3205L57 28.5L38.9278 27.6795C36.9781 27.591 36.2968 25.0482 37.941 23.9967L53.1817 14.25L37.1205 22.5755C35.3878 23.4737 33.5263 21.6122 34.4245 19.8795L42.75 3.81828L33.0034 19.059C31.9518 20.7032 29.409 20.0219 29.3205 18.0722L28.5 0L27.6795 18.0722C27.591 20.0219 25.0482 20.7032 23.9967 19.059L14.25 3.81828L22.5755 19.8795C23.4737 21.6122 21.6122 23.4737 19.8795 22.5755L3.81828 14.25L19.059 23.9966C20.7032 25.0482 20.0219 27.591 18.0722 27.6795L0 28.5L18.0722 29.3205C20.0219 29.409 20.7032 31.9518 19.059 33.0033L3.81828 42.75L19.8795 34.4245C21.6122 33.5263 23.4737 35.3878 22.5755 37.1205L14.25 53.1817L23.9966 37.941C25.0482 36.2968 27.591 36.9781 27.6795 38.9278L28.5 57Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="navbar">
            <div class="center">
              <ul class="fixed-nav">
                <li class="relative">
                  <ul class="hover">
                    <li class="dis-no-in-big-screen">
                      <a href="#">
                        About
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-gear-wide"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z"></path>
                        </svg>
                      </a>
                    </li>
                    <li class="dis-no-in-big-screen">
                      <a href="#">
                        Services
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-gear-wide"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z"></path>
                        </svg>
                      </a>
                    </li>
                    <li class="dis-no-in-big-screen">
                      <a href="#">
                        Case Studies
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-gear-wide"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z"></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-gear-wide"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z"></path>
                      </svg>
                      Home
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-gear-wide"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z"></path>
                      </svg>
                      Partners
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-gear-wide"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z"></path>
                      </svg>
                      Character
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-gear-wide"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z"></path>
                      </svg>
                      Work Portfolio
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-gear-wide"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z"></path>
                      </svg>
                      Portfolio
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-gear-wide"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z"></path>
                      </svg>
                      Careers
                    </li>
                  </ul>
                  <a href="#">
                    <svg
                      id="rotate"
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="33"
                      fill="currentColor"
                      class="bi bi-plus"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                    </svg>
                  </a>
                </li>
                <li class="dis-no">
                  <a href="#">About</a>
                </li>
                <li class="dis-no">
                  <a href="#">Services</a>
                </li>
                <li class="dis-no">
                  <a href="#">Case Studies</a>
                </li>
                <li class="dis-no">
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      class="bulb"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section class="square-fl">
          <div class="square"></div>
          <div class="dot"></div>
        </section>
      </header>

      <div className="cor-sun-df">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 57 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.5 57L29.3205 38.9278C29.409 36.9781 31.9518 36.2968 33.0033 37.941L42.75 53.1817L34.4245 37.1205C33.5263 35.3878 35.3878 33.5263 37.1205 34.4245L53.1817 42.75L37.941 33.0034C36.2968 31.9518 36.9781 29.409 38.9278 29.3205L57 28.5L38.9278 27.6795C36.9781 27.591 36.2968 25.0482 37.941 23.9967L53.1817 14.25L37.1205 22.5755C35.3878 23.4737 33.5263 21.6122 34.4245 19.8795L42.75 3.81828L33.0034 19.059C31.9518 20.7032 29.409 20.0219 29.3205 18.0722L28.5 0L27.6795 18.0722C27.591 20.0219 25.0482 20.7032 23.9967 19.059L14.25 3.81828L22.5755 19.8795C23.4737 21.6122 21.6122 23.4737 19.8795 22.5755L3.81828 14.25L19.059 23.9966C20.7032 25.0482 20.0219 27.591 18.0722 27.6795L0 28.5L18.0722 29.3205C20.0219 29.409 20.7032 31.9518 19.059 33.0033L3.81828 42.75L19.8795 34.4245C21.6122 33.5263 23.4737 35.3878 22.5755 37.1205L14.25 53.1817L23.9966 37.941C25.0482 36.2968 27.591 36.9781 27.6795 38.9278L28.5 57Z"
            fill="white"
          ></path>
        </svg>
      </div>

      <section className="about-us-info">
        <div className="about-us-info-text-heading">
          <h1>About Tashe</h1>
        </div>

        <div className="about-us-content-df">
          <div className="about-us-info-text">
            <div className="about-us-info-text-para">
              <p>
                Established in 2008, we are an ISO 9001:2008 certified company.
                We are one of the first companies in India to manufacture
                Corrugated Tanks and Corrugated Fin Walls and have been serving
                in India and across the globe to various transformer OEMs.
              </p>
              <p>
                With a total area of approximately 16,000 sq. feet, our
                state-of-the-art manufacturing unit houses most modern machines
                like automatic fin folding and fin welding line, CNC cutting and
                marking machine, shearing and press brake, dust proof paint
                shop. We also have an in-house design team who can assist you in
                making most economical and production oriented tank designs.{" "}
              </p>
              <p>
                We, at Tashe, are customer-centric in our focus and believe in
                maintaining a long-term relationship with our customers. With
                the knowledge and experience of our people, we are able to
                deliver quality products efficiently and cost-effectively
              </p>
            </div>
          </div>
          <div className="about-us-info-image">
            <img
              src="https://images.pexels.com/photos/10040001/pexels-photo-10040001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* <section className="core-values">
        <div class="we-give">
          <h1 id="we-give-one">Transparency</h1>
          <div class="give-border"></div>
          <p>
            We’re honest. We discover what’s working and what isn’t for your
            brand, then develop a clear strategy to get you where you need to
            be.
          </p>
        </div>

        <div class="we-use">
          <h1 id="we-blue">Disruption</h1>
          <div class="use-border"></div>
          <p>
            We’re cutting-edge and impactful in our approach. We’re experts in
            adapting to any and every client need and are constantly adding the
            next best thing to our toolkits.
          </p>
        </div>

        <div class="we-help-u">
          <h1 id="help-red">
            We <span class="red">help</span> you..
          </h1>
          <div class="help-border"></div>
          <p>
            We’re fearlessly original and agile, blazing the trail in the
            ever-evolving digital landscape. We’re not afraid to explore fresh
            ideas, new tactics and modern approaches.
          </p>
        </div>
      </section> */}

      <div class="our-relationship">
        <div class="relation-df">
          <div class="red-dot2"></div>
          <h1>How We Do It</h1>
          <div class="red-dot2"></div>
          <h1>How We Do It</h1>
          <div class="red-dot2"></div>
          <h1>How We Do It</h1>
          <div class="red-dot2"></div>
        </div>
      </div>

      <section className="process-steps">
        <div className="maufacturing-heading">
          <h1>Our Manufacturing Process</h1>
        </div>
        <div className="steps-container">
          <div
            ref={processAnimationOne}
            className={`${isProcessOneVis ? "steps-first" : "steps"}`}
            id="first"
          >
            <h2>Cold rolled steel</h2>
          </div>
          <div
            ref={processAnimationTwo}
            className={`${isProcessTwoVis ? "steps-second" : "steps"}`}
            id="second"
          >
            <h2>Decoiler</h2>
          </div>
          <div
            ref={processAnimationThree}
            className={`${isProcessThreeVis ? "steps-third" : "steps"}`}
            id="third"
          >
            <h2>Fin Folding</h2>
          </div>
          <div
            ref={processAnimationFour}
            className={`${isProcessFourVis ? "steps-fourth" : "steps"}`}
            id="fourth"
          >
            <h2>Edge Cutting & upward bending</h2>
          </div>

          <div
            ref={processAnimationFive}
            className={`${isProcessFiveVis ? "steps-fifth" : "steps"}`}
            id="fifth"
          >
            <h2>Auto steam welding for fin edges using robots</h2>
          </div>
          <div
            ref={processAnimationSix}
            className={`${isProcessSixVis ? "steps-six" : "steps"}`}
            id="six"
          >
            <h2>Strip welding</h2>
          </div>
          <div
            ref={processAnimationSeven}
            className={`${isProcessSevenVis ? "steps-seven" : "steps"}`}
            id="seven"
          >
            <h2>spot welding on embossement</h2>
          </div>
          <div
            ref={processAnimationEight}
            className={`${isProcessEightVis ? "steps-eight" : "steps"}`}
            id="eight"
          >
            <h2>edge downword ending</h2>
          </div>
          <div
            ref={processAnimationNine}
            className={`${isProcessNineVis ? "steps-nine" : "steps"}`}
            id="nine"
          >
            <h2>leakage test(dye penetrant)</h2>
          </div>

          <div
            ref={processAnimationTen}
            className={`${isProcessTenVis ? "steps-ten" : "steps"}`}
            id="ten"
          >
            <h2>tank assembly & welding</h2>
          </div>
          <div
            ref={processAnimationEleven}
            className={`${isProcessElevenVis ? "steps-eleven" : "steps"}`}
            id="eleven"
          >
            <h2>sub-assembly fitment and welding</h2>
          </div>
          <div
            ref={processAnimationTwelve}
            className={`${isProcessTwelveVis ? "steps-twelve" : "steps"}`}
            id="twelve"
          >
            <h2>metal parts prepration</h2>
          </div>
          <div
            ref={processAnimationThirteen}
            className={`${isProcessThirteenVis ? "steps-thirteen" : "steps"}`}
            id="thirteen"
          >
            <h2>hot rolled steel</h2>
          </div>

          <div
            ref={processAnimationFourteen}
            className={`${isProcessFourteenVis ? "steps-fourteen" : "steps"}`}
            id="fourteen"
          >
            <h2>leakage test</h2>
          </div>
          <div
            ref={processAnimationFifteen}
            className={`${isProcessFifteenVis ? "steps-fifteen" : "steps"}`}
            id="fifteen"
          >
            <h2>shot blasting</h2>
          </div>
          <div
            ref={processAnimationSixteen}
            className={`${isProcessSixteenVis ? "steps-sixteen" : "steps"}`}
            id="sixteen"
          >
            <h2>painting</h2>
          </div>
          <div
            ref={processAnimationSeventeen}
            className={`${isProcessSeventeenVis ? "steps-seventeen" : "steps"}`}
            id="seventeen"
          >
            <h2>finished tank</h2>
          </div>
          <div
            ref={processAnimationEighteen}
            className={`${isProcessEighteenVis ? "steps-eighteen" : "steps"}`}
            id="eighteen"
          >
            <h2>final quality check</h2>
          </div>
        </div>
      </section>

      {/* <section className="how-we-do">
        <div className="how-para">
          <svg
            id="rotate-flower"
            width="100%"
            height="100%"
            viewBox="0 0 69 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.5096 7.59664C32.5096 11.7764 32.7418 18.9418 33.0404 23.5529C33.3058 28.1639 33.5048 31.9457 33.4385 32.012C33.3721 32.0784 30.6851 29.0928 27.4673 25.4438C24.2163 21.7615 19.3399 16.5202 16.5865 13.7668L13.0205 10.2008C12.2445 9.42482 10.9841 9.43223 10.2173 10.2173V10.2173V10.2173C9.43224 10.9841 9.42482 12.2445 10.2008 13.0205L13.7668 16.5865C16.5202 19.3399 21.7615 24.2163 25.4438 27.4673C31.7466 33.0072 32.0452 33.3389 31.1163 33.4385C30.5524 33.5048 26.7375 33.3058 22.5909 33.0404C18.4774 32.7418 11.6769 32.5096 7.53029 32.5096H1.99038C0.891125 32.5096 0 33.4007 0 34.5V34.5V34.5C0 35.5993 0.891127 36.4904 1.99039 36.4904H7.59663C11.7764 36.4904 18.9418 36.2582 23.5529 35.9596C28.1639 35.6942 31.9457 35.4952 32.012 35.5615C32.0784 35.6279 29.6236 37.8173 26.6048 40.4712C23.5529 43.125 18.2784 48.0346 14.8615 51.3851L10.0462 56.1235C9.26046 56.8968 9.24795 58.1599 10.0183 58.9486V58.9486V58.9486C10.7858 59.7344 12.0468 59.7439 12.8261 58.9697L16.487 55.3327C19.3067 52.5462 24.2163 47.2385 27.4673 43.5562C29.0803 41.7104 30.56 40.048 31.643 38.8573C32.8001 37.5851 33.444 37.8623 33.36 39.5799C33.2852 41.1071 33.1708 43.181 33.0404 45.4471C32.7418 50.0582 32.5096 57.2236 32.5096 61.4034V67.0096C32.5096 68.1089 33.4007 69 34.5 69V69V69C35.5993 69 36.4904 68.1089 36.4904 67.0096V61.4034C36.4904 57.2236 36.2582 50.0582 35.9596 45.4471C35.6942 40.8361 35.4952 37.0543 35.5615 36.988C35.6279 36.9216 37.8173 39.3764 40.4712 42.3952C43.125 45.4471 48.0346 50.7216 51.3851 54.1385L56.1236 58.9538C56.8968 59.7395 58.1599 59.752 58.9486 58.9817V58.9817V58.9817C59.7344 58.2142 59.7439 56.9532 58.9697 56.1739L55.3327 52.513C52.5462 49.6933 47.2385 44.7837 43.5562 41.5327C41.7104 39.9197 40.048 38.44 38.8573 37.357C37.5851 36.1999 37.8623 35.556 39.5799 35.64C41.1071 35.7148 43.181 35.8292 45.4471 35.9596C50.0582 36.2582 57.2236 36.4904 61.4034 36.4904H67.0096C68.1089 36.4904 69 35.5993 69 34.5V34.5V34.5C69 33.4007 68.1089 32.5096 67.0096 32.5096H61.4034C57.2236 32.5096 50.0582 32.7418 45.4471 33.0404C40.8361 33.3058 37.0543 33.5048 36.988 33.4385C36.9216 33.3721 39.3764 31.1827 42.3952 28.5288C45.4471 25.875 50.7216 20.9654 54.1385 17.6149L58.9538 12.8764C59.7395 12.1032 59.752 10.8401 58.9817 10.0514V10.0514V10.0514C58.2134 9.26485 56.9519 9.25331 56.1693 10.0257L52.4798 13.6673C49.6933 16.4538 44.7837 21.7615 41.5327 25.4438C39.9197 27.2896 38.44 28.952 37.357 30.1427C36.1999 31.4149 35.556 31.1377 35.64 29.4201C35.7148 27.8929 35.8292 25.819 35.9596 23.5529C36.2582 18.9418 36.4904 11.7764 36.4904 7.59664V1.99038C36.4904 0.891126 35.5993 0 34.5 0V0V0C33.4007 0 32.5096 0.891127 32.5096 1.99039V7.59664Z"
              fill="white"
            ></path>
          </svg>
          <p>
            WE’RE LIKE YOUR CHIEF GROWTH OFFICER, BUT WITH SUPERPOWERS AND A
            CHARGED UP TEAM OF EXPERTS.
          </p>
          <svg
            id="rotate-flower"
            width="100%"
            height="100%"
            viewBox="0 0 69 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.5096 7.59664C32.5096 11.7764 32.7418 18.9418 33.0404 23.5529C33.3058 28.1639 33.5048 31.9457 33.4385 32.012C33.3721 32.0784 30.6851 29.0928 27.4673 25.4438C24.2163 21.7615 19.3399 16.5202 16.5865 13.7668L13.0205 10.2008C12.2445 9.42482 10.9841 9.43223 10.2173 10.2173V10.2173V10.2173C9.43224 10.9841 9.42482 12.2445 10.2008 13.0205L13.7668 16.5865C16.5202 19.3399 21.7615 24.2163 25.4438 27.4673C31.7466 33.0072 32.0452 33.3389 31.1163 33.4385C30.5524 33.5048 26.7375 33.3058 22.5909 33.0404C18.4774 32.7418 11.6769 32.5096 7.53029 32.5096H1.99038C0.891125 32.5096 0 33.4007 0 34.5V34.5V34.5C0 35.5993 0.891127 36.4904 1.99039 36.4904H7.59663C11.7764 36.4904 18.9418 36.2582 23.5529 35.9596C28.1639 35.6942 31.9457 35.4952 32.012 35.5615C32.0784 35.6279 29.6236 37.8173 26.6048 40.4712C23.5529 43.125 18.2784 48.0346 14.8615 51.3851L10.0462 56.1235C9.26046 56.8968 9.24795 58.1599 10.0183 58.9486V58.9486V58.9486C10.7858 59.7344 12.0468 59.7439 12.8261 58.9697L16.487 55.3327C19.3067 52.5462 24.2163 47.2385 27.4673 43.5562C29.0803 41.7104 30.56 40.048 31.643 38.8573C32.8001 37.5851 33.444 37.8623 33.36 39.5799C33.2852 41.1071 33.1708 43.181 33.0404 45.4471C32.7418 50.0582 32.5096 57.2236 32.5096 61.4034V67.0096C32.5096 68.1089 33.4007 69 34.5 69V69V69C35.5993 69 36.4904 68.1089 36.4904 67.0096V61.4034C36.4904 57.2236 36.2582 50.0582 35.9596 45.4471C35.6942 40.8361 35.4952 37.0543 35.5615 36.988C35.6279 36.9216 37.8173 39.3764 40.4712 42.3952C43.125 45.4471 48.0346 50.7216 51.3851 54.1385L56.1236 58.9538C56.8968 59.7395 58.1599 59.752 58.9486 58.9817V58.9817V58.9817C59.7344 58.2142 59.7439 56.9532 58.9697 56.1739L55.3327 52.513C52.5462 49.6933 47.2385 44.7837 43.5562 41.5327C41.7104 39.9197 40.048 38.44 38.8573 37.357C37.5851 36.1999 37.8623 35.556 39.5799 35.64C41.1071 35.7148 43.181 35.8292 45.4471 35.9596C50.0582 36.2582 57.2236 36.4904 61.4034 36.4904H67.0096C68.1089 36.4904 69 35.5993 69 34.5V34.5V34.5C69 33.4007 68.1089 32.5096 67.0096 32.5096H61.4034C57.2236 32.5096 50.0582 32.7418 45.4471 33.0404C40.8361 33.3058 37.0543 33.5048 36.988 33.4385C36.9216 33.3721 39.3764 31.1827 42.3952 28.5288C45.4471 25.875 50.7216 20.9654 54.1385 17.6149L58.9538 12.8764C59.7395 12.1032 59.752 10.8401 58.9817 10.0514V10.0514V10.0514C58.2134 9.26485 56.9519 9.25331 56.1693 10.0257L52.4798 13.6673C49.6933 16.4538 44.7837 21.7615 41.5327 25.4438C39.9197 27.2896 38.44 28.952 37.357 30.1427C36.1999 31.4149 35.556 31.1377 35.64 29.4201C35.7148 27.8929 35.8292 25.819 35.9596 23.5529C36.2582 18.9418 36.4904 11.7764 36.4904 7.59664V1.99038C36.4904 0.891126 35.5993 0 34.5 0V0V0C33.4007 0 32.5096 0.891127 32.5096 1.99039V7.59664Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </section> */}

      <section className="numbers">
        <div className="number1">
          <div className="number-head">
            <h2>Company Vision</h2>
            <p id="number-para1">
              To Become Worldwide Industry Leader in the field of Transformer
              Cooling Radiators, Fabrication of Transformer Tanks and Electrical
              Panels / Enclosures, thereby creating maximum value for our
              Customers, Suppliers and Shareholders
            </p>
          </div>
        </div>

        <div className="number2">
          <div className="number-head">
            <h2>Company Mission</h2>
            <p id="number-para2">
              Our Mission serves as a roadmap towards our Vision and guides
              every aspect of our working:
            </p>
            <ul>
              <li>
                People: Be a great place to work where people are inspired,
                involved and motivated.
              </li>
              <li>
                Product & Quality: Bring to the world a portfolio of quality
                products that satisfy’s .
              </li>
              <li>
                Productivity: Be a highly productive, lean and cost effective
                organisation
              </li>
              <li>
                Profit: Maximize long-term return to shareholders while being
                mindful of our overall responsibilities
              </li>
            </ul>
          </div>
        </div>

        <div className="number3">
          <div className="number-head">
            <h2>Company Values</h2>
            <ul>
              <li>Quality: What we do, we do well</li>
              <li>Honestly & Integrity: Be real and genuine</li>
              <li>
                Building Relations: Understand customers and suppliers and build
                long term association
              </li>
              <li>Passion: Committed with heart, mind and soul</li>
            </ul>
          </div>
        </div>

        <div className="number4">
          <div className="number-head">
            <h2>Our Markets</h2>
            <ul>
              <li>Graph or world map with countries marked up</li>
              <li>Logo of customers</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="design-expert">
        <div class="cor-sun-df">
          <svg
            id="core-sun-small"
            width="100%"
            height="100%"
            viewBox="0 0 57 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.5 57L29.3205 38.9278C29.409 36.9781 31.9518 36.2968 33.0033 37.941L42.75 53.1817L34.4245 37.1205C33.5263 35.3878 35.3878 33.5263 37.1205 34.4245L53.1817 42.75L37.941 33.0034C36.2968 31.9518 36.9781 29.409 38.9278 29.3205L57 28.5L38.9278 27.6795C36.9781 27.591 36.2968 25.0482 37.941 23.9967L53.1817 14.25L37.1205 22.5755C35.3878 23.4737 33.5263 21.6122 34.4245 19.8795L42.75 3.81828L33.0034 19.059C31.9518 20.7032 29.409 20.0219 29.3205 18.0722L28.5 0L27.6795 18.0722C27.591 20.0219 25.0482 20.7032 23.9967 19.059L14.25 3.81828L22.5755 19.8795C23.4737 21.6122 21.6122 23.4737 19.8795 22.5755L3.81828 14.25L19.059 23.9966C20.7032 25.0482 20.0219 27.591 18.0722 27.6795L0 28.5L18.0722 29.3205C20.0219 29.409 20.7032 31.9518 19.059 33.0033L3.81828 42.75L19.8795 34.4245C21.6122 33.5263 23.4737 35.3878 22.5755 37.1205L14.25 53.1817L23.9966 37.941C25.0482 36.2968 27.591 36.9781 27.6795 38.9278L28.5 57Z"
              fill="white"
            ></path>
          </svg>
        </div>

        <div className="design-carasoul">
          <div className="ideas">
            <div className="green-dots"></div>
            <h1>Innovative Visionaries</h1>
          </div>
          <div className="ideas">
            <div className="green-dots"></div>
            <h1>Design Experts and Entrepreneurs</h1>
          </div>
          <div className="ideas">
            <div className="green-dots"></div>
            <h1>Campaign Developers</h1>
          </div>
          <div className="ideas">
            <div className="green-dots"></div>
            <h1>Out-of-the-box Thinkers</h1>
          </div>
          <div className="ideas">
            <div className="green-dots"></div>
            <h1>Creative</h1>
          </div>
          <div className="ideas">
            <div className="green-dots"></div>
            <h1>Skilled Brand Strategists</h1>
          </div>
          <div className="ideas">
            <div className="green-dots"></div>
            <h1>Social Savvy</h1>
          </div>
          <div className="ideas">
            <div className="green-dots"></div>
            <h1>Passionate Brand Builders</h1>
          </div>
          <div className="ideas">
            <div className="green-dots"></div>
            <h1>Competitive Growth Hackers</h1>
          </div>
        </div>

        <p id="little">A LITTLE MORE ABOUT US</p>

        <div class="cor-sun-df">
          <svg
            className="little-top"
            id="core-sun-small"
            width="100%"
            height="100%"
            viewBox="0 0 57 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.5 57L29.3205 38.9278C29.409 36.9781 31.9518 36.2968 33.0033 37.941L42.75 53.1817L34.4245 37.1205C33.5263 35.3878 35.3878 33.5263 37.1205 34.4245L53.1817 42.75L37.941 33.0034C36.2968 31.9518 36.9781 29.409 38.9278 29.3205L57 28.5L38.9278 27.6795C36.9781 27.591 36.2968 25.0482 37.941 23.9967L53.1817 14.25L37.1205 22.5755C35.3878 23.4737 33.5263 21.6122 34.4245 19.8795L42.75 3.81828L33.0034 19.059C31.9518 20.7032 29.409 20.0219 29.3205 18.0722L28.5 0L27.6795 18.0722C27.591 20.0219 25.0482 20.7032 23.9967 19.059L14.25 3.81828L22.5755 19.8795C23.4737 21.6122 21.6122 23.4737 19.8795 22.5755L3.81828 14.25L19.059 23.9966C20.7032 25.0482 20.0219 27.591 18.0722 27.6795L0 28.5L18.0722 29.3205C20.0219 29.409 20.7032 31.9518 19.059 33.0033L3.81828 42.75L19.8795 34.4245C21.6122 33.5263 23.4737 35.3878 22.5755 37.1205L14.25 53.1817L23.9966 37.941C25.0482 36.2968 27.591 36.9781 27.6795 38.9278L28.5 57Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </section>

      <section className="meet-team">
        <div className="meet-team-heading">
          <h1>
            Meet the <span className="red">team</span>
          </h1>
        </div>

        <div className="nik-sharma">
          <div className="nik-image">
            <img
              src="https://assets-global.website-files.com/6256e6c3b9a2399f18464dd1/6284ab84503ce65d6208a54a_Nik%20Sharma%20_%20CEO%20.jpg"
              alt=""
            />
          </div>

          <div className="nik-hover">
            <div className="nik-max">
              <h1>
                Nik
                <br />
                <span id="sharma">Sharma</span>
              </h1>
              <p>OUR FOUNDER AND DTC KING</p>
              <button>View Site</button>
            </div>
          </div>
        </div>

        <div className="other-team">
          <div className="team-first-row">
            <div className="box1">
              <div className="box-image">
                <img
                  src="https://assets-global.website-files.com/6256e6c3b9a2399f18464dd1/6284ab15adf4941cd45c38ee_Carly%20Lieberman%20_%20Creative%20Director%20.jpg"
                  alt=""
                />
              </div>

              <div className="box-hover">
                <div className="box-max">
                  <h1>Carly</h1>
                  <p>CREATIVE DIRECT</p>
                </div>
              </div>
            </div>

            <div className="box2">
              <div className="box-image">
                <img
                  src="https://assets-global.website-files.com/6256e6c3b9a2399f18464dd1/6284ab15adf4941cd45c38ee_Carly%20Lieberman%20_%20Creative%20Director%20.jpg"
                  alt=""
                />
              </div>

              <div className="box-hover">
                <div className="box-max">
                  <h1>Carly</h1>
                  <p>CREATIVE DIRECT</p>
                </div>
              </div>
            </div>

            <div className="box1">
              <div className="box-image">
                <img
                  src="https://assets-global.website-files.com/6256e6c3b9a2399f18464dd1/6284ab15adf4941cd45c38ee_Carly%20Lieberman%20_%20Creative%20Director%20.jpg"
                  alt=""
                />
              </div>

              <div className="box-hover">
                <div className="box-max">
                  <h1>Carly</h1>
                  <p>CREATIVE DIRECT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
