import React from "react";
import { DropzoneArea } from 'material-ui-dropzone';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

export default function Media({ productDetails, setProductDetails }) {

  const onChange = (files) => {
    setProductDetails({...productDetails, images: files});
  };

  return (
    <GridContainer spacing={2}>
      <GridItem xs={12} sm={12} md={12}>
        <DropzoneArea filesLimit={5} onChange={onChange} />
      </GridItem>
    </GridContainer>
  );
}
