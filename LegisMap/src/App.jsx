import React, { useState } from "react";
import { Row, Container, Col } from "react-bootstrap";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function RingContainer({ happiness, sadness, anxious }) {
	const red = 255 - happiness * 1.5;
	const blue = 255 - sadness * 1.5;
	const green = 255 - anxious * 1.5;

	console.log(red, blue);

	return (
		<div
			className="ring-container"
			style={{
				borderColor: `rgb(${red}, ${green}, ${blue})`,
				borderStyle: "solid",
				borderWidth: "15px",
				borderRadius: "50%",
				textAlign: "center",
			}}
		>
			Ring Container
		</div>
	);
}

function MoodRingApp() {
	const [happySliderValue, setHappySliderValue] = useState(50);
	const [sadSliderValue, setSadSliderValue] = useState(50);
	const [anxiousSliderValue, setAnxiousSliderValue] = useState(50);

	const handleHappySliderChange = (value) => {
		setHappySliderValue(value);
	};

	const handleSadSliderChange = (value) => {
		setSadSliderValue(value);
	};

	const handleAnxiousSliderChange = (value) => {
		setAnxiousSliderValue(value);
	};

	const happiness = happySliderValue;
	const sadness = sadSliderValue;
	const anxious = anxiousSliderValue;
	return (
		<Container
			fluid
			className=""
			style={{
				minHeight: "100vh",
				minWidth: "100vw",
				backgroundColor: "lightblue",
				border: "10px solid black",
			}}
		>
			<Row className="justify-content-center align-items-center p-4">
				<Col className="col-12 p-4">
					<h1 className="text-center p-4">Mood Ring</h1>
					
				</Col>
				<Col className="col-12 p-4">
					<h2>Happiness: {happiness}%</h2>
					<Slider
						className="happiness-slider"
						defaultValue={50}
						min={0}
						max={100}
						value={happySliderValue}
						onChange={handleHappySliderChange}
					/>
				</Col>
				<Col className="col-12 p-4">
					<h3>Sadness: {sadness}%</h3>

					<Slider
						className="sadness-slider"
						defaultValue={50}
						min={0}
						max={100}
						value={sadSliderValue}
						onChange={handleSadSliderChange}
					/>
				</Col>

				<Col className="col-12 p-4">
					<h3>Anxious: {anxious}%</h3>

					<Slider
						className="anxious-slider"
						defaultValue={50}
						min={0}
						max={100}
						value={anxiousSliderValue}
						onChange={handleAnxiousSliderChange}
					/>
				</Col>

				<Col className="col-12 p-4 mt-4 d-flex justify-content-center align-items-center">
					<RingContainer happiness={happiness} sadness={sadness} anxious={anxious} />
				</Col>
			</Row>
		</Container>
	);
}

export default MoodRingApp;
