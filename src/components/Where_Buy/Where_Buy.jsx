import React from "react";

import { where_buy } from "@/img_video";


export default function Where_Buy() {

	return (
		<section className="section_where_buy" >

			<div className="wrapper">

				<div className="text_effects" >
					<h1 className="h1_section_title" >Где<br /> купить</h1>
					<p className="subtitle" >
						Ветонизирующее средство <br />
						ВЕНАРУС вы можете приобрести в <br />
						аптеках вашего города <br />
					</p>
				</div>

				<div className="right_block" >
					<img src={where_buy} alt="" />
					<ul className="links">
						<a href="#" className="btn" >
							<li> apteka.ru</li>
						</a>
						<a href="#" className="btn" >
							<li> 366.ru</li>
						</a>
						<a href="#" className="btn" >
							<li> stolichki.ru</li>
						</a>
					</ul>
				</div>
			</div>



		</section>

	);
}