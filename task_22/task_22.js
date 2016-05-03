window.onload = function(){

	//前序遍历
	function preOrder(node){
		if(!(node == null)){
			divList.push(node);
			preOrder(node.firstElementChild);
			preOrder(node.lastElementChild);
		}
	}

	//中序遍历
	function inOrder(node){
		if(!(node == null)){
			inOrder(node.firstElementChild);
			divList.push(node);
			inOrder(node.lastElementChild);
		}
	}

	//后序遍历
	function postOrder(node){
		if(!(node == null)){
			postOrder(node.firstElementChild);
			postOrder(node.lastElementChild);
			divList.push(node);
		}
	}
	//颜色变化
	function changeColor(){
		var i = 0, len = divList.length;
		divList[i].style.backgroundColor = "blue";
		timer = setInterval(function(){
			i ++;
			if(i < len){
				divList[i].style.backgroundColor = 'blue';
				divList[i-1].style.backgroundColor = '#fff';
			}else{
				clearInterval(timer);
				divList[len-1].style.backgroundColor = '#fff';
				divList = [];
			}
		},500) 
	}
	//初始化
	function reset(){
		divList = [];
		clearInterval(timer);
		var div = document.getElementsByTagName('div'); 
		for(var i = 0,len = div.length; i<len; i++){
			div[i].style.backgroundColor = "#fff";
		}

	}

	var btn = document.getElementsByTagName('input');
	var root = document.getElementById('root');
	var divList = [];
	var timer = null;

	btn[0].onclick = function(){
		reset();
		preOrder(root);
		changeColor();
		console.log(divList);
	}
	btn[1].onclick = function(){
		reset();
		inOrder(root);
		changeColor();
		console.log(divList);
	}
	btn[2].onclick = function(){
		reset();
		postOrder(root);
		changeColor();
		console.log(divList);
	}
}