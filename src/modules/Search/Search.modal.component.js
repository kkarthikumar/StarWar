/* eslint-disable react/prop-types */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import get from "lodash/get";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { withStyles } from "@material-ui/core";
import styles from "./Search.modal.component.style";
import { compose } from "redux";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const SearchModal = props => {
  const { classes, closeHandler, value } = props;
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    closeHandler();
  };

  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <div className={classes.paper}>
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {get(value, "name")}
                </Typography>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant="caption">
                      Rotation Period : {get(value, "rotation_period")}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="caption">
                      Diameter : {get(value, "diameter")}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="caption">
                      Climate : {get(value, "climate")}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="caption">
                      Gravity : {get(value, "gravity")}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="caption">
                      Surface Water : {get(value, "surface_water")}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="caption">
                      Population : {get(value, "population", 0)}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </Modal>
    </div>
  );
};

export default compose(withStyles(styles))(SearchModal);
