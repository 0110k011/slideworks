import React from 'react';
import Image from 'next/image'
import { Grid, Box, Divider, Link } from '@material-ui/core';
import useStyles from './styles';

const imgLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 75}`
}

const FooterBar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container>
        <Grid
          className={classes.img}
          container
          item
          xs={12}
          justifyContent="flex-start"
          alignItems="center"
        >
          <Image
            loader={imgLoader}
            src="Group.svg"
            alt="Libslide"
            width={130}
            height={50}
          />
        </Grid>
      </Grid>
      <Divider component="div" className={classes.divider} />
      <Grid
        container
      >
        <Grid
          className={classes.footerLeft}
          container
          item
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={4}
          xs={6}
        >
          <Grid item>
            <Link href="http:\\wwwgoogle.com/" className={classes.whiteColor} >
              Terms & Conditionss
            </Link>
          </Grid>
          <Grid item>
            <Link href="http:\\wwwgoogle.com/" className={classes.whiteColor} >
              Privacy Polic
            </Link>
          </Grid>
        </Grid>
        <Grid
          className={classes.footerRight}
          container
          item
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={4}
          xs={6}
        >
          <Grid item >
            <Link href="http:\\wwwgoogle.com/">
              <Image
                loader={imgLoader}
                src="facebook.svg"
                alt="Facebook"
                width={20}
                height={20}
              />
            </Link>
          </Grid>
          <Grid item >
            <Link href="http:\\wwwgoogle.com/">
              <Image
                loader={imgLoader}
                src="twitter.svg"
                alt="Twitter"
                width={20}
                height={20}
              />
            </Link>
          </Grid>
          <Grid item >
            <Link href="http:\\wwwgoogle.com/">
              <Image
                loader={imgLoader}
                src="instagram.svg"
                alt="Instagram"
                width={20}
                height={20}
              />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Box >
  );
}

export default FooterBar;