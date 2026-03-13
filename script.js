const kids = ["Marc","Kenny","Rose"]

const pastaOptions = [
{ name:"SPAGHETTI BOLOGNESE", img:"images/bolognese.jpg"},
{ name:"TAGLIATELLE CARBONARA", img:"images/carbonara.jpg"},
{ name:"TONNARELLI AMATRICIANA", img:"images/arrabbiata.jpg"},
{ name:"TAGLIATELLE CHICKEN ALFREDO", img:"images/chicken.jpg"},
{ name:"TONNARELLI PRAWNS AND ASPARAGUS", img:"images/prawn.jpg"},
{ name:"GNOCCHI SORRENTINA", img:"images/gnocchi.jpg"},
{ name:"RAVIOLI ITALIANI", img:"images/ravioli.jpg"},
{ name:"DOPPIO MEDITERRANEO", img:"images/doppio.jpg"},
{ name:"Sausage Pasta", img:"images/sausage.jpg"}
]

const kidsMeals = [
{ name:"Chips & Chicken Nuggets", img:"images/nuggets-chips.jpg"},
{ name:"Chips & Sausages", img:"images/sausages-chips.jpg"}
]

function createMenu(menu, containerId){

const container = document.getElementById(containerId)

menu.forEach(item =>{

const row = document.createElement("div")
row.className="menu-item"

const img = document.createElement("img")
img.src=item.img

const content = document.createElement("div")
content.className="menu-content"

const name = document.createElement("div")
name.className="menu-name"
name.innerText=item.name

const kidOptions = document.createElement("div")

kids.forEach(kid=>{

const label = document.createElement("label")
label.style.marginRight="15px"

const checkbox = document.createElement("input")
checkbox.type="checkbox"
checkbox.value=kid

label.appendChild(checkbox)
label.append(" "+kid)

kidOptions.appendChild(label)

})

content.appendChild(name)
content.appendChild(kidOptions)

row.appendChild(img)
row.appendChild(content)

container.appendChild(row)

})
}

function saveSelections(){

const data={}

data.marcLunch=document.getElementById("marcLunch").value
data.kennyLunch=document.getElementById("kennyLunch").value
data.roseLunch=document.getElementById("roseLunch").value

localStorage.setItem("kidsLunch",JSON.stringify(data))

document.getElementById("savedMessage").innerText="Saved!"
}

function init(){

createMenu(pastaOptions,"pastaMenu")
createMenu(kidsMeals,"kidsMenu")

}

window.onload = init
