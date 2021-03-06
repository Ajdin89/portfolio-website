import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import {
	Box,
	Typography,
	Button,
	Grid,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
} from '@material-ui/core';
import landing from '../images/projects/landing-page.gif';
import photo from '../images/projects/photo-app.gif';
import movie from '../images/projects/movie-app.gif';
import Navbar from './Navbar';

/* CUSTOM CSS STYLING */
const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		background: '#263238',
	},
	box: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -41.3%)',
		textAlign: 'center',
		width: '100vw',
		height: '100%',
		overflow: 'auto',
	},
	heading: {
		color: 'tomato',
		textAlign: 'center',
		fontSize: '2.5rem',
		fontFamily: 'Play',
		padding: '1.4rem 1rem 0.5rem',
	},
	cardMedia: {
		opacity: '0.9',
		textAlign: 'justify',
	},
	cardHeader: {
		fontFamily: 'Cairo',
		color: 'tomato',
	},
	cardText: {
		color: 'tan',
		fontFamily: 'Play',
	},
});

const Projects = () => {
	const classes = useStyles();
	return (
		<>
			<Navbar />
			<Box component='div' className={classes.box}>
				<Typography className={classes.heading}>
					Highlighted Projects
				</Typography>
				<Grid
					container
					spacing={3}
					align='center'
					style={{ padding: '1.5rem' }}
				>
					<Grid item xs={12} md={4}>
						<Card className={classes.root}>
							<CardActionArea>
								<CardMedia
									component='img'
									alt='architect webpage'
									height='160'
									image={landing}
									title='Landing page'
									href='https://architect-web.netlify.app/'
									target='_blank'
									className={classes.cardMedia}
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant='h5'
										component='h2'
										className={classes.cardHeader}
									>
										Landing Page
									</Typography>
									<Typography
										component='p'
										variant='body2'
										className={classes.cardText}
									>
										Simple and beautiful one-page website created using HTML5
										for markup and CSS3 for styling with Sass preprocessor.
										Functionality and logic are written in Vanilla JavaScript,
										without any framework just using JavaScript DOM
										manipulations.
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions style={{ justifyContent: 'center' }}>
								<Button
									variant='contained'
									size='small'
									startIcon={<GitHubIcon />}
									href='https://github.com/Ajdin89/architect-website'
									target='_blank'
								>
									Source code
								</Button>
								<Button
									variant='contained'
									color='secondary'
									size='small'
									href='https://architect-web.netlify.app/'
									target='_blank'
								>
									Live Preview
								</Button>
							</CardActions>
						</Card>
					</Grid>

					<Grid item xs={12} md={4}>
						<Card className={classes.root}>
							<CardActionArea>
								<CardMedia
									component='img'
									alt='Unsplash images'
									height='160'
									image={photo}
									title='Unsplash Images'
									className={classes.cardMedia}
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant='h5'
										component='h2'
										className={classes.cardHeader}
									>
										Photo Search App
									</Typography>
									<Typography
										component='p'
										variant='body2'
										className={classes.cardText}
									>
										Web application created using React. For fetching data is
										used Unsplash API key. Content is divided in two main
										sections. At the top is a search bar input field. In the
										center you can see pics in grid layout based on terminology
										you searched about it.
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions style={{ justifyContent: 'center' }}>
								<Button
									variant='contained'
									size='small'
									startIcon={<GitHubIcon />}
									href='https://github.com/Ajdin89/PhotoSearchApp'
									target='_blank'
								>
									Source code
								</Button>
								<Button
									variant='contained'
									color='secondary'
									size='small'
									href='https://app-unsplashimages.netlify.app/'
									target='_blank'
								>
									Live Preview
								</Button>
							</CardActions>
						</Card>
					</Grid>

					<Grid item xs={12} md={4}>
						<Card className={classes.root}>
							<CardActionArea>
								<CardMedia
									component='img'
									alt='YouTube clone'
									height='160'
									image={movie}
									title='YouTube clone'
									className={classes.cardMedia}
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant='h5'
										component='h2'
										className={classes.cardHeader}
									>
										Movie App
									</Typography>
									<Typography
										component='p'
										variant='body2'
										className={classes.cardText}
									>
										Web app created using React/Typescript, ReactHooks, Router,
										and ContextAPI for state consumption. Search is based on
										the term. The search is performed only when there are 3 or
										more characters in the search bar. For fetching data is used
										TheMovieDB API.
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions style={{ justifyContent: 'center' }}>
								<Button
									variant='contained'
									size='small'
									startIcon={<GitHubIcon />}
									href='https://github.com/Ajdin89/ReactMovieApp'
									target='_blank'
								>
									Source code
								</Button>
								<Button
									variant='contained'
									color='secondary'
									size='small'
									href='https://myreact-movie-app.netlify.app/'
									target='_blank'
								>
									Live Preview
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default Projects;
