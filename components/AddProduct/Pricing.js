import * as React from "react";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTextField from "components/CustomTextField/CustomTextField.js";

export default function Pricing() {
  const inputProps = {
    step: 300,
  };

  return (
    <GridContainer spacing={2}>
      <GridItem xs={6} sm={6} md={6}>
        <CustomTextField
          label="Product Price"
          required={true}
          fullWidth={true}
        />
      </GridItem>
      <GridItem xs={6} sm={6} md={6}>
        <CustomTextField
          label="Discount ( In percentage )"
          fullWidth={true}
        />
      </GridItem>
    </GridContainer>
  );
}
