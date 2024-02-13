var imgList=Array.from(document.querySelectorAll(".item img"));
var ligthboxcontainer=document.getElementById("ligthboxcontainer");
var ligthboxitem=document.getElementById("ligthboxitem");
var nextBtn=document.getElementById("nextBtn");
var closeBtn=document.getElementById("closeBtn");
var prevBtn=document.getElementById("prevBtn");
var currentslidindex;
var big=document.getElementById("main");
var allimg=document.querySelectorAll(".photo img");
var count=0;
var value=document.getElementById("value");
var btns=document.querySelectorAll(".btn");
 
for (var i = 0; i < imgList.length; i++) {
    imgList[i].addEventListener("click",function (e) {
        ligthboxcontainer.classList.replace("d-none","d-flex")
        var imgsrc=e.target.getAttribute("src");
        currentslidindex=imgList.indexOf(e.target)
        ligthboxitem.style.backgroundImage=`url(${imgsrc})`
        
    })
}

nextBtn.addEventListener("click",nextslid)
prevBtn.addEventListener("click",prevslid)
closeBtn.addEventListener("click",closeslid)

function nextslid() {
    currentslidindex++
    if (currentslidindex>imgList.length) {
        currentslidindex=0
    }
    var imgsrc= imgList[currentslidindex].getAttribute("src")
    ligthboxitem.style.backgroundImage=`url(${imgsrc})`
}

function prevslid() {
    currentslidindex--
if (currentslidindex<0) {
    currentslidindex=imgList.length-1
}
    var imgsrc= imgList[currentslidindex].getAttribute("src")
    ligthboxitem.style.backgroundImage=`url(${imgsrc})`
}

function closeslid() {
    
ligthboxcontainer.classList.replace("d-flex","d-none")
}


for (var i = 0; i < allimg.length; i++) {
    allimg[i].addEventListener("click",function (p) {
      var change= p.target.getAttribute("src");
      big.setAttribute("src",change)  
    })
    
}
btns.forEach(function (btn) {
    btn.addEventListener("click",function(c){
        var style=c.currentTarget.classList;
        if (style.contains('decrease')) {
            count--
        }else if(style.contains('increase')){
          count++
        }else if(style.contains('rest')){
            count=0
        }
        if (count > 0) {
            value.style.color ="green";
        }
        if (count < 0) {
            value.style.color ="red";
        }
        if (count === 0) {
            value.style.color ="black";
        }
        value.textContent=count;
    })
})
