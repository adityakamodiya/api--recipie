  let ul = document.querySelector("#recipeList")
  let para = document.querySelector("#recipeReadyInMinutes")
function Myfunc(){
fetch("https://content.newtonschool.co/v1/pr/64996337e889f331d43f70ba/recipes")
.then((Response)=>Response.json())
.then((result)=>{
    console.log(result)
     showresult(result);
}
)
}

let li
Myfunc();



function showresult(result)


{

for(let i =0;i< result.length;i++){
     li = document.createElement("li")
    // console.log(li)
    li.innerHTML = result[i].title
    ul.append(li)
     li.onclick =()=>{
        console.log("hello")
        para.innerHTML =  "READY IN MINUTS... "+ result[i].readyInMinutes
     }
    
    
}




console.log(li)
}
 