import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

// @material-ui
import { makeStyles } from "@material-ui/core/styles";
import AccessTime from "@material-ui/icons/AccessTime";

import styles from "assets/jss/nextjs-material-dashboard/views/productStyle.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

export default function Preview({ productDetails }) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <GridContainer center>
      <GridItem xs={8} sm={8} md={8}>
        <Card chart>
          <CardHeader color="success">
            <h4>Product Preview</h4>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={6} sm={6} md={6}>
                <h4 className={classes.cardTitle}>Product Name</h4>
                <p className={classes.cardCategory}>
                  {productDetails.product_name}
                </p>
              </GridItem>
              <GridItem xs={6} sm={6} md={6}>
                <h4 className={classes.cardTitle}>Ratings</h4>
                <p className={classes.cardCategory}>{productDetails.ratings}</p>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <h4 className={classes.cardTitle}>Description</h4>
                <p className={classes.cardCategory}>{productDetails.description}</p>
              </GridItem>

              <GridItem xs={6} sm={6} md={6}>
                <h4 className={classes.cardTitle}>Price</h4>
                <p className={classes.cardCategory}>{productDetails.price}</p>
              </GridItem>
              <GridItem xs={6} sm={6} md={6}>
                <h4 className={classes.cardTitle}>Discount</h4>
                <p className={classes.cardCategory}>{productDetails.discount}</p>
              </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
