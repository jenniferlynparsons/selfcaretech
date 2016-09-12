/*
		Developed by: Roman Asimov
		Lizens: GNU Public
		Requires: jQeruy and jQuery UI 1.9..
*/

window.onload=function()
{

	function startfade()
	{
		var fadestatus = 0,
			maxcolors = 4,
			fadespeed = 10000,
			element = $("body"); // Set your colors value

		setInterval(function(){

			while(fadestatus == 0) // set these counters
			{
				element.switchClass( "fadeblue", "fadepurple", fadespeed, "easeInOutQuad" );
				fadestatus =  Math.floor((1+maxcolors)*Math.random());
			}
			while(fadestatus == 1)
			{
				element.switchClass( "fadepurple", "fadegreen", fadespeed, "easeInOutQuad" );
				fadestatus =  Math.floor((1+maxcolors)*Math.random());
			}
			while(fadestatus == 2)
			{
				element.switchClass( "fadegreen", "fadeyellow", fadespeed, "easeInOutQuad" );
				fadestatus =  Math.floor((1+maxcolors)*Math.random());
			}
			while(fadestatus == 3)
			{
				element.switchClass( "fadeyellow", "fadecyan", fadespeed, "easeInOutQuad" );
				fadestatus =  Math.floor((1+maxcolors)*Math.random());
			}
			while(fadestatus == 4)
			{
				element.switchClass( "fadecyan", "fadeblue", fadespeed, "easeInOutQuad" );
				fadestatus =  Math.floor((1+maxcolors)*Math.random());
			}

		}, 1000);
	}

	startfade();
}
