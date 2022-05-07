import * as React from "react";
import { useQuery } from "react-query";
import { getDataBySite } from "../../api/api";
import Card from "../Card/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Slider from "react-slick";
import { ICard } from "../../interfaces/Card";

const StyledSlider = styled(Slider)`
  .slick-arrow {
    z-index: 1000;
  }
`;

export default function CustomSlider({ site }: { site: "uk" | "us" | "es" }) {
  const { data, error, isLoading } = useQuery(["api", site], () =>
    getDataBySite(site)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    adaptiveHeight: true,
    dots: true,
    responsive: [
      {
        breakpoint: 821,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <StyledSlider {...settings}>
      {data.slides[0].cards.map((card: ICard) => (
        <Card card={card} site={site} key={card.id} />
      ))}
    </StyledSlider>
  );
}
