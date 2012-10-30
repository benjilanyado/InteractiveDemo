$(document).ready(function(){



// UP DOWN PANEL CONTROLS

var verticalimages = [	"0px", "630px", "1260px", "1880px", "2523px"];

var lightboxCurrent = 0;

function downclick() {

	lightboxCurrent += 1

 	$("#internalwrapper").animate({"bottom": verticalimages[lightboxCurrent]}, 1000)
 	$("#upbutton").fadeIn()

 	if (lightboxCurrent==(verticalimages.length - 1)) {

 		$("#downbutton").fadeOut()
 		$("#upbutton").fadeIn()
 		$("rightbutton").fadeIn()

 	}


}

function upclick() {


	lightboxCurrent -= 1

 	$("#internalwrapper").animate({"bottom": verticalimages[lightboxCurrent]}, 1000)

 	$("#downbutton").fadeIn()

 	if (lightboxCurrent==(verticalimages.length - 5)) {  //NB  "-5" needs to be whatever length of array is

 		$("#upbutton").fadeOut()
 	}


}



  $("#downbutton").click(function(event) {      	

  	event.preventDefault();

  	downclick()

	});


  $("#upbutton").click(function(event) {      	

  	event.preventDefault();

  	upclick()

	});


 ///END OF PANEL CONTROLS

/// TILE 2 CONTROLS



  $("#tile2vidbutton").click(function(event) {        

    event.preventDefault();

    $("#clickme").fadeOut();

    $("#tile2embedholder").fadeIn(function(){
      
      $("#tile2embed").html('<iframe src="http://player.vimeo.com/video/31131535#t=3m00s?title=0&amp;byline=0&amp;portrait=0" width="500" height="282" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')

    });

    
  });


  $("#tile2embedholder img").click(function(event) {        

    event.preventDefault();

    $("#tile2embedholder").fadeOut(function(){
      
      $("#tile2embed").html('')

    });

    
  });








/// Tile 3 controls

  $("#showcopy").click(function(event){

    event.preventDefault();

    $("#copywidth").animate({"width": "795px"}, 1000, function(){

       $("#copywidth").animate({"height": "360px"}, 500, function(){

        $("#copyclose").fadeIn()

      });

      });
 

  });

  $("#copyclose a").click(function(event){

    event.preventDefault();
    $("#copywidth").css("width", "555px");
    $("#copywidth").css("height", "30px");
    $("#copyclose").fadeOut()


  });








///Leader controls


  $("#button1").click(function(event) {        

    event.preventDefault();

    $("#infobox1").fadeToggle()
    $("#games").fadeOut()

  });

   $("#button2").click(function(event) {        

    event.preventDefault();

    $("#infobox2").fadeToggle()
    $("#games").fadeOut()

  });

    $("#button3").click(function(event) {        

    event.preventDefault();

    $("#infobox3").fadeToggle()
    $("#games").fadeOut()

  });

     $("#button4").click(function(event) {        

    event.preventDefault();

    $("#infobox4").fadeToggle()
    $("#games").fadeOut()

  });

      $("#button5").click(function(event) {        

    event.preventDefault();

    $("#infobox5").fadeToggle()
    $("#games").fadeOut()

  });

       $("#button6").click(function(event) {        

    event.preventDefault();

    $("#infobox6").fadeToggle()
    $("#games").fadeOut()

  });

        $("#button7").click(function(event) {        

    event.preventDefault();

    $("#infobox7").fadeToggle()
    $("#games").fadeOut()

  });

         $("#button8").click(function(event) {        

    event.preventDefault();

    $("#infobox8").fadeToggle()
    $("#games").fadeOut()

  });

          $("#button9").click(function(event) {        

    event.preventDefault();

    $("#infobox9").fadeToggle()
    $("#games").fadeOut()

  });

           $("#button10").click(function(event) {        

    event.preventDefault();

    $("#infobox10").fadeToggle()
    $("#games").fadeOut()

  });






//end of leader controls
 
 //  NY IMAGE LEFT/RIGHT

  $("#rightbutton").click(function(event){

  	event.preventDefault();

  	$("#panorama").animate({"left": "-900px"}, 2000)
  	$("#rightbutton").fadeOut();
  	$("#leftbutton").fadeIn();
  	$("#upbutton").fadeOut();
    $("#nycopy").fadeOut()

  });

    $("#leftbutton").click(function(event){

  	event.preventDefault();

  	$("#panorama").animate({"left": "0px"}, 2000)
  	$("#leftbutton").fadeOut();
  	$("#rightbutton").fadeIn();
  	$("#upbutton").fadeIn()

  });

 /// END OF NY IMAGE CONTROLS


    $("#videobox").click(function(event){

    	event.preventDefault();

    	event.stopPropogation();
    })

 // MINI IMAGE CONTROLS


    var miniImages = [	"0px", "-250px", "-500px", "-750px", "-1000px"];

	var lightboxMiniCurrent = 1;


    function rightclickmini() {

	lightboxMiniCurrent += 1

 	$("#nyimage").animate({"left": miniImages[lightboxMiniCurrent]}, 500)

 	$("#minileft").fadeIn()

 	if (lightboxMiniCurrent==(miniImages.length - 1)) {

 		$("#miniright").fadeOut()
 	}


}

function leftclickmini() {


	lightboxMiniCurrent -= 1

 	$("#nyimage").animate({"left": miniImages[lightboxMiniCurrent]}, 500)

 	$("#miniright").fadeIn()

 	if (lightboxMiniCurrent==(miniImages.length - 5)) {

 		$("#minileft").fadeOut()
 	}

}

	$("#miniright").click(function(event){

		event.preventDefault();

	  	rightclickmini()

	})

	$("#minileft").click(function(event){

		event.preventDefault();

	  	leftclickmini()

	})

// end of mini image controls

// video/audio/gallry toggle

  $("#imagesbutton").click(function(event) {

    event.preventDefault();

      $("#imagesbox").fadeToggle();
      $("#mediacopy").fadeOut()

  });

    $("#audiobutton").click(function(event) {

    event.preventDefault();

      $("#audiobox").fadeToggle();
      $("#mediacopy").fadeOut();
      $("#tweet").fadeToggle();
      $("#emailme").fadeToggle()

  });

     $("#videobutton").click(function(event) {

    event.preventDefault();

      $("#videobox").fadeToggle();
      $("#mediacopy").fadeOut();

  });



  //    $("#tweet img").click(function(event) {

  //   event.preventDefault();

  //     $("#tweet").animate({"top": "0px"});
  //     $("#tweet img").attr("src", "images/upbutton.png") 
  //     $("#mediacopy").fadeOut()

  // });

  //      $("#credits img").click(function(event) {

  //   event.preventDefault();

  //     $("#credits").animate({"top": "0px"}, 500);
  //     $("#credits img").attr("src", "images/upbutton.png") 
  //     $("#mediacopy").fadeOut()
  //     $("#videobox").fadeOut()

  // });

// TWEET /ABOUT / CREDIT CONTROLS

$("#emailme img").on({
  'click': function(event) {

              event.preventDefault();
               var src = ($("#emailme img").attr('src') === 'images/downbutton.png')
                  ? 'images/upbutton.png'
                  : 'images/downbutton.png';
               $("#emailme img").attr('src', src);

               if($("#emailme").css('top') == '0px'){
                  $("#emailme").stop().animate({top:'-225px'},500);
                  $("#mediacopy").fadeOut()
                  $("#imagesbox").fadeOut()
                  
                };
                if($("#emailme").css('top') == '-225px'){
                  $("#emailme").stop().animate({top:'0px'},500);
                  $("#mediacopy").fadeOut()
                  $("#imagesbox").fadeOut()

                };}
                      
});

$("#tweet").on({
  'click': function(event) {

              event.preventDefault();


               

               if($("#tweet").css('top') == '-10px'){
                  $("#tweet").stop().animate({top:'46px'},200);
                  $("#tweetbutton").fadeIn()
                };
                if($("#tweet").css('top') == '46px'){
                  $("#tweet").stop().animate({top:'-10px'},200);
                  $("#tweetbutton").fadeOut()
                  
                };}
                      
});


// $("#credits img").on({
//   'click': function(event) {

//               event.preventDefault();
//                var src = ($("#credits img").attr('src') === 'images/downbutton.png')
//                   ? 'images/upbutton.png'
//                   : 'images/downbutton.png';
//                $("#credits img").attr('src', src); 

//                if($("#credits").css('top') == '0px'){
//                   $("#credits").stop().animate({top:'-513px'},1000);
//                   $("#mediacopy").fadeOut();
//                   $("#videobutton").fadeIn()
//                 };
//                 if($("#credits").css('top') == '-513px'){
//                   $("#credits").stop().animate({top:'0px'},1000);
//                   $("#mediacopy").fadeOut()
//                   $("#videobutton").fadeOut()
//                 };}
                      
// });
   
   $("#newdown").click(function(event){

    event.preventDefault();

    $("#internalwrapper").animate({"bottom": "3100px"}, 1000, function(){

      $("#titleswrapper").animate({"bottom": "2300px"}, 35000, "linear", function(){

        $("#titleswrapper").css("bottom", "0px")

          $("#titleswrapper").animate({"bottom": "2300px"}, 35000, "linear", function (){

            $("#titleswrapper").css("bottom", "0px")

            $("#titleswrapper").animate({"bottom": "2300px"}, 35000, "linear", function () {

              $("#titleswrapper").css("bottom", "548px")
              $("#rightside").css("overflow", "scroll")


            });

          });

      });

    });







    // $("#credits").fadeIn();
    // $("#mediacopy").fadeOut()
    // $("#videobutton").fadeOut()
    // $("#audiobutton").fadeOut()
    // $("#imagesbutton").fadeOut()
    // $("#tweet").fadeOut()
    // $("#emailme").fadeOut()
    // $("#leftbutton").fadeOut()
    // $("#creditclick").fadeOut()

   });


   $("#oneup").click(function(event){

    $("#internalwrapper").animate({"bottom": "2520px"}, 1000)
    $("#tweetbutton").fadeOut()



   });

    $("#backtotop").click(function(event){

    window.location.reload()


   });




// TWEET BUTTON

     !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

/// credits

// var titlesX = 0   

//     function moveTitles() {

//       if ($("#titlewswrapper").css('bottom') == '2300px'){

//                   titlesX = 0;
                  
//                   return
                  
//                 };

//       titlesX = titlesX + 1; 

//       $("#titleswrapper").css("bottom", titlesX);  

      

//     }


     













}); //ready