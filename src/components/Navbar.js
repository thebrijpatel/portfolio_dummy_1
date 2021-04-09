import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {AppBar, Toolbar, ListItem, IconButton, ListItemText, Divider, Avatar, List, Typography, Box, ListItemIcon} from '@material-ui/core';
import MobilRightMenuSlider from '@material-ui/core/Drawer'
import {MenuOpen, AssignmentInd, Home, Apps, ContactMail} from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles';

import avatar from '../avatar_bg.png';

// CSS Styles
const useStyles = makeStyles( theme => ({
	menuSliderContainer: {
		width: 250,
		background: "#511",
		height: "100%"
	},
	avatar: {
		display: "block",
		margin: "0.5rem auto",
		width: theme.spacing(13),
		height: theme.spacing(13)
	},
	listItem: {
		color: "tan"
	}
}));

const menuItems = [
	{
		listIcon: <Home />,
		listText: "Home",
		listPath: "/"
	},
	{
		listIcon: <AssignmentInd />,
		listText: "Resume",
		listPath: "/resume"
	},
	{
		listIcon: <Apps />,
		listText: "Portfolio",
	},
	{
		listIcon: <ContactMail />,
		listText: "Contacts",
	}
];

const Navbar = () => {

	const [sideBarState, setSideBarState] = useState(false);

	const classes = useStyles();


	const toggleSlider = (val) => () => {
		setSideBarState(val);
	} // WTF is this!!

	const sideList = () => (
		<Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider(false)}>
			<Avatar className={classes.avatar} src={avatar} alt = "Brijesh Patel" />
			<Divider />
			<List>
				{menuItems.map((lsItem, key) => (
					<ListItem button key={key} component={Link} to={lsItem.listPath}>
						<ListItemIcon className={classes.listItem}>
							{lsItem.listIcon}
						</ListItemIcon>
						<ListItemText className={classes.listItem} primary={lsItem.listText}/>
					</ListItem>
				))}
				
			</List>
		</Box>
	);

	return (
		<React.Fragment>

			<Box component="nav">
				<AppBar position="static" style={{background: '#222'}}>
					<Toolbar>
						<IconButton onClick={toggleSlider(true)}>
							<MenuOpen style={{color: 'tomato'}}/>
						</IconButton>
						<Typography
								variant="h5"
								style={{color: 'tan'}}>
								Portfolio
						</Typography>
						<MobilRightMenuSlider
							anchor="left"
							open={sideBarState}
							onClose={toggleSlider(false)}
						>
							{sideList()}
						</MobilRightMenuSlider>
					</Toolbar>
				</AppBar>
			</Box>
		</React.Fragment>
	)	
}

export default Navbar;
