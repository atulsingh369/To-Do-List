const img = document.getElementById("img");
const disp = document.getElementById("taskDisp");
const input = document.getElementById("taskInput");

var input1 = 0;
var input2 = 0;

const create = () => {
	let task = document.createElement('div')
	let main = document.createElement('div');
	let head = document.createElement('h3');
	let body = document.createElement('p');
	var btn = document.createElement('button');

	btn.addEventListener('click', () => {

		let key = btn.parentElement.children[0].children[0].textContent;
		console.log(key);
		window.localStorage.removeItem(key);

		let child = btn.parentElement;
		disp.removeChild(child);


		if (disp.lastElementChild === img)
			img.style.display = "flex";
		if (disp.children.length < 3) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	})

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
}



const add = () => {
	img.style.display = "none";

	input1 = input.children[0].value;
	input2 = input.children[1].value;

	window.localStorage.setItem(input1, input2);
	create();

	if (disp.children.length > 4) {
		const y = disp.lastElementChild.getBoundingClientRect().top;
		window.scroll({
			top: y - 100,
			behavior: 'smooth'
		});
	}
}


if (window.localStorage.length > 0) {
	img.style.display = "none";
	for (let i = 0; i < window.localStorage.length; i++) {
		input1 = window.localStorage.key(i);
		input2 = window.localStorage.getItem(input1);
		create();
	}
}