import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import SiteSelector from "./components/SiteSelector/SiteSelector";
import CustomSlider from "./components/CustomSlider/CustomSlider";

const Home = styled.div`
  font-family: "Red Hat Text", sans-serif;
  background-image: url("./bg_short_trips.jpeg");
`;

export default function App() {
  const [site, setSite] = useState<"uk" | "us" | "es">("uk");
  return (
    <Home>
      <SiteSelector setSite={setSite} />
      <Header site={site} />
      <CustomSlider site={site} />
    </Home>
  );
}
