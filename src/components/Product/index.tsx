import React from 'react';

import tshirtImage from '../../assets/tshirt.png';
import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="/">Compartilhar</a>
        <a href="/">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-shirt" />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection: React.FC = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipson</p>
        <p className="description">
          Receba o produto que esstá esperando ou devolvemos o seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">sem garantia</p>
      </span>
    </div>

    <a href="/">Saiba mais sobre garantia</a>
  </Section>
);

const Info: React.FC = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
      exercitationem. Eum, quis. Laborum recusandae placeat neque obcaecati
      maxime, quam sint ipsa, mollitia praesentium eius quis eum, consequatur
      tenetur! Totam, molestiae?
      <br />
      <br />
      Itens inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione
      beatae architecto, obcaecati dolores sunt id nostrum soluta, quisquam
      voluptate ad explicabo quam voluptas, quasi molestiae eaque tempora quos
      officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
      repellat illum ab ratione distinctio unde velit. Impedit, illo. Voluptatem
      repellat voluptas accusantium voluptate officiis nihil aliquid accusamus
      voluptatibus explicabo dolorem.
    </p>
  </Description>
);

export default Product;
