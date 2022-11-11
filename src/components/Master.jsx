import React, { Component } from "react";
import '@styles/index.scss'
import Header from "@/components/Header/Header.jsx";
import Hero from "@/components/Hero/Hero.jsx";
import Marquee from "@/components/Marquee/Marquee.jsx";
import Effects from "@/components/Effects/Effects.jsx";
import Factory_Video from "@/components/Factory_Video/Factory_Video.jsx";


export default class Master extends React.PureComponent {
	render() {
		return (
			<div className="container" >
				<Header />
				<Hero />
				<Marquee />
				<Effects />
				<Factory_Video />
			</div>
		);
	}
}

