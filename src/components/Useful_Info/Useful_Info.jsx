import React from "react";

import {
	useful_bg,
	useful_1,
	useful_2,
	useful_3
} from "@/img_video";


export default function Experts_Opinion() {

	return (
		<section className="section_useful_info" >
			<img id="bg_section" src={useful_bg} alt="" />

			<div className="wrapper">

				<div className="text_effects" >
					<h1 className="h1_section_title" >Полезная  <br /> информация</h1>
					<p className="subtitle" >
						ВЕНАРУС — надежный помощник <br />
						в лечении варикоза, хранитель<br />
						женских ног на пути<br />
						к ее мечте! <br />
					</p>
				</div>

				<div className="right_block" >
					<ul >
						<li className="grid_1" >
							<span>Профилак- <br />
								тические упражнения</span>
							<img src={useful_1} alt="" />
						</li>
						<li className="grid_2" >
							<span>Диагностика
								и способы лечения</span>
							<img src={useful_2} alt="" />
						</li>
						<li className="grid_3" >
							<span>Рекомен- <br />
								дации по питанию </span>
							<img src={useful_3} alt="" />
						</li>
						<li className="grid_4" >
							<span>Факты <br />
								о варикозе</span>
						</li>
					</ul>


					<a className="btn">Подробнее {">"}</a>

				</div>
			</div>


		</section>

	);
}