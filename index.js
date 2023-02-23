const img = document.getElementById("img");
const disp = document.getElementById("taskDisp");
const input = document.getElementById("taskInput");

const del = () => {
	let child = disp.lastElementChild;
	console.log(child);
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
	let btn = document.createElement('button');


	main.style.padding = "5px";
	btn.classList.add("btn2");
	btn.textContent = "-";
	task.classList.add("task");
	head.style.marginBottom = "10px";


	task.appendChild(main);
	task.appendChild(btn);
	main.appendChild(head);
	main.appendChild(body);


	main.children[0].textContent = input1;
	main.children[1].textContent = input2;
	disp.appendChild(task);
	input.children[0].value = "";
	input.children[1].value = "";
	let child = disp.lastElementChild;
	console.log(child);
} 
