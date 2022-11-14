import React from "react";

import {
	vk,
	facebook,
	twitter,
	ok,
	prharm
} from "@/img_video";

export default function Footer() {

	return (
		<footer>
			<h1>БИОЛОГИЧЕСКИ АКТИВНАЯ ДОБАВКА. НЕ ЯВЛЯЕТСЯ ЛЕКАРСТВОМ</h1>
			<div className="wrapper_footer" >
				<a href="#" className="gray_text_footer" >Сообщить о нежелательном явлении</a>

				<div className="container" >
					<div className="adress">
						<a href="#" className="gray_text_footer" > Условия пользования сайтом и файлами Cookies</a>
						<p>
							г. Москва, ул. Шаболовка, д. 31, стр. 11, 4 этаж<br />
							Телефон: +7 (495) 555-55-55
						</p>
					</div>
					<div className="social">
						<div className="social_icons" >
							<ul>
								<a href="#">
									<li><img src={vk} alt="" /></li>
								</a>
								<a href="#">
									<li><img src={facebook} alt="" /></li>
								</a>
								<a href="#">
									<li><img src={twitter} alt="" /></li>
								</a>
								<a href="#">
									<li><img src={ok} alt="" /></li>
								</a>
							</ul>
						</div>
						<a href="#" className="creator" >
							<img src={prharm} alt="" />
							<p>Создание сайтов <br /> Фарм-студия №1 в Рунете</p>
						</a>
					</div>
				</div>

			</div>
		</footer>

	);
}