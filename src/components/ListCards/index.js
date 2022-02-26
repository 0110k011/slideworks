import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, Grid } from '@material-ui/core';
import useStyles from './styles';

const ListCards = (props) => {
  const classes = useStyles();
  const { data: { id, author, description, genre, image, published, title } } = props;
  console.log(image)
  return (
    <Grid item xs={12} sm={6} md={4} lg={2}>
      <Card className={classes.root}>
        <CardActionArea>
          <Container fixed className={classes.imgContainer}>
            <CardMedia
              className={classes.media}
              image={image + `` + id}
              title={title}
            />
          </Container>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography gutterBottom variant="body1" color="textSecondary">
              {author}
            </Typography>
            <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Grid
            container
            item
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button size="small" color="primary" variant="outlined">
              {genre}
            </Button>
            <Button size="small" color="primary">
              {published}
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default ListCards;