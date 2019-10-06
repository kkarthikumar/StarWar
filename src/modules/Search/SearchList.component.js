import React, { memo, useState } from "react";
import get from "lodash/get";

import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SearchModal from "./Search.modal.component";

const SearchListComponent = props => {
  const { planets } = props;
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState(false);

  const handleClose = () => {
    setOpenPopup(false);
  };

  const ViewDetails = value => {
    console.log(value);
    setSelectedPlanet(value);
    setOpenPopup(true);
  };

  return (
    <>
      {planets.map((value, idx) => {
        return (
          <Box key={`planets-${idx}`} mb={2} mt={2}>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant={get(value, "population", 0) > 100000 ? "h3" : "h5"}
                    component="h2"
                  >
                    {get(value, "name")}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => {
                    ViewDetails(value);
                  }}
                >
                  ViewDetails
                </Button>
              </CardActions>
            </Card>
          </Box>
        );
      })}
      {openPopup && (
        <SearchModal
          value={selectedPlanet}
          closeHandler={handleClose}
        ></SearchModal>
      )}
    </>
  );
};

export default memo(SearchListComponent);
