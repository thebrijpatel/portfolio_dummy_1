import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Avatar, Grid, Box} from "@material-ui/core";
import Typed from 'react-typed';

import avatar from '../avatar_bg.png';

const useStyles = makeStyles(theme => ({
	avatar: {
		width: theme.spacing(15),
		height: theme.spacing(15),
		margin: theme.spacing(1)
	},
	title: {
		color: "tomato"
	},
	subtitle: {
		color: "tan",
		marginBottom: "3rem"
	},
	typedContainer: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: "100vw",
		textAlign: "center",
		zIndex: 1
	}
}));

const Header = () => {
	const classes = useStyles();
	return (
		<Box className={classes.typedContainer}>
			<Grid container justify="center">
				<Avatar className={classes.avatar} src={avatar} alt="Brijesh" />
			</Grid>
			<Typography className={classes.title} variant="h4">
				<Typed strings={["Brijesh Patel"]} typeSpeed={40} />
			</Typography>
			<Typography className={classes.subtitle} variant="h4">
				<Typed strings={["Web Design", "Web Development", "Python Developer"]} typeSpeed={40} backSpeed={60} loop />
			</Typography>
			<br />
		</Box>
	)
}

export default Header;
