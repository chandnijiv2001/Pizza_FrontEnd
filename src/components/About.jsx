import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>More About Us</h1>
        <p>
          The origin of the word Pizza is uncertain. The food was invented in Naples about 200 years ago. It is the name for a special type of flatbread, made with special dough. The pizza enjoyed a second birth as it was taken to the United States in the late 19th century. Flatbreads, like the focaccia from Liguria, have been known for a very long time. Pizzas need to be baked at temperatures of 200–250 °C. Hardly any household oven could reach such temperatures at the time. Because of this, the pizza was made at home, and then given to the town bakery to bake. In June 1889, the Neapolitan chef Raffaele Esposito created the "Margherita" in honour of Queen Margherita, and was the first pizza to include cheese.
        </p>
        <h1>Our Speciality</h1>
        <Row>
          <Col md={6}>
            <p>
             Pizza was brought to the United States with Italian immigrants in the late nineteenth century; and first appeared in areas where Italian immigrants concentrated. The country's first pizzeria (place that focuses in pizza), Lombardi's, opened in 1905 Veterans returning from World War II's Italian Campaign were a ready market for pizza. Since then, pizza consumption has increased in the U.S. Pizza chains such as Domino's, Pizza Hut, and Papa John's, have outlets all over the nation. Thirteen percent of the U.S. population eats pizza on any given day.
            </p>
          </Col>
          <Col md={6}>
            <p>
              Pizza was brought to the United States with Italian immigrants in the late nineteenth century; and first appeared in areas where Italian immigrants concentrated. The country's first pizzeria (place that focuses in pizza), Lombardi's, opened in 1905.Veterans returning from World War II's Italian Campaign were a ready market for pizza.Since then, pizza consumption has increased in the U.S. Pizza chains such as Domino's, Pizza Hut, and Papa John's, have outlets all over the nation. Thirteen percent of the U.S. population eats pizza on any given day.
            </p>
          </Col>
        </Row>
        <Row>
          <h1>Our Cheif</h1>
          <Col md={3}>
            A pizza chef manages multiple, simultaneous processes —from dough and ingredient prep to cooking pizza in a pizza or wood-fired oven. A good pizza chef makes excellent pizzas and knows how to teach others to toss dough, assemble pizzas and cook them properly.
          </Col>
          <Col md={3}>
            Depending on the restaurant, a pizza chef may require formal culinary training with a focus on Italian cuisine. Some pizza chefs create original pizza recipes, which can be extremely popular. At a minimum, a pizza chef should be able to read and follow basic cooking directions.
          </Col>
          <Col md={3}>
            Good pizza chefs provide excellent service to customers. Depending on the type of restaurant, a pizza chef may be in charge of phone orders and take-out deliveries. They should be able to communicate well and resolve customer complaints with diplomacy.Willingness to work flexible schedule Restaurants are often busiest during nights, weekends and holidays. Pizza chefs should be able to work those shifts.
          </Col>
          <Col md={3}>
            Some pizza chefs may be responsible for administrative tasks related to kitchen management. They may, for example, be responsible for ensuring that ingredients are stocked before service and communicating with procurement or the head chef to order supplies. Pizza chefs may be responsible for ensuring that food costs yield profitability while providing quality ingredients. They may also be responsible for maintaining industrial kitchen equipment and ensuring food preparation areas meet sanitation standards and local health laws.
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
