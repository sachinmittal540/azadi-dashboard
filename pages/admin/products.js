import React, { useState } from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";

import ProductInfo from "components/AddProduct/ProductInfo.js";
import Media from "components/AddProduct/Media.js";
import Pricing from "components/AddProduct/Pricing.js";
import Preview from "components/AddProduct/Preview.js";

import Box from "@material-ui/core/Box";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";

// layout for this page
import Admin from "layouts/Admin.js";

import productStyles from "assets/jss/nextjs-material-dashboard/views/productStyle.js";
import classNames from "classnames";

function Products() {
  const [productDetails, setProductDetails] = useState({});
  const [errorInSteps, setErrorInSteps] = useState([1]);
  const [currentStep, setCurrentStep] = useState(0);
  const productCss = makeStyles(productStyles);
  const productClasses = productCss();

  const steps = ["Product Info", "Media", "Pricing", "Preview"];

  const renderStepContent = () => {
    const step = {
      0: (
        <ProductInfo
          setProductDetails={setProductDetails}
          productDetails={productDetails}
        />
      ),
      1: (
        <Media
          setProductDetails={setProductDetails}
          productDetails={productDetails}
        />
      ),
      2: (
        <Pricing
          setProductDetails={setProductDetails}
          productDetails={productDetails}
        />
      ),
      3: <Preview productDetails={productDetails} />,
    };
    return step[currentStep];
  };

  const changeStep = (e) => {
    const buttonType = e.target.name;
    if (buttonType === "next" && currentStep <= 2) {
      setCurrentStep(currentStep + 1);

      
    } else if (buttonType === "back" && currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepFailed = (step) => {
    return errorInSteps.includes(step);
  };

  return (
    <div>
      <h3 className={productClasses.title}> Add New Product </h3>
      <h5 className={productClasses.description}>
        This information will describe more about the product.
      </h5>
      <GridContainer center>
        <GridItem xs={8} sm={8} md={8}>
          <Card>
            <CardHeader color="dark" className={productClasses.p35}>
              <Box sx={{ width: "100%" }}>
                {/* <Stepper
                  activeStep={currentStep}
                  alternativeLabel
                  className={productClasses.stepper}
                >
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel className="stepLabelStyle">{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper> */}

                <Stepper activeStep={currentStep} className={productClasses.stepper}>
                  {steps.map((label, index) => {
                    const labelProps = {};
                    if (isStepFailed(index)) {
                      labelProps.optional = (
                        <Typography variant="caption" color="error">
                          Error
                        </Typography>
                      );

                      labelProps.error = true;
                    }

                    return (
                      <Step key={label}>
                        <StepLabel {...labelProps} className="stepLabelStyle">
                          {label}
                        </StepLabel>
                      </Step>
                    );
                  })}
                </Stepper>
              </Box>
            </CardHeader>
            <CardBody>
              <h5 className={productClasses.title}>{steps[currentStep]}</h5>
              <div style={{ margin: "20px 0" }}>{renderStepContent()}</div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {currentStep !== 0 && (
                  <Button
                    variant="outlined"
                    className="btn btn-outline-primary mb-0"
                    onClick={changeStep}
                    name="back"
                  >
                    Back
                  </Button>
                )}
                {currentStep !== 3 && (
                  <Button
                    variant="outlined"
                    color="success"
                    onClick={changeStep}
                    name="next"
                  >
                    Next
                  </Button>
                )}
                {currentStep === 3 && (
                  <Button
                    variant="outlined"
                    color="success"
                    // onClick={changeStep}
                    name="next"
                  >
                    Add Product
                  </Button>
                )}
              </div>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

Products.layout = Admin;

export default Products;
