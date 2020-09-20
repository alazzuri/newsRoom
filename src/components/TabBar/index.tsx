//REACT
import React, { useState } from "react";

//MATERIAL UI
import { AppBar, Tab, Tabs } from "@material-ui/core";

//STYLES
import { useStyles } from "./styles";

//ROUTER
import { useHistory } from "react-router-dom";

//UTILS
import { newsCategories } from "../../utils/constants";
import { keyGenerator } from "../../utils/keyGenerator";

//TYPESCRIPT
interface NavRoute {
  name: string;
  path: string;
}

const tabProps = (index: any) => {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
};

const MobileTabBar = () => {
  const styles = useStyles();
  const [value, setValue] = useState(0);
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const redirect = (path: string) => () => history.push(path);

  const renderTabRoutes = (routes: Array<NavRoute>) => {
    return (
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        variant="scrollable"
        scrollButtons="on"
        classes={{ indicator: styles.indicator }}
      >
        <Tab label="Home" {...tabProps(0)} onClick={redirect("/")} />
        {routes.map((category, index) => (
          <Tab
            key={keyGenerator()}
            label={`${category.name}`}
            {...tabProps(index + 1)}
            onClick={redirect(`/category/${category.path}`)}
          />
        ))}
      </Tabs>
    );
  };

  return (
    <div className={styles.tabBarContainer}>
      <AppBar
        position="static"
        color="inherit"
        classes={{ root: styles.tabBar }}
      >
        {renderTabRoutes(newsCategories)}
      </AppBar>
    </div>
  );
};

export default MobileTabBar;
