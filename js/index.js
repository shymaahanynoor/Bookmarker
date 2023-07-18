var websiteURL=document.getElementById("websiteURL");
var BookmarkName=document.getElementById("BookmarkName");

productlist=[];
  
if(localStorage.getItem("list")!=null){
    productlist=JSON.parse(localStorage.getItem("list"));
    display()
}

function addElement(){
   var product={
        name:BookmarkName.value,
        url:websiteURL.value,

    }

     
        productlist.push(product);
        localStorage.setItem("list",JSON.stringify(productlist) )

        display()
}


function display(){

    temp=""
    for(var i=0;i<productlist.length;i++){
        temp+=`
        <div class="temp">
         <p class= "ms-2 w-25 fw-bolder fs-3 py-4 d-inline-block ">`+productlist[i].name+`</p>
         <button  class="btn btn-primary " ><a href=https://`+productlist[i].url+` target="_blank">Visit</a></button>
         <button onclick="deleted(`+i+`)"  class="btn btn-danger ms-2" >Delete</button>
        </div>
        `
    }
    document.getElementById("table").innerHTML=temp
 


}

function deleted(index){
    productlist.splice(index,1)
   display();

      localStorage.setItem("list",JSON.stringify(productlist) )


}


