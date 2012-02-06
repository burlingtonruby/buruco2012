$(document).ready(function() {
  $('.nav').noisy({
      intensity: 0.9,
      size: 100,
      opacity: 0.08,
      monochrome: false
  });

  $('body').noisy({
      intensity: 0.9,
      size: 100,
      opacity: 0.08,
      monochrome: false
  });
  
	/* Draws triangle (above selected href in .nav) for canvas element */
	var c=document.getElementById("link-selected");
	var ctx=c.getContext("2d");
	ctx.fillStyle="#FF0000";
	ctx.strokeStyle="#FF0000";

	ctx.moveTo(10,10);
	ctx.lineTo(40,10);
	ctx.lineTo(25,30);
	ctx.lineTo(10,10);

	ctx.fill();
	ctx.stroke();
});
