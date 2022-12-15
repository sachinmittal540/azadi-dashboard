import * as React from "react";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTextField from "components/CustomTextField/CustomTextField.js";

export default function ProductInfo() {
  const inputProps = {
    step: 300,
  };

  return (
    <GridContainer spacing={2}>
      <GridItem xs={6} sm={6} md={6}>
        <CustomTextField
          label="Product Name"
          required={true}
          fullWidth={true}
        />
      </GridItem>
      <GridItem xs={6} sm={6} md={6}>
        <CustomTextField label="Description" required={true} fullWidth={true} />
      </GridItem>
      <GridItem xs={6} sm={6} md={6}>
        <CustomTextField
          label="Ratings ( 0 to 5 )"
          required={true}
          fullWidth={true}
        />
      </GridItem>
    </GridContainer>
  );
}
