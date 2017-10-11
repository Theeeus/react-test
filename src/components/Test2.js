import React, { Component, PropTypes } from "react";

import Image from "./Image";

class Test2 extends Component {
	static propTypes = {};

	constructor(props) {
		super(props);
		this.state = {
			fetched: null
		};
	}

	componentDidMount() {
		fetch(
			"https://maps.googleapis.com/maps/api/geocode/json?address=Oxford%20University,%20uk&sensor=false",
			{
				method: "GET"
			}
		)
		.then(response => response.json())
		.then((json) => {
			var fetched = json.results.map((result) => {
				return result.formatted_address;
			});
			this.setState({
				fetched: fetched
			})
		});
	}

	render() {
		const style = {
			border: "1px solid black",
			padding: "10px"
		};
		return (
			<div>
				<div style={style}>This is another Test </div>
				<div>{this.state.fetched}</div>
			</div>
		);
	}
}

export default Test2;
