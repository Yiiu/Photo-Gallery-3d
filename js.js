window.onload = function(){
	var oimg = getClass("div","photo");
	var aimg = getClass("div","photo-wrap");
	var button = true;
	for(var i = 0;i<8;i++){
		this.onclick = function(){
			if(button){
				this.className = "photo-wrap photo-back";
				button = false;
			}else{
				this.className = "photo-wrap photo-front";
				button = true;
			}
		}
	}
	img();
	imgi();
	test();
}
function test(){
	var suiji = 0;
	var Height = document.body.clientHeight;
	var Width = document.body.clientWidth;
	var oimg = getClass("div","photo");
	alert(Width)
	for(var i = 0;i<oimg.length;i++){
		oimg[i].style.left = random(0,Height)+"px";
		oimg[i].style.top = random(0,Width)+"px";
		oimg[i].style.transform =
		"rotate("+random(-30,30)+"deg)";
	}
	/*for(var i = 0;i<10;i++){
		-webkit-transform:rotate(7deg);
		suiji = Math.random()*1000;
		alert(suiji);
	}*/
}
/* 随机值 */
function random(min,max){
	var  i = parseInt(Math.random()*(max-min+1)+min,10);
	return(i);
}
/* 输出photo div */
function img(){
	var cont = getClass("div","content");
	var Icont = cont[0].innerHTML;
	var oimg = getClass("div","photo");
	var length = 8;
	for(var i = 1;i<length;i++){
		cont[0].innerHTML += Icont;
	}
}
/* 修改图片的src */
function imgi(){
	var img = getClass("div","img");
	var length = 8;
	var num = 0;
	var j = 1;
	for(var i = 0;i<length;i++){
		img[num].src = "img/"+j+".jpg";
		j++;
		num ++;
	}
}
function getClass(obj,className) {
	//tagname指元素，className指class的值
	//判断浏览器是否支持getElementsByClassName，如果支持就直接的用
	if (document.getElementsByClassName) {
    	return document.getElementsByClassName(className);
	}
	else { //当浏览器不支持getElementsByClassName的时候用下面的方法
	    var obj = document.getElementsByTagName(obj);  //获取指定元素
	    var tagnameAll = [];     //这个数组用于存储所有符合条件的元素
	    for (var i = 0; i < obj.length; i++) {     //遍历获得的元素
	        if (obj[i].className == obj) {     //如果获得的元素中的class的值等于指定的类名，就赋值给tagnameAll
	            objAll[objAll.length] = obj[i];
	        }
	    }
    return objAll;
	}
}