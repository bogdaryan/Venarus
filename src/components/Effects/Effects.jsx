import React, { useState } from "react";
import { FaInfoCircle } from 'react-icons/fa'
import classnames from 'classnames'



import {
	scope_1,
	squares,
	pill_1,
} from "@/img_video";

export default function Effects() {
	return (
		<>
			<section className="section_some_info" >
				<ul>
					<li>
						<img src={scope_1} alt="" />
						<span>Доказанная <br />  эффективность</span>
					</li>
					<li>
						<img src={squares} alt="" />
						<span>Новая дозировка <br /> 100 мг + 900 мгь</span>
					</li>
					<li className="hover_info" >
						<img src={pill_1} alt="" />
						<span>Удобный прием. <br /> Одна таблетка в сутки*</span>
						<div className="i" >
							<FaInfoCircle />
							<div className={classnames("hover_cloud")} >
								<span>Some Info</span>
							</div>
						</div>
					</li>
				</ul>
			</section>
			<section className="section_effects" >
				<div className="text_effects" >
					<h1 className="h1_section_title" >Комплексное <br /> действие</h1>
					<p className="subtitle" >Венарус показан для терапии <br />
						симптомов хронических <br />
						заболеваний вен (устранения <br />
						и облегчения симптомов).</p>
				</div>
				<div className="effects_continer" >
					<ul className="effects" >
						<li className="effect effect_1 " >
							<a href="#" className="more_info">Подробнее {">"}</a>

							<span>Помогает <br /> предотвратить судороги</span>
						</li>

						<li className="effect effect_2 " >
							<a href="#" className="more_info">Подробнее {">"}</a>

							<span> Способствует <br />снижению тяжести <br />в ногах</span>
						</li>

						<li className="effect effect_3 " >
							<a href="#" className="more_info">Подробнее {">"}</a>

							<span>Способствует снижению <br />болевых ощущений</span>
						</li>

						<li className="effect effect_4 " >
							<a href="#" className="more_info">Подробнее {">"}</a>

							<span>Помогает<br /> уменьшить отеки</span>
						</li>

						<li className="effect effect_5" >
							<a href="#" className="more_info">Подробнее {">"}</a>

							<span>Оказывает <br /> ангиопротекторное  <br />и венотонизурующее <br /> действие</span>
						</li>

					</ul>
				</div>
			</section>
		</>
	);
}