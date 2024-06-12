import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/kp.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
	return (
		<Container fluid className="home-about-section" id="about">
			<Container>
				<Row>
					<Col md={8} className="home-about-description">
						<h1 style={{ fontSize: "2.6em" }}>
							LET ME <span className="purple"> INTRODUCE </span> MYSELF
						</h1>
						<p className="home-about-body">
							Programming has become my passion, and I've definitely made some
							progress. Well, at least I think I have! 🤷‍♂️
							<br />
							<br />
							I've honed my skills in foundational languages like
							<i>
								<b className="purple"> C++, python, and Go, </b>
								<br />
								navigating their nuances with ease.
							</i>
							<br />
							<br />
							Whenever possible, I also apply my passion for developing products
							with <b className="purple">Node.js</b> and
							<i>
								<b className="purple">
									{" "}
									Modern Javascript Library and Frameworks
								</b>
							</i>
							&nbsp; like
							<i>
								<b className="purple">
									{" "}
									React.js and Next.js,SQL,Tensorflow,Keras
								</b>
							</i>
						</p>
					</Col>
					<Col md={4} className="myAvtar">
						<Tilt>
							<img src={myImg} className="img-fluid" alt="kp" />
						</Tilt>
					</Col>
				</Row>
				<Row>
					<Col md={12} className="home-about-social">
						<h1>FIND ME ON</h1>
						<p>
							Feel free to <span className="purple">connect </span>with me
						</p>
						<ul className="home-about-social-links">
							<li className="social-icons">
								<a
									href="https://github.com/kuzum09"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons">
									<AiFillGithub />
								</a>
							</li>

							<li className="social-icons">
								<a
									href="https://www.linkedin.com/in/kusum-patel/"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons">
									<FaLinkedinIn />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://www.instagram.com/_.k.p.__/"
									target="_blank"
									rel="noreferrer"
									className="icon-colour home-social-icons">
									<AiFillInstagram />
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
export default Home2;
