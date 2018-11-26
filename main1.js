var slider = document.getElementById("slider-main");
var outputText = document.getElementById("print-text");

slider.oninput = function() {
    keeper(this.value);
}
function keeper(value) {
    if(value<=19) {
        outputText.innerHTML= "Please get me out of here!";
        outputText.style.color = "#f93131";
        slider.setAttribute("id", "slider2");
        slider.style.background  = "#f93131";
        $(slider).removeClass();
        $(slider).addClass("slider-main slider3");

    } else if (value<= 40){
        outputText.innerHTML= "No arguments, no party either";
        outputText.style.color = "#cb3037";
        slider.style.background  = "#cb3037";
         $(slider).removeClass();
        $(slider).addClass("slider-main slider2");
    
    } else if (value<= 60){
        outputText.innerHTML= "The workload was all right, I did just fine";
        outputText.style.color = "#cd8e2e";
        slider.style.background  = "#cd8e2e";
         $(slider).removeClass();
        $(slider).addClass("slider-main slider");
    
    }  else if (value<= 90){
        outputText.innerHTML= "I went the extra mile!";
        outputText.style.color = "#9ba541";
        slider.style.background  = "#9ba541";
         $(slider).removeClass();
        $(slider).addClass("slider-main slider4");
    
    }
    else if (value<= 100){
        outputText.innerHTML= "I'm growing a monster knowledge base!!!";
        outputText.style.color = "#58д970";
        slider.style.background  = "#58д970";
         $(slider).removeClass();
        $(slider).addClass("slider-main slider5");
    
    }

}