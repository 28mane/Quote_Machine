$(document).ready(function() {

	function shareTweet(){
		var quoteTxt1 = document.getElementById('quoteBody1').innerHTML;
   		var quoteTxt2 = document.getElementById('quoteBody2').innerHTML;
   		var quoteTxt = quoteTxt1 + " -" + quoteTxt2;
   		$(".shareQuote").attr("href", "https://twitter.com/intent/tweet?text=" + quoteTxt);
	}

	function getJson(){ 
		console.log("Hi!!!!!!!!!!!!!!");
		/*$.getJSON('http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en', function(val){
			//console.log("Hi!!!!!!!!!!!!!!");
			//console.log(val);
			$('.quoteBody').toggleClass('animated bounceInDown');
			$("#quoteBody1").html(val.quoteText);
			$("#quoteBody2").html(val.quoteAuthor);
			shareTweet();
		});*/
		$.getJSON('http://quotes.stormconsultancy.co.uk/random.json', function(data){
			console.log(data);
			//$('.quoteBody').toggleClass('animated bounceInDown');
			$('.quoteBody').effect( "bounce", {times:3}, 700 );
			$("#quoteBody1").html(data.quote);
			$("#quoteBody2").html(data.author);
			shareTweet();
		});
	}

   getJson();

   $(".nextQuote").on("click", function(){
		
		getJson();
	
   });

   $(".shareQuote").on("click", function(){

   		shareTweet();

   });   

});