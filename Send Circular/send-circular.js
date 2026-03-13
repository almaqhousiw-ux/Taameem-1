const fileInput = document.getElementById("fileInput")
const fileList = document.getElementById("fileList")

fileInput.addEventListener("change", function(){

const file = fileInput.files[0]

if(file){

const li = document.createElement("li")

li.textContent = file.name

fileList.appendChild(li)

}

})