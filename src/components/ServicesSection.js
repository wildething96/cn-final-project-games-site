import React from 'react';
import { MdDesktopMac, MdCode, MdGames } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What we will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="web design"
            desc="We do ui/ux design for the website that helps website to get a unique look."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="web dev"
            desc="We also develop the websites. We create high performance website with blazing fast speed."
          />
          <ServicesSectionItem
            icon={<MdGames />}
            title="Game Dev"
            desc="We develop game applications. We create game app with eye catching ui. "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
