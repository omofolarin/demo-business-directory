import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1)
    },
    input: {
      display: "none"
    },
    container: {
      display: "flex",
      flexDirection: "row",
      height: "100vh",
      overflow: "hidden"
    },
    sidebarContainer: {
      display: "flex",
      flexDirection: "row",
      width: "12%",
      backgroundColor: "#322480",
      height: "100vh"
    },
    sidebarItems: {
      display: "flex",
      width: "100%",
      flexDirection: "column",
      height: "30vh",
      justifyContent: "center"
    },
    sidebarNav: {
      color: "#fff",
      textTransform: "capitalize",
      width: "100%"
    },
    main: {
      display: "flex",
      flexDirection: "row",
      width: "88%",
      backgroundColor: "#fff",
      height: "100vh",
      overflowY: "auto"
    },
    topBarContainer: {
      width: "100%",
      backgroundColor: "#F5F5F5",
      height: "5em",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    link: {
      "&:active": {
        textDecoration: "none"
      }
    }
  })
);

export default useStyles;
