import React from 'react'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Carousel } from "react-bootstrap"

import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"

const Landing = () => (
  <Carousel>
    <Carousel.Item>
      <img src={img1} alt="first slide" />
    </Carousel.Item>
    <Carousel.Item>
      <img src={img2} alt="second slide" />
    </Carousel.Item>
    <Carousel.Item>
      <img src={img3} alt="third slide" />
    </Carousel.Item>
  </Carousel>
)

export default Landing