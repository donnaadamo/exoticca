import { Select, Option } from "@bootstrap-styled/v4";
import * as React from "react";

export default function SiteSelector(props: { setSite: any }) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setSite(event.currentTarget.value);
  };

  return (
    <Select onChange={handleChange}>
      <Option value="uk">UK</Option>
      <Option value="us">US</Option>
      <Option value="es">ES</Option>
    </Select>
  );
}
