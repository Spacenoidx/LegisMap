import React, { useState } from "react";
import { Row, Container, Col, Form, Button, ListGroup } from "react-bootstrap";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import getSearch from "./scanner";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const BillList = ({ ListItem, displayedState }) => {
	return (
		<div>
			<ListGroup>
				{ListItem.map((bill, index) => (
					<ListGroup.Item key={index}>{bill.title}</ListGroup.Item>
				))}
			</ListGroup>
		</div>
	);
};

function Legismap() {
	const [selectedState, setSelectedState] = useState(null);
	const [selectedStateCode, setSelectedStateCode] = useState(null);
	const [bills, setBills] = useState([]);
	const [displayedState, setDisplayedState] = useState(null);

	const handleStateChange = (event) => {
		setSelectedState(event.target.value);
		setSelectedStateCode(event.target.value);
	};

	const searchData = getSearch(selectedStateCode);

	const states = [
		{ name: "Alabama", code: "AL" },
		{ name: "Alaska", code: "AK" },
		{ name: "Arizona", code: "AZ" },
		{ name: "Arkansas", code: "AR" },
		{ name: "California", code: "CA" },
		{ name: "Colorado", code: "CO" },
		{ name: "Connecticut", code: "CT" },
		{ name: "Delaware", code: "DE" },
		{ name: "Florida", code: "FL" },
		{ name: "Georgia", code: "GA" },
		{ name: "Hawaii", code: "HI" },
		{ name: "Idaho", code: "ID" },
		{ name: "Illinois", code: "IL" },
		{ name: "Indiana", code: "IN" },
		{ name: "Iowa", code: "IA" },
		{ name: "Kansas", code: "KS" },
		{ name: "Kentucky", code: "KY" },
		{ name: "Louisiana", code: "LA" },
		{ name: "Maine", code: "ME" },
		{ name: "Maryland", code: "MD" },
		{ name: "Massachusetts", code: "MA" },
		{ name: "Michigan", code: "MI" },
		{ name: "Minnesota", code: "MN" },
		{ name: "Mississippi", code: "MS" },
		{ name: "Missouri", code: "MO" },
		{ name: "Montana", code: "MT" },
		{ name: "Nebraska", code: "NE" },
		{ name: "Nevada", code: "NV" },
		{ name: "New Hampshire", code: "NH" },
		{ name: "New Jersey", code: "NJ" },
		{ name: "New Mexico", code: "NM" },
		{ name: "New York", code: "NY" },
		{ name: "North Carolina", code: "NC" },
		{ name: "North Dakota", code: "ND" },
		{ name: "Ohio", code: "OH" },
		{ name: "Oklahoma", code: "OK" },
		{ name: "Oregon", code: "OR" },
		{ name: "Pennsylvania", code: "PA" },
		{ name: "Rhode Island", code: "RI" },
		{ name: "South Carolina", code: "SC" },
		{ name: "South Dakota", code: "SD" },
		{ name: "Tennessee", code: "TN" },
		{ name: "Texas", code: "TX" },
		{ name: "Utah", code: "UT" },
		{ name: "Vermont", code: "VT" },
		{ name: "Virginia", code: "VA" },
		{ name: "Washington", code: "WA" },
		{ name: "West Virginia", code: "WV" },
		{ name: "Wisconsin", code: "WI" },
		{ name: "Wyoming", code: "WY" },
	];

	return (
		<Container
			fluid
			className=""
			style={{
				minWidth: "100vw",
				backgroundColor: "hsl(0, 100%, 64%)",
				border: "10px solid black",
			}}
		>
			<Row className="justify-content-center align-items-center mb-5 flex-grow-0">
				<Col xs={12} md={8} lg={6}>
					<h1 className="text-center">
						Legislation Search Term Heat Map
					</h1>
				</Col>
			</Row>
			<Row className="justify-content-center align-items-center mb-5">
				<Col
					xs={12}
					md={8}
					lg={4}
					className="d-flex align-items-center justify-content-center"
				>
					<Form.Select
						value={selectedStateCode}
						onChange={(e) => {
							setSelectedState(
								e.target.options[e.target.selectedIndex].text
							);
							setSelectedStateCode(e.target.value);
						}}
					>
						{states.map((state) => (
							<option key={state.code} value={state.code}>
								{state.name}
							</option>
						))}
					</Form.Select>
				</Col>

				<Col
					xs={12}
					md={8}
					lg={6}
					className="d-flex align-items-center justify-content-center"
				>
					<Form.Control type="text" placeholder="Search a term" />
				</Col>

				<Col
					lg={2}
					className="d-flex align-items-center justify-content-center"
				>
					{" "}
					<Button
						onClick={async () => {
							const bills = await getSearch(selectedStateCode);
							setBills(bills);
							console.log("Here are the bills:");
							bills.forEach((bill) => console.log(bill));
							setDisplayedState(selectedState); // Set displayedState(selectedState);
						}}
					>
						Get Data
					</Button>
				</Col>
			</Row>
			<Row className="justify-content-center mb-5">
				<Col xs={12} md={6} lg={6}>
					<div className="map-container">
						<svg viewBox="0 0 960 600" width="100%">
							<g>
								<path
									d="M0,0 L0,600 L960,600 L960,0 Z"
									fill="lightblue"
								/>
							</g>

							<ComposableMap projection="geoAlbersUsa">
								<Geographies geography={geoUrl}>
									{({ geographies }) =>
										geographies.map((geo) => {
											const stateName =
												geo.properties.name;
											return (
												<Geography
													key={geo.rsmKey}
													geography={geo}
													stroke="#FFF"
													strokeWidth={0.5}
													style={{
														default: {
															outline: "none",
														},
														hover: {
															fill: "red",
															outline: "none",
															cursor: "pointer",
														},
													}}
													onMouseEnter={() => {
														setSelectedState(
															stateName
														);
														setSelectedStateCode(
															states.filter(
																(state) =>
																	state.name ===
																	stateName
															)[0].code
														);
													}}
													// onMouseLeave={() => {
													// 	setSelectedState(null);
													// }}
												/>
											);
										})
									}
								</Geographies>
							</ComposableMap>
						</svg>
					</div>
				</Col>
				<Col
					xs={12}
					md={8}
					lg={4}
					className="scrollable-column d-flex flex-column"
				>
					<h3>Bill List from {displayedState}</h3>
					<div style={{ height: "600px", overflowY: "auto" }}>
						{bills && bills.length > 0 && (
							<BillList
								displayedState={displayedState}
								ListItem={bills}
							/>
						)}
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default Legismap;
