import React from "react";
import BusinessIcon from "@material-ui/icons/Business";
import CategoryIcon from "@material-ui/icons/Category";
import IconButton from "@material-ui/core/IconButton";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import theme from "../../../../theme";

const Sidebar = (props: any) => {
  const classes = useStyles(theme);
  const sidebarConfig = [
    {
      urlPath: "/admin/manage/businesses",
      icon: <BusinessIcon />,
      title: "Businesses"
    },
    {
      urlPath: "/admin/manage/categories",
      icon: <CategoryIcon />,
      title: "Categories"
    }
  ];

  return (
    <div className={classes.sidebarContainer}>
      <div className={classes.sidebarItems}>
        <div
          style={{
            width: "100%"
          }}
        >
          {sidebarConfig.map((navigation: any, i) => {
            const { title, urlPath, icon } = navigation;
            return (
              <Link to={urlPath} className={classes.link} key={i.toString()}>
                <Button className={classes.sidebarNav} startIcon={icon}>
                  {title}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
