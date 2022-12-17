import * as React from "react";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTextField from "components/CustomTextField/CustomTextField.js";

export default function Pricing({ productDetails, setProductDetails }) {
  const onChange = (e) => {
    let { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  return (
    <GridContainer spacing={2}>
      <GridItem xs={6} sm={6} md={6}>
        <CustomTextField
          label="Product Price"
          name="price"
          required={true}
          fullWidth={true}
          onChange={onChange}
          value={productDetails.price}
        />
      </GridItem>
      <GridItem xs={6} sm={6} md={6}>
        <CustomTextField
          label="Discount ( In percentage )"
          name="discount_percentage"
          fullWidth={true}
          onChange={onChange}
          value={productDetails.discount_percentage}
        />
      </GridItem>
    </GridContainer>
  );
}
