import React, { useState } from "react";
import { DropzoneDialog } from "material-ui-dropzone";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

export default function Media() {
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState();
  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = (data) => {
    console.log(data);
    setOpen(false);
    setFiles(data);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <GridContainer spacing={2}>
      <GridItem xs={6} sm={6} md={6}>
        <Button color="rose" onClick={handleOpen.bind(this)}>Add Images</Button>
        <DropzoneDialog
          open={open}
          onSave={handleSave.bind(this)}
          acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
          showPreviews={true}
          maxFileSize={5000000}
          onClose={handleClose.bind(this)}
        />
      </GridItem>
    </GridContainer>
  );
}
