window.onscroll=function(){
    scrollFunction()
};
function scrollFunction()
{
    if(document.body.scrollTop>50 || document.documentElement.scrollTop>50)
    {
        document.getElementById("navy").style.padding="10px 0px";
        document.getElementById("navy").style.transition="0.5s ";
        document.getElementById("navy").style.backgroundColor = "dodgerblue";
        document.getElementById("navy").style.transition="1s ";
        
    }
    else{
        document.getElementById("navy").style.padding="35px 0px";
        document.getElementById("navy").style.backgroundColor = "black";
        document.getElementById("navy").style.transition="1s ";
    }
}