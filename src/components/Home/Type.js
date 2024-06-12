import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
	return (
		<Typewriter
			options={{
				strings: [
					"B-tech Student at IIIT Naya Raipur...",
					"My Branch is Data Science and AI :)",
					"I am a passionate Web Devloper !!",
				],
				autoStart: true,
				loop: true,
				deleteSpeed: 80,
			}}
		/>
	);
}

export default Type;
