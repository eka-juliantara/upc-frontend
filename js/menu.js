$(document).ready(function (){
    if($(document).width() <= 750)
    {
        $(".menu").hide();
        $(".closebtn").hide();
    }
})
function openNav() {
    $(".menu").slideToggle("slow");
    $(".menu").show();
    $(".closebtn").show();
    $(".openbtn").hide();
    if($(document).scrollTop() >= 85 && $(window).width() <= 550 && $(window).width() > 400 )
    {
        document.getElementById('isi').style.top = "372px";
    } else if ($(document).scrollTop() >= 85 && $(window).width() <= 400 && $(window).width() > 100 ) {
        document.getElementById('isi').style.top = "372px";
    }
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    $(".menu").slideToggle("slow");
    $(".openbtn").show();
    $(".closebtn").hide();
    var b = 1;
    if($(document).scrollTop() >= 40)
    {
        document.getElementById('isi').style.top = "60px";
    }
}
