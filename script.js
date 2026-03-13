const kids = ["Marc","Kenny","Rose"]

const pastaOptions = [
{ name:"Spaghetti Carbonara", img:"images/carbonara.jpg"},
{ name:"Spaghetti Bolognese", img:"images/bolognese.jpg"},
{ name:"Penne Arrabbiata", img:"images/arrabbiata.jpg"},
{ name:"Pesto Pasta", img:"images/pesto.jpg"},
{ name:"Sausage Pasta", img:"images/sausage-pasta.jpg"}
]

const kidsMeals = [
{ name:"Chips & Chicken Nuggets", img:"images/nuggets-chips.jpg"},
{ name:"Chips & Sausages", img:"images/sausages-chips.jpg"}
]

function createMenu(menu, containerId){

const container = document.getElementById(containerId)

menu.forEach(item =>{

const div = document.createElement("div")
div.className="menu-item"

const img = document.createElement("img")
img.src=item.img

const content = document.createElement("div")
content.className="menu-content"

const name = document.createElement("div")
name.className="menu-name"
name.innerText=item.name

const kidChoices = document.createElement("div")
kidChoices.className="kid-options"

kids.forEach(k=>{

const label = document.createElement("label")

const checkbox = document.createElement("input")
checkbox.type="checkbox"
checkbox.value=k

label.appendChild(checkbox)
label.append(" "+k)

kidChoices.appendChild(label)

})

content.appendChild(name)
content.appendChild(kidChoices)

div.appendChild(img)
div.appendChild(content)

container.appendChild(div)

})
}

function saveSelections(){

const data={}

data.marcLunch=document.getElementById("marcLunch").value
data.kennyLunch=document.getElementById("kennyLunch").value
data.roseLunch=document.getElementById("roseLunch").value

const menus=document.querySelectorAll(".menu-item")

data.menuSelections=[]

menus.forEach(menu=>{

const checks = menu.querySelectorAll("input[type=checkbox]:checked")

const selected=[...checks].map(c=>c.value)

data.menuSelections.push(selected)

})

localStorage.setItem("kidsMenu",JSON.stringify(data))

document.getElementById("savedMessage").innerText="Saved!"
}

function loadSelections(){

const saved=localStorage.getItem("kidsMenu")

if(!saved) return

const data=JSON.parse(saved)

document.getElementById("marcLunch").value=data.marcLunch||""
document.getElementById("kennyLunch").value=data.kennyLunch||""
document.getElementById("roseLunch").value=data.roseLunch||""

}

function init(){

createMenu(pastaOptions,"pastaMenu")
createMenu(kidsMeals,"kidsMenu")

loadSelections()

}

window.onload = init
