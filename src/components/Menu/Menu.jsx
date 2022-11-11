import React from "react";
import classnames from 'classnames'

import {
	line_1,
	line_2,
	line_3,
	line_4,
	line_5
} from "@/img_video";


export default class Menu extends React.PureComponent {

	render() {
		return (
			<section
				className={classnames('menu_section', { 'hide': this.props.visibility })}
			>
				<div className="container_menu">
					<nav>

						<ul>
							<li>
								<a href="#">Где купить</a>
								<img className="line_1" src={line_1} alt="" />
							</li>
							<li>
								<a href="#">О препарате</a>
								<img className="line_2" src={line_2} alt="" />
							</li>
							<li>
								<a href="#">О варикозе</a>
								<img className="line_3" src={line_3} alt="" />
							</li>
							<li>
								<a href="#" >Решение</a>
								<img className="line_4" src={line_4} alt="" />
							</li>
							<li>
								<a href="#">Специалистам</a>
								<img className="line_5" src={line_5} alt="" />
							</li>
							<li>
								<a href="#">Геморрой</a>
							</li>
						</ul>
					</nav>
				</div>
			</section>

		);
	}
}