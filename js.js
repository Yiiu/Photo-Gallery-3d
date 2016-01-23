window.onload = function(){
	var num = 15; // 照片的个数
	img(num);
	imgi(num);
	value();
	//test();
}
function test(){
	var photos = [];
	var _photo = getClass("div","photo");
	for(i = 0;i<_photo.length;i++){
		photos.push(_photo[i]);
		photos[i].index = i++;
	}
	return(photos);
}
/* photo的点击事件 */
function turn(elem){
	var cls = elem.className;
	if(/photo-front/.test(cls)){
		cls = cls.replace(/photo-front/,'photo-back')
	}else{
		cls = cls.replace(/photo-back/,'photo-front')
	}
	return elem.className = cls;
}
/*
*修改photoDIV的top和left
 */
function value(){
	var suiji = 0;
	var Height = document.body.scrollHeight;
	var Width = document.body.scrollWidth;
	var oimg = getClass("div","photo");
	for(var i = 0;i<oimg.length;i++){
		oimg[i].style.left = random(0,Width-100)+"px";
		oimg[i].style.top = random(0,Height-100)+"px";
		oimg[i].style.transform =
		"rotate("+random(-100,100)+"deg)";
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
function img(num){
	var cont = getClass("div","content");
	var Icont = cont[0].innerHTML;
	var oimg = getClass("div","photo");
	var photos = getClass("div","photo-wrap");
	for(var i = 1;i<num;i++){
		cont[0].innerHTML += Icont;
	}
	for(var s = 0;s<photos.length;s++){
		photos[s].id = "photo_"+s;
	}

}
/* 修改图片的src */
function imgi(length){
	var img = getClass("div","img");
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