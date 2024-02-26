//your JS code here. If required.
const btn = document.getElementById('btn');
const ip = document.getElementById('ip');
const output = document.getElementById('output');

function createPromise(n , delay){
	return new Promise((res , rej) => {
		setTimeout(() => {
			res(n);
		},delay*1000);
	});
}

btn.addEventListener('click' , () =>{
	let n = ip.value;
	if(n){
		createPromise(n,2).then( num => { 
			output.innerText = `Result: ${num}`;
			return createPromise(num*2 , 1);
		}).then( num => {
			output.innerText = `Result: ${num}`;
			return createPromise(num-3 , 1);
		}).then( num => {
			output.innerText = `Result: ${num}`;
			return createPromise(num/2 , 1);
		}).then( num => {
			output.innerText = `Result: ${num}`;
			return createPromise(num+10, 1);
		}).then( num => {
			output.innerText = `Result: ${num}`;
		})
	}
});
