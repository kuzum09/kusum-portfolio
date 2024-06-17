import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Kusum_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
	const [width, setWidth] = useState(1200);

	useEffect(() => {
		setWidth(window.innerWidth);
	}, []);

	return (
		<div>
			<Container fluid className="resume-section">
				<Particle />
				<Row style={{ justifyContent: "center", position: "relative" }}>
					<a
						href={pdf}
						download="Kusum_Resume.pdf"
						style={{ textDecoration: "none", color: "inherit" }}>
						<Button variant="primary" style={{ maxWidth: "250px" }}>
							<AiOutlineDownload />
							&nbsp;Download CV
						</Button>
					</a>
				</Row>
			</Container>
		</div>
	);
}

export default ResumeNew;
