$(document).ready(function() {

/***************************************
This is the js file for the individual 
speaker bios
***************************************/

    /* The folowing variables store information about the speaker,
    which is based on which speaker is clicked, for example I 
    click on John Smith; so I store his name and other info */
    
    var speakerImg;     //Stores the speaker's image src
    var speakerName;    //Stores the speaker's name
    var speakerTitle;   //Stores the speaker's title, i.e. Ruby Expert
    var speakerBio;     //Stores the bio summary of the speaker

    //Changes cursor to a pointer when the user hovers
    //over the speaker name
    $(".speaker-name").hover(function() {
        $(this).css("cursor","pointer");
    });
    
    //Gets speaker's information when their name is clicked
    $(".speaker-name").click(function() {
        //Store info in variables
        speakerImg = $(this).prev().attr("src");
        speakerName = $(this).html();
        speakerTitle = $(this).next().next().html();
        speakerBio = $(this).next().next().next().html();
        
        /* 
        * Smooth scrolling so if the user clicks on a speaker further
        * down on the list, is scrolls up so they can see the full bio.
        * https://github.com/kswedberg/jquery-smooth-scroll
        */
        $.smoothScroll({
            scrollTarget: $("#speaker-list"),
            offset: -140
        });
        
        //Fade out the Speaker Section title and image 
        $(".speaker-header").fadeToggle("fast","linear");
        
        //Fade out the speaker list, and append the speaker's
        //information based on which speaker was clicked.
        //Also add the new Speaker Section Title and Image
        $("#speaker-list").fadeToggle("fast","linear",function() {     
            $(".back-speakers").fadeToggle("fast","linear");
            $("#speaker-bio").css("display","block");
            $("#speaker-bio").append("<div id='img-container'></div>");
            $("#img-container").append("<img src='"+speakerImg+"' width='300' height='300' alt='John Smith' Title='John Smith' />");
            $("#speaker-bio").append("<figure></figure>");
            $("figure").append("<span class='speaker-name'>"+speakerName+"</span> <br />");
            $("figure").append("<span class='speaker-title'>"+speakerTitle+"</span>");
            $("figure").append("<summary></summary>");
            $("figure summary").append(speakerBio);
            $("#speakers").css("padding-bottom","600px");
            //The additional-links div, moves down the screen when the individual
            //speaker bio is displayed, so let's move it back up
            $("#additional-links").css("top","3630px");
        });
    });
    
    //Change the cursor to a pointer, when hovering over the back arrow or text (BACK TO SPEAKERS)
    $(".back-speakers").hover(function() {
        $(this).css("cursor","pointer");
    });
    
    //Fade out the individual speaker's bio, and bring back the list of speakers
    $(".back-speakers").click(function() {
        //Fade out the Speaker Section title and image 
        $(".back-speakers").fadeToggle("fast","linear");
          
        //Fade out individual bio, and bring back list
        $("#speaker-bio").fadeToggle("fast","linear",function() {
             
            $("#speaker-bio").html("");
            //Fade in the Speaker Section title and image 
            $(".speaker-header").fadeToggle("fast","linear");
            $("#speaker-list").css("display","block");
            $("#speakers").css("padding-bottom","0px");
            //Change back top position of addional-links div
            $("#additional-links").css("top","4070px");
        });
    });

});