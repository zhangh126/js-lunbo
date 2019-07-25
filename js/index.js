// //封装一个代替getElementByID方法
function byid(id){
	return typeof(id)==='string'?document.getElementById(id):id;
}

var index=0,//索引
    timer=null,//定时器
    pics=byid("banner").getElementsByTagName('div'),
    dost=byid("dost").getElementsByTagName('span'),
    prev=byid("prev"),
    next=byid("next"),
    len=pics.length;
function slideImg() {
	var main =byid('main');
	main.onmouseover=function(){
		// 清除定时器
		if(timer) clearInterval(timer)
	}
	main.onmouseout=function(){
		timer=setInterval(function(){
			index ++;
			if(index>=pics.length){
				index=0;
			}

			changImg()
			console.log(index)
		},2000)
	}
	//自动轮播
	main.onmouseout();

	// 点击圆点切换按钮
	for(let d=0;d<dost.length;d++){
		dost[d].onclick=function(){
			index=d
			console.log(index)
			changImg()
		}
	}

	// 下一张，
	prev.onclick=function(){
		console.log(len)
		index++;
		if(index>=len) index=0;
		changImg();
	}
	// 上一张
	next.onclick=function(){
		index--
		
		if(index<0){
			index=len-1;
		} 
		changImg()
	}
}
//切换图片
function changImg(){
	// 遍历banner下有多少div将其影藏
	for(var i=0;i<pics.length;i++){
		pics[i].style.display='none'
		dost[i].className=''
	}
		// 根据index索引找到当前div将其显示出来
	    pics[index].style.display='block'
	    dost[index].className='active'
}
slideImg()
// var index=0,
//     timer=null,
//     sider_container=byid('sider-container').getElementsByTagName('div'),
//     len=sider_container.length,
//     slider_left=byid('slider-control-left'),
//     slider_right=byid('slider-control-right');
// function slideImg(){
// 	var slider=byid('focus-slider');

// 	slider.onmouseover=function(){
// 		if(timer) clearInterval(timer);
// 	}
// 	slider.onmouseout=function(){
// 		timer=setInterval(function(){
// 			index++;
// 			if(index>=len){
// 				index=0;
// 			}
// 			changImg();
// 		},1000);
// 	}
// 	//自动轮播
// 	// slider.onmouseout();
// 	// 
// 	// 下一张
// 	slider_right.onclick=function(){
// 		index++;
// 		if(index>=len) index=0;
// 		changImg();
// 	}
// 	slider_left.onclick=function(){
// 		index--;
// 		if(index<0) index=len-1;
// 		changImg();
// 	}
// }
// //切换图片
// function changImg(){
// 	//遍历sider-container下的div将其隐藏
// 	for(var i=0;i<len;i++){
// 		sider_container[i].style.display='none';
// 	}
// 
// 	sider_container[index].style.display='block';
// }
// slideImg();
// 
