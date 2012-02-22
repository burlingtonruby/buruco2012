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
    var seeFullBio=false;     //If true, it means that an individual speaker bio is visible

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
        seeFullBio = true;
        
        //Fade out the Speaker Section title and image 
        $("#speakers header img, #speakers header h1").fadeToggle("slow","linear");
        
        //Fade out the speaker list, and append the speaker's
        //information based on which speaker was clicked.
        //Also add the new Speaker Section title and image
        $("#speaker-list").fadeToggle("slow","linear",function() {
            $("#speakers header").append("<img class='section-header' src='btv-assets/arrow.png' alt='Back To Speakers' Title='Back To Speakers' />");
            $("#speakers header").append("<h1>BACK TO SPEAKERS</h1>");
            $("#speaker-bio").css("display","block");
            $("#speaker-bio").append("<div id='img-container'></div>");
            $("#img-container").append("<img src='"+speakerImg+"' width='300' height='300' alt='John Smith' Title='John Smith' />");
            $("#speaker-bio").append("<figure></figure>");
            $("figure").append("<span class='speaker-name'>"+speakerName+"</span> <br />");
            $("figure").append("<span class='speaker-title'>"+speakerTitle+"</span>");
            $("figure").append("<summary></summary>");
            $("summary").append(speakerBio);
            $("#speakers").css("padding-bottom","600px");
        });
    });
    
    //Change the cursor to a pointer, when hovering over the back arrow or text (BACK TO SPEAKERS)
    $("#speakers header").hover(function() {
        if(seeFullBio) {
            $(this).css("cursor","pointer");
        }
    });
    
    //Fade out the individual speaker's bio, and bring back the list of speakers
    $("#speakers header").click(function() {
        if(seeFullBio) {
            //Fade out the Speaker Section title and image 
            $("#speakers header img, #speakers header h1").fadeToggle("slow","linear");
            
            //Fade out individual bio, and bring back list
            $("#speaker-bio").fadeToggle("slow","linear",function() {
                $("#speaker-bio").html("");
                $("#speaker-list").css("display","block");
                $("#speakers").css("padding-bottom","0px");
            });
        }
    });

});