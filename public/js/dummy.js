Minu = {
    Vanus : null,
    Pikkus: null,
    Kaal  : null
}

KuvaAndmed = {
    laadiAndmed : function() {
        this.kuvaKaal();
        this.kuvaPikkus();
        this.kuvaVanus();
    },
    kuvaVanus : function() {
        $("#vanus").append(Minu.Vanus);
    },
    kuvaPikkus : function() {
        $("#pikkus").append(Minu.Pikkus);
    },
    kuvaKaal : function() {
        $("#kaal").append(Minu.Kaal);
    }
}

$(document).ready(function() {
    $("a").click(function() {
        alert("Hello world");
    });
    Minu.Vanus = 28;
    Minu.Pikkus = 180;
    Minu.Kaal = 75;
    KuvaAndmed.laadiAndmed();
    
});

jQuery(document).ready(function() {
    /*$("a").click(function() {
        alert("Hello world");
    });*/
    $("#orderedlist").addClass("red");
    $("#orderedlist > li").addClass("blue");
    $("#orderedlist li:last").hover(function() {
        $(this).addClass("green");
    },function(){
        $(this).removeClass("green");
    });
    $("#orderedlist").find("li").each(function(i) {
        $(this).append( " BAM! " + i );
    });
    $("#reset").click(function() {
        $("form")[0].reset();
    });
    $("#reset").click(function() {
        $("form").each(function() {
            this.reset();
        });
    });
    $("li").not(":has(ul)").css("border", "1px solid black"); 
    $("a[name]").css("background", "#eee" );
    $('#faq').find('dd').hide().end().find('dt').click(function() {
        $(this).next().slideToggle();
    });
});

 $(function() {
   $("a").click(function() {
     alert("Hello world!");
   });
 });
 
   function addClickHandlers() {
   $("a.remote", this).click(function() {
     $("#target").load(this.href, addClickHandlers);
   });
 }
 $(document).ready(addClickHandlers);
 
 //Post Example.
 $(document).ready(function() {
   // generate markup
   $("#rating").append("Please rate: ");
   
   for ( var i = 1; i <= 5; i++ ) {
     $("#rating").append("<a href='#'>" + i + "</a> ");
   }
   
   // add markup to container and apply click handlers to anchors
   $("#rating a").click(function(e) {
     // stop normal link click
     e.preventDefault();
     
     // send request
     $.post("rate.php", {rating: $(this).html()}, function(xml) {
       // format and output result
       $("#rating").html(
         "Thanks for rating, current average: " +
         $("average", xml).text() +
         ", number of votes: " +
         $("count", xml).text()
       );
     });
   });
 });