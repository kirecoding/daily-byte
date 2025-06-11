// grab all the html elements
const codeArea = document.querySelector("#code");
const preview = document.querySelector("#preview");
const runButton = document.querySelector("#run");
const saveButton = document.querySelector("#save");

// declare variables for local storage
const today = new Date().toISOString().split("T")[0];
let snippets = JSON.parse(localStorage.getItem("snippets")) || {};

// load today's saved snippet (if it exists)
if (snippets[today]) {
	codeArea.value = snippets[today];
}

// run the code when use clicks "RUN" button
runButton.addEventListener("click", () => {
	const html = codeArea.value;
	preview.srcdoc = html;
});

// save today's snippet when user clicks "SAVE" button
saveButton.addEventListener("click", () => {
	snippets[today] = codeArea.value;
	localStorage.setItem("snippets", JSON.stringify(snippets));
	alert("saved! great work!");
});
