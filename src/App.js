import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Lifecycles from "./lifecycles.component";

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			showChild: true,
			text: "",
			message: ""
		};
	}

	render() {
		/* this.forceUpdate() */  // A bad practice we need to avoid
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<button
						onClick={() => this.setState((state) => ( // fire off our function that calls setState() where we set the show child
							{
								// What bang operator does is it evaluates any boolean to the opposite value that it is.
								showChild: !state.showChild, //set showChild property to the opposite value of what it was
							}
						))  
						}
					>
						{/* {this.state.text} */}
						Toggle Lifecycles
					</button>
					<button
						onClick={() =>
							this.setState(
								(state) => (
									{
										text: state.text + "_hello",
									}
								)
							)
						}
					>
						Update Text
					</button>
					{this.state.showChild ? <Lifecycles text={this.state.text} /> : null} {/* text is a property in (JS obj or state)*/}
					{/*Ternary operator to determine whether or not to show or hide our life cycle components*/}
				</header>
			</div>
		);
	}
}

export default App;
