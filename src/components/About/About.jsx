'use strict';

import React from 'react';
import {Link, IndexLink} from 'react-router';

import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import AboutBannerText from './AboutBannerText';

import MainContent from '../MainContent/MainContent';
import Image from '../MainContent/Image';
import TextSection from '../MainContent/TextSection';
import List from '../MainContent/List';

import hill from '../../assets/img/hills-1.jpg';
import chris from '../../assets/img/chris2.jpg';

const text = {
  paragraphs: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis mi sodales, sollicitudin mi id, efficitur erat. Quisque suscipit felis vitae nunc fringilla pretium. Sed sed varius libero. Donec varius, ex non sagittis bibendum, nunc magna sagittis odio, ut eleifend turpis justo a arcu. Vestibulum sed sem id mi accumsan aliquet ac non enim. In porttitor cursus ex, sit amet facilisis tortor. Vivamus eleifend, sem eu hendrerit lacinia, nunc dolor malesuada turpis, id rutrum tortor purus nec elit. Pellentesque venenatis vel lacus a convallis. Nulla magna nibh, placerat a leo ut, feugiat imperdiet eros."
  ]
};

const list = {
  title: "Basic Info",
  items: {
    "Name": "Christopher Ronning",
    "Languages": "Javascript (including ECMAScript 6), Typescript, HTML/CSS, C#, Ruby",
    "Frameworks and Tools": "React, Node.js, Express, Angular 1, Git",
    "IDEs/Text Editors": "WebStorm, Sublime Text 3, Visual Studio",
    "Location": "Providence, Rhode Island",
  }
};

const About = () =>
  <div id="about-page">
    <Header/>
    <Banner image={hill} >
      <AboutBannerText />
    </Banner>
    <div id="about-page-content">
      <MainContent header="Christopher Ronning">
        <div id="about-page-content-top">
          <Image image={ {src: chris, caption: "Hello!"} }/>
          <List contents={list}/>
        </div>
        <div id="about-page-content-bottom">
          <TextSection contents={text} />
        </div>
      </MainContent>
    </div>
  </div>

export default About;