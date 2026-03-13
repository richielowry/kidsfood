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

const name = document.createElement("div")
name.className="menu-name"
name.innerText=item.name

const select = document.createElement("select")
select.multiple=true

kids.forEach(k=>{
const option=document.createElement("option")
option.value=k
option.text=k
select.appendChild(option)
})

div.appendChild(img)
div.appendChild(name)
div.appendChild(select)

container.appendChild(div)

})
}

createMenu(pastaOptions,"pastaMenu")
createMenu(kidsMeals,"kidsMenu")

function saveSelections(){

const data={}

data.marcLunch=document.getElementById("marcLunch").value
data.kennyLunch=document.getElementById("kennyLunch").value
data.roseLunch=document.getElementById("roseLunch").value

const selects=document.querySelectorAll("select")

data.menuSelections=[]

selects.forEach(s=>{

const selected=[...s.selectedOptions].map(o=>o.value)

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

const selects=document.querySelectorAll("select")

selects.forEach((s,i)=>{

const selections=data.menuSelections[i]||[]

[...s.options].forEach(o=>{
if(selections.includes(o.value)){
o.selected=true
}
})

})
}

window.onload=loadSelections
