$(document).ready(function() {
	$menu = $('#menu').find('ul').find('li');

	$menu.hover(function() {
		$(this).children('ul').stop();
		$(this).children('ul').slideDown();
	}, function() {
		$(this).children('ul').stop();
		$(this).children('ul').slideUp();
	});
});

$(function() {

	var inWrap = $('.inner-wrapper');
  
	$('.prev').on('click', function() {
  
	  inWrap.animate({left: '0%'}, 300, function(){
  
		inWrap.css('left', '-100%');
  
		$('.slide').first().before($('.slide').last());
  
	  });
  
  
	});
  
	$('.next').on('click', function() {
  
	  inWrap.animate({left: '-200%'}, 300, function(){
  
		inWrap.css('left', '-100%');
  
		$('.slide').last().after($('.slide').first());
  
	  });
  
  
	});
  })


  $(function() {

	var inWrap1 = $('.slider-wrapper1');
  
	$('.prev1').on('click', function() {
  
	  inWrap1.animate({left: '0%',height:'500px',width:'700px'}, 300, function(){
  
		inWrap1.css('left', '-100%');
  
		$('.slide1').first().before($('.slide1').last());
  
	  });
  
  
	});
  
  
  
	$('.next1').on('click', function() {
	  inWrap1.animate({left: '-200%', height:'200px',width:'600px'}, 300, function(){
  
		inWrap1.css('left', '-100%');
  
		$('.slide1').last().after($('.slide1').first());
  
	  });
  
  
	});
  
  
  })
  
  $(document).ready(function(){
	$("p").dblclick(function(){
	  $(this).hide();
	});
  });

  $(document).ready(function(){
	$("button").click(function(){
	  $("button").load("otro.txt");
	});
  });

  function cambiar(){
	  var xmlhttp;
	  if(window.XMLHttpRequest){
		  xmlhttp = new XMLHttpRequest();
		  console.log(xmlhttp)
	  }else if (window.ActiveXObject){
		  xmlhttp = new ActiveXObject("Microsoft.XHMLHTTP");
	  }

	  xmlhttp.onreadystatechange = acciones;
	  function acciones(){
		  if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
			  document.getElementById("demo").innerHTML=xmlhttp.responseText;
		  }
	  }

	  xmlhttp.open("GET","ejemplo.txt",true);
	  xmlhttp.send();
  }