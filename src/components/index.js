import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/styles';

// CSS STYLES
const useStyles = makeStyles({
	particlesCanva: {
		position: 'absolute',
	},
});

const Home = () => {
	const classes = useStyles();
	return (
		<>
			<Navbar />
			<Header />
			<Particles
				canvasClassName={classes.particlesCanva}
				params={{
					particles: {
						number: {
							value: 45,
							density: {
								enable: true,
								value_area: 900,
							},
						},
					},
				}}
			/>
		</>
	);
};

export default Home;
