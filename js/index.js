
$('#UXbutton').on('mouseleave',function(){
    $("#myUX").slideUp("slow");
});
$('#UXbutton').on('click',function(){
    $("#myUX").slideDown("slow");
});
$('#UIbutton').on('mouseleave',function(){
    $("#myUI").slideUp("slow");
});
$('#UIbutton').on('click',function(){
    $("#myUI").slideDown("slow");
});