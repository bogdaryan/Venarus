import React from "react";
import Slider_Packages from "@/components/Hero/Slider_Packages/Slider_Packages.jsx";

import {
	hero_bg,
	play,
	arrow_instruction,
	drop_a_where,
} from "@/img_video";



export default class Hero extends React.PureComponent {
	render() {
		return (
			<section className="section_hero" >
				<video autoPlay loop muted >
					<source src={hero_bg} type="video/mp4" />
				</video>

				<div className="container_hero" >
					<div className="left_section" >
						<h1> Надежный <br /> помощник <br /> в лечении <br /> варикоза </h1>
						<div className="links" >
							<ul>
								<a href="#">
									<li>
										<img src={play} alt="" />
										Схема приема
									</li>
								</a>
								<a href="#">
									<li>
										<img src={arrow_instruction} alt="" />
										Инструкция
									</li>
								</a>
								<a href="#">
									<li>
										<img src={drop_a_where} alt="" />
										Где купить
									</li>
								</a>
							</ul>
						</div>
					</div>
					<Slider_Packages />
				</div>
			</section>
		);
	}
}