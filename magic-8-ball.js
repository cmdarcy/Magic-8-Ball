function askEightBall(userName, question) {
	const randomNumber = Math.floor(Math.random() * 8);
	const responses = {
		0: "It is certain",
		1: "It is decidedly so",
		2: "Reply hazy try again",
		3: "Cannot predict now",
		4: "Do not count on it",
		5: "My sources say no",
		6: "Outlook not so good",
		7: "Signs point to yes",
	};
	let eightBallResponse;

	userName ? console.log(`Hello ${userName}`) : console.log(`Hello!`);
	userName
		? console.log(`${userName} asked: ${question}`)
		: console.log`User asked: ${question}`;

	switch (randomNumber) {
		case 0:
			eightBallResponse = responses[0];
			break;
		case 1:
			eightBallResponse = responses[1];
			break;
		case 2:
			eightBallResponse = responses[2];
			break;
		case 3:
			eightBallResponse = responses[3];
			break;
		case 4:
			eightBallResponse = responses[4];
			break;
		case 5:
			eightBallResponse = responses[5];
			break;
		case 6:
			eightBallResponse = responses[6];
			break;
		case 7:
			eightBallResponse = responses[7];
			break;
	}
	console.log(eightBallResponse);
}

askEightBall("Chris", "Will I win the lottery?");
