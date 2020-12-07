let btnAdd=document.querySelector('#add');
let btnSub=document.querySelector('#subtract');
let input=document.querySelector('input');
btnAdd.addEvevtListener('click',()=>{
	input.value=parseInt(input.value)+1;
	});
btnSub.addEvevtListener('click',()=>{
	input.value=parseInt(input.value)-1;
	});
