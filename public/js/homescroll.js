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
window.sr=ScrollReveal();
sr.reveal('.carousel',{
   duration:2000,
   origin:'right',
   distance:'300px'
});
sr.reveal('.welcome',{
   duration:2000,
   origin:'bottom',
   distance:'300px'
});
sr.reveal('.icons',{
   duration:2000,
   origin:'left',
   distance:'300px'
});
sr.reveal('.left-side',{
   duration:2000,
   origin:'left',
   distance:'300px'
});
sr.reveal('.I1',{
   duration:2000,
   origin:'right',
   distance:'300px'
});

sr.reveal('.card1',{
   duration:2000,
   origin:'left',
   distance:'300px'
});
sr.reveal('.card2',{
   duration:2000,
   origin:'bottom',
   distance:'300px'
});
sr.reveal('.card3',{
   duration:2000,
   origin:'right',
   distance:'300px'
});