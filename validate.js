console.log("greenhouse validator in The House!");

const textAreas = document.getElementsByTagName('textarea');
const submitButton = document.getElementById('submit_scorecard_button');

function isFeedbackLongEnough(text) {
	const pattern = /\.\s/g;
	// Likely to be one off since it won't match the last sentence.
	const minNumSentences = ((text || '').match(pattern) || []).length;
	return minNumSentences >= 4;
}

function validateAndStylePage() {
	let readyToSubmit = true;
	for (let i = 0, l = textAreas.length; i < l; i++) {
	  const area = textAreas[i];

	  if (area.id === "scorecard_public_notes") {
	  	// The "Notes for other interviewers section" should be as long or short as the interviewer deems necessary.
	  	continue;
	  }

	  const text = area.value;
	  if (!isFeedbackLongEnough(text)) {
	  	area.style.borderColor = "red";
	  	document.body.style.backgroundColor="#c7f3f1";
	  	readyToSubmit = false;
	  } else {
	  	area.style.borderColor = "green";
	  }
	}

	if (readyToSubmit) {
		submitButton.style.pointerEvents = "";
		submitButton.style.color = "green";
		document.body.style.backgroundColor="#f3f3f3";
	} else {
		submitButton.style.pointerEvents = "none";
		submitButton.style.color = "red";
	}
}

for (let i = 0, l = textAreas.length; i < l; i++) {
  const area = textAreas[i];
  area.onkeyup = validateAndStylePage;
  area.onblur = validateAndStylePage;
  area.onchange = validateAndStylePage;
}

validateAndStylePage();