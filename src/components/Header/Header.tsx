import * as React from "react";
import GLOBAL from "../../config/global";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 1.2%;
  margin-top: 1%;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-style: italic;
  font-size: 2rem;
  margin-bottom: 1%;
`;

const Description = styled.div`
  font-size: 0.9rem;
  @media (max-width: 400px) {
    display: none;
  }
`;

const MoreTrips = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1.2%;
  @media (max-width: 400px) {
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-around;
  }
`;

const Button = styled.a`
  border-radius: 4px;
  border: 1px solid rgb(42, 42, 42);
  background-color: transparent;
  font-size: 0.9rem;
  color: rgb(42, 42, 42);
  width: 100%;
  max-width: 220px;
  text-align: center;
  padding: 12px 0px;
  font-weight: normal;
  text-decoration: none;
  @media (max-width: 400px) {
    display: none;
  }
`;

const Arrow = styled.img`
  width: 2rem;
  @media (min-width: 400px) {
    display: none;
  }
`;

export default function Header({ site }: { site: "us" | "uk" | "es" }) {
  return (
    <Container>
      <div>
        <Title>{GLOBAL.HEADER.TITLES[site]}</Title>
        <Description>{GLOBAL.HEADER.DESCRIPTIONS[site]}</Description>
      </div>
      <MoreTrips>
        <Button href={`${GLOBAL.URLS.BASE}${GLOBAL.URLS.SHORT_TRIPS[site]}`}>
          See more trips
        </Button>
        <p>10 available trips</p>
        <Arrow src="./right-arrow-svgrepo-com.svg" />
      </MoreTrips>
    </Container>
  );
}
