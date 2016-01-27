function startMove(obj,attr,iTarget){
  clearInterval(obj.timer);                 //各各div都用字及的定时器
  obj.timer=setInterval(function(){
    var iCur = 0;
    if(attr=='opacity'){
      iCur = parseFloat(getStyle(obj,attr))*100;
    }else{
      iCur = parseInt(getStyle(obj,attr));
    }
    var iSpeed=(iTarget-iCur)/8;              // 速度
    iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed); //要是iSpeed大于等于0，那么iSpeed向上取整，否则向下取整。
    if(iCur==iTarget){
      clearInterval(timer);
    }else{
      if(attr=='opacity'){
        obj.style.filter = 'alpha(opacity:'+ iCur+iSpeed +')'
        obj.style.opacity = (iCur+iSpeed)/100 ;
        //obj.style[attr] = iCur+iSpeed+'px';
      }else{
        obj.style[attr] = iCur+iSpeed+'px';
      }

    }
  },30);
}
function getStyle(obj,attr){
  if(obj.currentStyle){
    return obj.currentStyle[attr];
  }else{
    return getComputedStyle(obj,false)[attr]
  }
}