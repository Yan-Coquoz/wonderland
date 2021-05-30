import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import "./style.scss";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: "inline-block",
    margin: "1rem",
  },
  media: {
    height: "100%",
    maxHeight: "100%",
  },
});

const ACard = ({
  flag,
  translations,
  name,
  population,
  region,
  capital,
  country,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} onClick={() => country(name)}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={flag}
          title={`Drapeau du pays de ${translations.fr}`}
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {translations.fr}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            Population :{" "}
            <Typography variant="body2" color="textSecondary" component="span">
              {population}
            </Typography>
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            Region :{" "}
            <Typography variant="body2" color="textSecondary" component="span">
              {region}
            </Typography>
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            Capital :{" "}
            <Typography variant="body2" color="textSecondary" component="span">
              {capital}
            </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ACard;
