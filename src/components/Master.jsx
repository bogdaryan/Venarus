import React, { Component } from "react";
import '@styles/index.scss'
import Header from "@/components/Header/Header.jsx";
import Hero from "@/components/Hero/Hero.jsx";
import Marquee from "@/components/Marquee/Marquee.jsx";
import Effects from "@/components/Effects/Effects.jsx";
import Factory_Video from "@/components/Factory_Video/Factory_Video.jsx";
import Experts_Opinion from "@/components/Experts_Opinion/Experts_Opinion.jsx";
import Useful_Info from "@/components/Useful_Info/Useful_Info.jsx";
import Where_Buy from "@/components/Where_Buy/Where_Buy.jsx";
import Footer from "@/components/Footer/Footer.jsx";


export default class Master extends React.PureComponent {
	render() {
		return (
			<div className="container" >
				<Header />
				<Hero />
				<Marquee />
				<Effects />
				<Factory_Video />
				<Experts_Opinion />
				<Useful_Info />
				<Where_Buy />
				<Footer />
			</div>
		);
	}
}

