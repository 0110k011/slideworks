import React, { useState } from 'react';
import Image from 'next/image'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';

const imgLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 75}`
}

const NavBar = () => {
  const classes = useStyles();
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Grid container>
        <Grid
          container
          item
          xs={12} sm={1}
          justifyContent="center"
        >
          <Image
            loader={imgLoader}
            src="Logo.svg"
            alt="Bibbble"
            width={130}
            height={50}
          />
        </Grid>
        <Grid item xs={11}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab className={classes.tabs} label="Home" />
            <Tab className={classes.tabs} label="About" />
            <Tab className={classes.tabs} label="Features" />
            <Tab className={classes.tabs} label="Pricing" />
            <Tab className={classes.tabs} label="Gallery" />
            <Tab className={classes.tabs} label="Team" />
            <Tab className={classes.tabs} icon={<SearchIcon fontSize="small" />} />
          </Tabs>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default NavBar;