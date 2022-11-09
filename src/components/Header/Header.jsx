import React from "react";
import { search, drop_a, logo } from "@/img_video";
import Burger_Icon from "@/components/Header/Burger_Icon/Burger_Icon.jsx";

export default class Header extends React.PureComponent {
	render() {
		return (
			<header>
				<img src={logo} alt="" />

				<div className="icons" >
					<img src={search} alt="" />
					<img src={drop_a} alt="" />
					<Burger_Icon />
				</div>
			</header>
		);
	}
}