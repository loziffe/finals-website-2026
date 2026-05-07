let apps = [["Placeholder","assets/iconPlaceholder.png", 0,0],["OK","assets/SCARYICON.png", 0,128]]

apps.forEach(getArray)

function getArray(value, index, array){
  console.log(value,index)
//make the friggen icon yo!
  const icon = document.createElement("img")
  icon.style.position = "fixed"
  icon.src = value[1]
  icon.style.marginLeft = value[2]+"px"
  icon.style.marginTop = value[3]+"px"
  

  document.body.appendChild(icon)
  icon.style.zIndex = "1"

//make the frieakinf text!!! whoa-ho!
  const iconLabel = document.createElement("p")
  iconLabel.style.position = "fixed"
  iconLabel.textContent = value[0]
  iconLabel.style.color = "white" 
  iconLabel.style.marginLeft = value[2]+16+"px"
  iconLabel.style.marginTop = value[3]+50+"px" 
  document.body.appendChild(iconLabel)
  iconLabel.style.zIndex = "2"
}