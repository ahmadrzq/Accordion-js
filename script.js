const btn = document.getElementsByClassName("btn");

for (let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', function(){
        const panel = this.nextElementSibling;
        if(panel.style.display === "block"){
            panel.style.display = "none";
        }else{
            panel.style.display = "block";
        }
    });
}