import React from "react";
import {
  Card,
  TextField,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Tooltip
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import {
  Theme,
  createStyles,
  makeStyles,
  useTheme
} from "@material-ui/core/styles";

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      display: "flex"
    },
    details: {
      display: "flex",
      flexDirection: "column"
    },
    content: {
      flex: "1 0 auto"
    },
    cover: {
      width: 120
    },
    controls: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },
    playIcon: {
      height: 38,
      width: 38
    }
  })
);

export default function ListBusinesses({  }: Props): any {
  const classes = useStyles();
  const theme = useTheme();
  const businesses = [
    {
      name: "Sellvy",
      website: "www.sellvy.com",
      phone: "08097373733737",
      logo: "https://sellvy.com/static/08fdc2f97f4e54f2f0757654936073f1.svg"
    },
    {
      name: "Sellvy",
      website: "www.sellvy.com",
      phone: "08097373733737",
      logo: "https://sellvy.com/static/08fdc2f97f4e54f2f0757654936073f1.svg"
    },
    {
      name: "Sellvy",
      website: "www.sellvy.com",
      phone: "08097373733737",
      logo: "https://sellvy.com/static/08fdc2f97f4e54f2f0757654936073f1.svg"
    },
    {
      name: "Sellvy",
      website: "www.sellvy.com",
      phone: "08097373733737",
      logo: "https://sellvy.com/static/08fdc2f97f4e54f2f0757654936073f1.svg"
    }
  ];
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "inherit",
        padding: "0 4% 0 4%",
        flexDirection: "column"
      }}
    >
      <Filters />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          marginTop: "2em",
          height: "60vh"
        }}
      >
        {businesses.map((item: any) => (
          <BusinessCard {...item} />
        ))}
      </div>
    </div>
  );
}

const Filters = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "6em"
      }}
    >
      <TextField
        name="filter"
        label="Filter"
        margin="normal"
        variant="outlined"
        style={{ width: "33.33%", marginRight: "2%" }}
      />
      <TextField
        name="search"
        label="Search"
        margin="normal"
        variant="outlined"
        style={{ width: "33.33%" }}
      />
    </div>
  );
};

const BusinessCard = (props: any) => {
  const classes = useStyles();
  const theme = useTheme();
  const { name, phone, website, logo } = props;
  return (
    <div
      style={{
        width: "31.3%",
        marginRight: "1.5em",
        marginBottom: "3em",
        float: "left"
      }}
    >
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {website}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {phone}
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <Tooltip title="Edit">
              <IconButton aria-label="edit">
                <EditIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Delete">
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <CardMedia
          className={classes.cover}
          image={logo}
          title={name}
          style={{
            width: "100%",
            backgroundPosition: "center",
            backgroundSize: "contain"
          }}
        />
      </Card>
    </div>
  );
};
