import React, { useEffect, useState } from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
import GetData from "../../pages/api/getData";
import ListCards from '../ListCards';
import useStyles from './styles';

const GetApiData = () => {
  const classes = useStyles();
  const [apiData, setApiData] = useState();
  useEffect(() => {
    GetData((data) => setApiData(data), 'https://fakerapi.it/api/v1/books');
  }, []);
  return (
    <React.Fragment>
      {apiData ? (
        <>
          <div className={classes.root}>
            <Grid container spacing={2}>
              {apiData.map((data) => (
                <ListCards key={data.id} data={data} />
              ))}
            </Grid>
          </div >
        </>)
        : <div className={classes.loading}>
          <CircularProgress />
        </div>}
    </React.Fragment >
  )
}

export default GetApiData;