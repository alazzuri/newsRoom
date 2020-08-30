//REACT
import React from "react";

//MATERIAL UI
import { AppBar } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

//STYLES
import { useStyles } from "./styles";

const tabProps = (index: any) => {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
};

const MobileTabBar = () => {
  const styles = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={styles.tabBarContainer}>
      <AppBar
        position="static"
        color="inherit"
        classes={{ root: styles.tabBar }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="scrollable"
          scrollButtons="on"
          classes={{ indicator: styles.indicator }}
        >
          <Tab label="Item One" {...tabProps(0)} />
          <Tab label="Item Two" {...tabProps(1)} />
          <Tab label="Item Three" {...tabProps(2)} />
          <Tab label="Item Four" {...tabProps(3)} />
          <Tab label="Item Five" {...tabProps(4)} />
          <Tab label="Item Six" {...tabProps(5)} />
          <Tab label="Item Seven" {...tabProps(6)} />
        </Tabs>
      </AppBar>
    </div>
  );
};

export default MobileTabBar;
