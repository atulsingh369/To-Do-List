const img = document.getElementById("img");
const disp = document.getElementById("taskDisp");
const input = document.getElementById("taskInput");
let delImg = document.createElement("img");
delImg.src = "delete.png";

delImg.addEventListener('click', (e) => {
	let child = disp.lastElementChild;
	disp.removeChild(child);
	if (disp.lastElementChild === img)
		img.style.display = "flex";
});

const del = () => {
	let child = disp.lastElementChild;
	disp.removeChild(child);
	if (disp.lastElementChild === img)
		img.style.display = "flex";
}
	

const add = () => {
	img.style.display = "none";

	let input1 = input.children[0].value;
	let input2 = input.children[1].value;

	let task = document.createElement('div')
	let main = document.createElement('div');
	let head = document.createElement('h3');
	let body = document.createElement('p');


	main.classList.add("main");
	task.classList.add("task");
	head.style.marginBottom = "10px";


	task.appendChild(main);
	task.appendChild(delImg);
	main.appendChild(head);
	main.appendChild(body);

	console.log(main);

	main.children[0].textContent = input1;
	main.children[1].textContent = input2;
	disp.appendChild(task);
	input1 = "";
	input2 = "";
} 
