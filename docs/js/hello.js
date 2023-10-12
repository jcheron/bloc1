$=function(id) {
    return document.getElementById(id);
}

const bt= $("bt-hello");
console.log(bt);
bt && bt.addEventListener("click", function () {
        alert("Hello !!!!!!!!!");
    });

$("bt-clear").addEventListener("click",function(){
   document.body.innerHTML="";
});

$("bt-dom").addEventListener("click",function(){
    debugger;
    const h2=document.createElement("h2");
    h2.innerText="Sous titre ajouté dynamiquement";
    $("content").append(h2);
    const img=document.createElement("img");
    img.src="https://img.freepik.com/photos-gratuite/arrangement-emojis-pour-journee-mondiale-du-sourire_23-2149024495.jpg?w=1480&t=st=1697119058~exp=1697119658~hmac=f98b5405159a90f98de4eb9da9776563c549d09ffdf812b4e20a00740351e071";
    img.style.width="250px";
    $("content").appendChild(img);
});
