import * as React from "react";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTextField from "components/CustomTextField/CustomTextField.js";

export default function ProductInfo({ productDetails, setProductDetails }) {
  const onChange = (e) => {
    let { name, value } = e.target;
    setProductDetails({...productDetails, [name]: value});
  };

  return (
    <GridContainer center>
      <GridItem xs={6} sm={6} md={6}>
        <CustomTextField
          id="outlined"
          label="Product Name"
          name="product_name"
          required={true}
          fullWidth={true}
          onChange={onChange}
          value={productDetails.product_name}
        />
      </GridItem>
      <GridItem xs={6} sm={6} md={6}>
        <CustomTextField
          id="outlined"
          label="Ratings ( 0 to 5 )"
          name="ratings"
          fullWidth={true}
          onChange={onChange}
          value={productDetails.ratings}
        />
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <CustomTextField
          id="outlined-multiline-static"
          label="Description"
          name="description"
          multiline
          rows={4}
          required={true}
          fullWidth={true}
          onChange={onChange}
          value={productDetails.description}
        />
      </GridItem>
    </GridContainer>
  );
}
