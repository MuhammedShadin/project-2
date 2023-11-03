function buttonClick(val){
    document.getElementById("listing").value+=val;
}
function erase(){
    document.getElementById("listing").value=""
}
function buttonClicked(){
    var text=document.getElementById("listing").value
    var result=eval(text)
    document.getElementById("listing").value=result
}
$(document).ready(function(){
    $("#bttn").mouseenter(function(){
        $(this).css({"background":"yellow"})
    })
})