import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
	return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p style={{ textAlign: "justify" }}>
						Hi Everyone, I am <span className="purple">Kusum Patel </span>
						from <span className="purple"> Raipur, India.</span>
						<br />
						I am currently pursuing my B-tech degree from IIIT Naya Raipur.
						<br />
						My Branch is Data Science and Artificial Intelligence (Dsai).
						<br />
						<br />
						Apart from coding, some other activities that I love to do!
					</p>
					<ul>
						<li className="about-activity">
							<ImPointRight /> Cooking
						</li>
						<li className="about-activity">
							<ImPointRight /> Swimming
						</li>
						<li className="about-activity">
							<ImPointRight /> Travelling
						</li>
					</ul>

					<p style={{ color: "rgb(155 126 172)" }}>
						"Code is like humor. When you have to explain it, it’s bad."{" "}
					</p>
					<footer className="blockquote-footer">Cory House</footer>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
