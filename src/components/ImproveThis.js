import React, { Component, PropTypes } from "react";

import Image from "./Image";
import { Menu, MenuItem, MenuDivider } from "@blueprintjs/core";

class ImproveThis extends Component {
	static propTypes = {};

	constructor(props) {
		super(props);
		this.state = {
			fullname: ''
		};
	}
	
	componentDidMount() {}

	componentWillReceiveProps(nextProps) {
		if (nextProps.first_name && nextProps.last_name) {
			this.setState({
				fullname: nextProps.first_name + ' ' + nextProps.last_name
			});
		}
	}

	render() {
		return (
			<span>{ this.state.fullname }</span>
		);
	}
}

export default ImproveThis;
