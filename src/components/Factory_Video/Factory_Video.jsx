import React, { useEffect, useState } from "react";
import { factory_img, factory_bg_svg, factory_1 } from "@/img_video";
import classnames from 'classnames'


export default function Factory_Video() {

	const arr_items = []

	useEffect(() => {
		const items = document.querySelectorAll('.item')

		for (let item of items) {
			arr_items.push(item)
		}
	})


	function next_slide() {

		arr_items[0].classList.remove('active')
		arr_items[0].classList.add("transform")

		arr_items[1].classList.add("active")
		arr_items[1].classList.remove('transform')

	}


	function prev_slide() {

		arr_items[1].classList.remove('active')
		arr_items[1].classList.add("transform")

		arr_items[0].classList.add("active")
		arr_items[0].classList.remove('transform')

	}

	return (
		<section className="section_factory" >
			<img id="bg_section" src={factory_bg_svg} alt="" />


			<div className="container_factory">
				<h1 className="h1_section_title" >О производстве <br /> Венарус</h1>

				<div className="right_block" >
					<div className="wrapper">
						<div className="container_slides">

							<div className='item active '  >
								<img src={factory_img} />
							</div>
							<div className="item  transform" >
								<img src={factory_1} />
							</div>

						</div>
						<div className="navigation" >
							<div onClick={prev_slide} className="btn_prev" ></div>
							<div onClick={next_slide} className="btn_next" ></div>
						</div>
					</div>

					<a className="btn" > Подробнее {">"} </a>


				</div>

			</div>
		</section>
	);
}