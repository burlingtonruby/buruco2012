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
    $(".speaker-name, .thumbnail, .topic").hover(function() {
        $(this).css("cursor","pointer");
    });
    
    //Detects if the user is using a mobile device, this is needed
    //because there were style issues when viewing speaker bios
    //www.jquery4u.com/mobile/jquery-detect-mobile-devices-iphone-ipod-ipad/
    var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
    if(agentID) {
        //alert('mobile device');
    }
    
  
    /***********************************************************
    Gets speaker's information when their Name is clicked or
    their image is clicked
    ***********************************************************/
    $(".speaker-name, .thumbnail, .topic").click(function() {
        //This variable stores the class of the element clicked 
        //(The speaker name, or the speaker (thumbnail) image).
        //Based on the class, the variables to store the speakers information
        //will point to the correct elements.
        var elementClass = $(this).attr("class");
        //If the user clicks on the name
        if(elementClass == "speaker-name") {
            //Store info in variables
            speakerImg = $(this).prev().attr("src");
            //Cut off the end of the src attribute so we can use the full image
            var speakerImgFull = speakerImg.slice(0,speakerImg.length-4);
            speakerName = $(this).html();
            speakerTitle = $(this).next().next().html(); //There is an extra .next() because of the <br> element
            speakerBio = $(this).next().next().next().html();
        }
        //If the user clicks on the talk topic, i.e. 4 hour work week for ruby developers
        else if(elementClass == "topic")
        {
            //alert($(this).parent().parent().prev().prev().prev().prev().attr('src'));
            //Store info in variables
            speakerImg = $(this).parent().parent().prev().prev().prev().prev().attr('src');
            //Cut off the end of the src attribute so we can use the full image
            var speakerImgFull = speakerImg.slice(0,speakerImg.length-4);
            speakerName = $(this).parent().parent().prev().prev().prev().html();
            speakerTitle = $(this).parent().parent().prev().prev().html();
            speakerBio = $(this).parent().parent().html();
        }
        //Otherwise, the user clicked on the image
        else {
            //Store info in variables
            speakerImg = $(this).attr("src");
            //Cut off the end of the src attribute so we can use the full image
            var speakerImgFull = speakerImg.slice(0,speakerImg.length-4);
            speakerName = $(this).next().html();
            speakerTitle = $(this).next().next().next().html();
            speakerBio = $(this).next().next().next().next().html();
        }
        
        /* Changes the pointer back to default when it is hovering over
        the topic title */
        $(".topic").hover(function() {
            $(this).css("cursor","default");
        });
        
        /* 
        * Smooth scrolling so if the user clicks on a speaker further
        * down on the list, is scrolls up so they can see the full bio.
        * https://github.com/kswedberg/jquery-smooth-scroll
        */
        $.smoothScroll({
			scrollTarget: $("#speaker-list"),
			offset: -140
		});

        
        /*********************************
        For mobile devices
        *********************************/
        if(agentID) {
            $("#speaker-list").fadeToggle("fast","linear",function() {   
                //Don't display 'back to speakers' image
                $(".speaker-header").css("display","none");
                //Display 'back to speakers' text
                $("#back-txt").fadeToggle("fast","linear");
                
                //Display individual speaker bio
                $("#speaker-bio").css("display","block");
                $("#speaker-bio").append("<figure></figure>");
                $("figure").append("<span class='speaker-name'>"+speakerName+"</span> <br />");
                $("figure").append("<span class='speaker-title'>"+speakerTitle+"</span>");
                $("figure").append("<summary></summary>");
                $("figure summary").append(speakerBio);
                $("#speakers").css("padding-bottom","600px");
                
                //Set styles for mobile version
                $("figure").css("float","none");
                $("figure").css("bottom","0px");
                $("figure").css("left","50px");
                $("figure").css("top","150px");
                $(".speaker-name").css("font-size","36pt");
                $(".speaker-title").css("font-size","26pt");
                $("figure summary p").css("font-size","20pt");
                $("figure summary p").css("width","800px");
            });
        }
        
        /*********************************
        For non-mobile
        *********************************/
        else {
            //Fade out the Speaker Section title and image 
            $(".speaker-header").fadeToggle("fast","linear");
            
            //Fade out the speaker list, and append the speaker's
            //information based on which speaker was clicked.
            //Also add the new Speaker Section Title and Image
            $("#speaker-list").fadeToggle("fast","linear",function() {     
                //If browser window is 550px or less, then don't display
                //the 'Back To Speakers' Image
                if($(window).width() <= 551) {
                    $(".speaker-header").css("display","none");
                    $("#back-txt").fadeToggle("fast","linear");
                }
                //Otherwise display both text and image
                else {
                    $(".back-speakers").fadeToggle("fast","linear");
                }
            
                $("#speaker-bio").css("display","block");
                $("#speaker-bio").append("<div id='img-container'></div>");
                $("#img-container").append("<img src='"+speakerImgFull+"-full.png' class='full-img' alt='"+speakerName+"' Title='"+speakerName+"' />");
                $("#speaker-bio").append("<figure></figure>");
                $("figure").append("<span class='speaker-name'>"+speakerName+"</span> <br />");
                $("figure").append("<span class='speaker-title'>"+speakerTitle+"</span>");
                $("figure").append("<summary></summary>");
                $("figure summary").append(speakerBio);
                $("#speakers").css("padding-bottom","600px");
            });
        }
    });
    
    //Change the cursor to a pointer, when hovering over the back arrow or text (BACK TO SPEAKERS)
    $(".back-speakers").hover(function() {
        $(this).css("cursor","pointer");
    });
    
    //Fade out the individual speaker's bio, and bring back the list of speakers
    $(".back-speakers").click(function() {          
        //Fade out individual bio, and bring back list
        $("#speaker-bio").fadeToggle("fast","linear",function() {
        
            /* Changes the cursor back to a pointer when it is hovering over
            the topic title */
            $(".topic").hover(function() {
                $(this).css("cursor","pointer");
            });
             
            $("#speaker-bio").html("");
            
            /*********************************
            For mobile devices
            *********************************/
            if(agentID) {
                $(".speaker-header").css("display","none");
                $("#back-txt").fadeToggle("fast","linear");
                $("#speaker-txt").fadeToggle("fast","linear");
            }
            
            /*********************************
            For mobile devices
            *********************************/
            else {
                if($(window).width() <= 551) {
                    $(".speaker-header").css("display","none");
                    $("#back-txt").fadeToggle("fast","linear");
                    $("#speaker-txt").fadeToggle("fast","linear");
                }
                else {
                    $(".back-speakers").css("display","none");
                    //Fade in the Speaker Section title and image 
                    $(".speaker-header").fadeToggle("fast","linear");
                }
            }
            
            $("#speaker-list").css("display","block");
            $("#speakers").css("padding-bottom","0px");
        });
    });

});