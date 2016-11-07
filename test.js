window.onload=function(){
	/*
		
		
		获取用户打字内容
		添加点击事件 发送
			添加打字内容进html
			显示到chatwindow中

	*/


	var context=document.getElementById('message');
	var send=document.getElementById('send');
	var canvas=document.getElementsByClassName('chats')[0];
	var face=document.getElementById('clickface')
	
	var num=1;
	face.onclick=function(){
		if(num==1){
			num=2;
		}else{
			num=1;
		}
		
		face.style['background-image']='url("img/'+num+'.jpg")';
		
	}
	var messageForm=document.getElementById("message-form");
	messageForm.onclick=function(){
		console.log('clicked');
	};
	messageForm.onchange = function() {
		console.log('changed!');
	};
	messageForm.onsubmit = function(evt) {
		console.log('submit!');
		evt.preventDefault();
	}
	messageForm.onkeyup = function() {
		console.log('key up!');
	}
	send.onclick=function(){
		if(context.value==''){
			alert('fuck you! say something!!');
		}
		console.log(canvas,canvas[0]);
		canvas.innerHTML+='<div class="u'+num+' chat"><img class="face" src="img/'+num+'.jpg"><span class="message">'  +  context.value  +  '</span></div>';
		context.value='';
	}
}