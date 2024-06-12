import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import TicTacToe from "../../Assets/Projects/TicTacToe.png";

import crypto from "../../Assets/Projects/crypto.png";
import InvisoCloak from "../../Assets/Projects/InvisoCloak.png";
import college from "../../Assets/Projects/college.png";
import TextToolKit from "../../Assets/Projects/image.png";

function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					My Recent <strong className="purple">Works </strong>
				</h1>
				<p style={{ color: "white" }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={InvisoCloak}
							isBlog={false}
							title="InvisoCloak (Steganography)"
							description="Developed a versatile Python-based steganography tool capable of concealing text messages within text files, images, and PDF documents. This tool leverages the principles of steganography to embed secret information covertly within various file types, facilitating secure communication and data embedding."
							ghLink="https://github.com/kuzum09/Steganography-Text-Text-file-image-PDF-"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={TextToolKit}
							isBlog={false}
							title="TextToolKit"
							description="TextToolkit is a web application developed using React that offers a suite of tools for text manipulation and analysis. This toolkit allows users to format, analyze, and transform text easily through a user-friendly interface."
							ghLink="https://github.com/kuzum09/TextToolKit-Website-Using-React-"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={crypto}
							isBlog={false}
							title="Crypto Price Predictor"
							description="Created a Python script to predict cryptocurrency prices using various machine learning models. The script employs 'pandas', 'numpy', 'matplotlib', 'TensorFlow', and 'scikit-learn' for data processing, visualization, and model implementation."
							ghLink="https://github.com/kuzum09/Crypto_Price_Predictor"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={TicTacToe}
							isBlog={false}
							title="Tic Tac Toe"
							description="The webpage is a simple Tic Tac Toe game where two players can play against each other. The player names are taken from the previous page, and the game is displayed on a board with clickable squares. Each player takes turns to place their mark (X or O) on an empty square. "
							ghLink="https://github.com/kuzum09/Tic_Tac_Toe_web?tab=readme-ov-file"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={college}
							isBlog={false}
							title="College Website"
							description="Developed a comprehensive college website, enhancing user experience for students, faculty, and administrators. The project, hosted on GitHub, showcases proficiency in web development technologies and effective project management."
							ghLink="https://github.com/kuzum09/College-Website"
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
