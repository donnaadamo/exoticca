import * as React from "react";
import styled from "styled-components";
import GLOBAL from "../../config/global";
import { ICard } from "../../interfaces/Card";

const CardComponent = styled.div`
  margin: 8%;
  border-radius: 1%;
  box-shadow: 0px 1px 3px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 2px 1px -1px rgb(0 0 0 / 12%);
`;

const Bottom = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3%;
  background: white;
`;

const Destination = styled.h2`
  margin: 0;
`;

const Info = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0));
  padding: 3%;
`;

const PricingPercentage = styled.div`
  background: rgb(42, 42, 42);
  color: rgb(232, 203, 145);
  font-weight: bold;
  padding: 8px;
  position: absolute;
  margin-left: 8px;
  margin-top: 8px;
  border-radius: 4px;
`;

const OldPrice = styled.span`
  text-decoration-line: line-through;
  font-weight: bold;
`;

const NewPrice = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Top = styled.div`
  background-image: url(${(props: { url: string }) => props.url});
  background-size: cover;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
`;

export default function Card({
  card,
  site,
}: {
  card: ICard;
  site: "uk" | "us" | "es";
}) {
  return (
    <CardComponent>
      <Link href={`${GLOBAL.URLS.BASE}${card.url}`}>
        <PricingPercentage>
          -{card.priceDetail.pricingPercentage}%
        </PricingPercentage>
        <Top url={card.images[0].desktop}>
          <Info>
            <Destination>{card.destination}</Destination>
            <div>
              {card.days} {GLOBAL.CARD.DAYS[site]}
            </div>
          </Info>
        </Top>

        <Bottom>
          <div>{card.destination}</div>
          <div>
            {GLOBAL.CARD.FROM[site]}{" "}
            <OldPrice>{card.priceDetail.oldPriceBeautify}</OldPrice>{" "}
            <NewPrice>{card.priceDetail.fromPriceBeautify}</NewPrice>
          </div>
        </Bottom>
      </Link>
    </CardComponent>
  );
}
