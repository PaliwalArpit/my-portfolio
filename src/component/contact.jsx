import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
	  minWidth: 300,
	  textAlign:"center",
	  fontWeight:"bold"
	},
	bullet: {
	  display: 'inline-block',
	  margin: '0 2px',
	  transform: 'scale(1)',
	},
	title: {
	  fontSize: 20,
	},
	pos: {
	  marginBottom: 20,
	},
  });
			
export default function SimpleCard() {
  const classes = useStyles();

  return (
	<Card className={classes.root}>
	<CardContent>
	  <Typography
		className={classes.title}
		color="textSecondary"
		gutterBottom
	  ></Typography>
	  <Typography variant="h5" component="h2">
		Contact Details:
	  </Typography>
	  <Typography variant="body2" component="p">
		<br />
		{"Contact number : +091 9890764723"}
		<br />
		{"Email id : arpitpaliwal14@gmail.com"}
	  </Typography>
	</CardContent>
  </Card>
  );
}