import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Tooltip
} from "@material-ui/core";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

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
    },
    bizCardContainer: {
      "&:hover": {
        cursor: "pointer",
        boxShadow: "0px 3px 6px #ccc",
        marginTop: "-0.3em"
      }
    }
  })
);

const BusinessCard = (props: any) => {
  const classes = useStyles();
  const [isOpenedDelete, setDeleteModal] = React.useState<boolean>(false);

  const { name, phone, website, logo, onEditRoute, onViewRoute, mode } = props;
  const onEdit = () => onEditRoute(name);
  const onView = () => onViewRoute(name);
  const onOpenDelete = () => {
    setDeleteModal(true);
  };
  const onCloseDeleteModal = () => {
    setDeleteModal(false);
  };

  const deleteAction = (
    <Dialog
      open={isOpenedDelete}
      onClose={onCloseDeleteModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Are You Sure You Want to Delete this Business Directory ?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Typography variant="h6"> Business Name - {name}</Typography>
          <Typography variant="body1">
            If you choose to delete it, you can't retrieve it again.
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCloseDeleteModal} color="primary">
          No
        </Button>
        <Button
          onClick={() => {}}
          color="primary"
          autoFocus
          style={{ color: "#fff", backgroundColor: "#ed2618" }}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <React.Fragment>
      {deleteAction}
      <div
        style={{
          width: "31.3%",
          marginRight: "1.5em",
          marginBottom: "1.5em",
          float: "left",
          position: "relative"
        }}
      >
        {" "}
        <div
          style={{
            position: "absolute",
            background: "transparent",
            height: "100%",
            width: "100%",
            cursor: "pointer"
          }}
          onClick={onView}
        ></div>
        <Card className={[classes.card, classes.bizCardContainer].join(" ")}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography
                component="h5"
                variant="h5"
                style={{
                  fontSize: "1rem",
                  textTransform: "capitalize",
                  fontWeight: "bold"
                }}
              >
                {name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {website}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {phone}
              </Typography>
            </CardContent>
            {mode === "manage" && (
              <div className={classes.controls}>
                <Tooltip title="Edit" onClick={onEdit}>
                  <IconButton aria-label="edit">
                    <EditIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Delete" onClick={onOpenDelete}>
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </div>
            )}
          </div>
          <CardMedia
            className={classes.cover}
            image={logo}
            title={name}
            style={{
              width: "100%",
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          />
        </Card>
      </div>
    </React.Fragment>
  );
};

export default BusinessCard;
