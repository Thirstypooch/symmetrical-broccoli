import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Carousel } from "react-bootstrap"

import img4 from "../images/img4.jpg"
import img5 from "../images/img5.jpg"
import img6 from "../images/img6.jpg"

const Mision = () => (
  <Carousel>
    <Carousel.Item>
      <img src={img4} alt="first slide" />
      <Carousel.Caption>
        <h3>
          Creamos productos naturales para el cuidado de la piel efectivos de
          gran calidad ,orgánicos, de alta concentración y no tóxicos
        </h3>
        <p>
          Creemos en el poder de lo natural y que traen los mejores resultados .
          Es por eso que nuestras fórmulas son 100 % naturales y originales,
          creados y testados por nosotros , en mujeres reales con rutinas de
          vida como la tuya o la mía . Amamos a los animales y nunca seremos
          partícipes de maltratarlos testeando en ellos{" "}
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src={img5} alt="second slide" />
      <Carousel.Caption>
        <p>
          You Organic Skincare nos permite hacer lo que tanto amamos, productos
          naturales de gran calidad usando ingredientes orgánicos promoviendo la
          económica circular . No solo usamos ingredientes orgánicos
          certificados si no que también nos apoyamos en cosechas orgánicas de
          agricultores que comparten la misma pasión que nosotros : el amor a
          nuestra tierra , a lo natural, a las flores y a toda la abundancia que
          sale de ella .
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src={img6} alt="third slide" />
      <Carousel.Caption>
        <p>
          Nuestra misión más importante es cuidar de ti Nuestro anhelo es
          promover una belleza natural, consciente y hacerte sentir parte de
          esta hermosa familia que estás formando gracias a ti día a día.
          Nuestros Productos no contienen: Ingredientes sintéticos , sulfatos ,
          parabenos , ftalatos, aceites minerales e ingredientes derivados del
          petróleo.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)

export default Mision
