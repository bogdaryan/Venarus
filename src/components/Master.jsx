import React, { Component } from "react";
import '@styles/index.scss'
import Header from "@/components/Header/Header.jsx";
import Hero from "@/components/Hero/Hero.jsx";
import Ticker from "@/components/Ticker/Ticker.jsx";


export default class Master extends React.PureComponent {
	render() {
		return (
			<div className="container" >
				<Header />
				<Hero />
				<Ticker />
			</div>
		);
	}
}

