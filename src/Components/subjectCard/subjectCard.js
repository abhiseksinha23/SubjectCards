import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './subjectCard.css'
const useStyles = makeStyles({
  root: {
    margin: 10,
    maxWidth: 345,
  },
});

export default function Subjectcard({img, name, link1, link2, link3}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <CardActionArea>
      <CardMedia
        component="img"
        alt={name}
        height="200"
        image={img}
        title={name}
      />
        <CardContent>
        <p><b style={{fontSize:26}}>{name}</b></p>
          <Button  style={{margin:5}} href={link2} variant="contained" size="medium" color="secondary">
          Practice
          </Button>
            <Button style={{margin:5}} href={link1} variant="contained" size="medium" color="primary">
            Test
            </Button>
              <Button style={{margin:5}} href={link1} variant="contained" size="medium" color="default">
              Topics
              </Button>
                </CardContent>

      </CardActionArea>

    </Card>
  );
}
