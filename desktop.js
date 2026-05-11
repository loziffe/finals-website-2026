let appList = [["Find the Glaggle","assets/iconPlaceholder.png","https://scratch.mit.edu/projects/1238384849/embed", 0,0],["OK","assets/SCARYICON.png","Testing.html", 0,128],["Media Player","assets/audioIcon.png","mediaPlayer.html", 0,256],["Github","assets/GITHUB.png","windowTest.html", 0,364]]
let apps = []
//window.alert("W.I.P!")
appList.forEach(createIcon)

function createIcon(value, index, array){
  console.log(value,index)
//make the friggen icon yo!
  const iconContainer = document.createElement("span")
  const icon = document.createElement("img")
  icon.style.position = "fixed"
  icon.src = value[1]
  icon.style.marginLeft = value[3]+"px"
  icon.style.marginTop = value[4]+"px"
  

  iconContainer.appendChild(icon)
  icon.style.zIndex = "1"

//make the frieakinf text!!! whoa-ho!
  const iconLabel = document.createElement("p")
  //iconLabel.style.textAlign = "center"
  iconLabel.style.position = "fixed"
  iconLabel.textContent = value[0]
  iconLabel.style.color = "white" 
  iconLabel.style.left = icon.x + "px"
  iconLabel.style.top = value[4]+50+"px" 
  iconContainer.appendChild(iconLabel)
  iconLabel.style.zIndex = "2"

  document.body.appendChild(iconContainer)
  apps.push(iconContainer)
  console.log(apps)

  //setup onclick
  iconContainer.onclick = function() {iconClicked()};

  function iconClicked(){
    //window.alert(value[0])

    const iframeContainer = document.createElement("span")
    iframeContainer.style.border = "5px"
    iframeContainer.style.border = "solid"
    iframeContainer.style.borderColor = "rgb(201, 201, 201);"
    iframeContainer.style.backgroundColor = "rgb(206, 206, 206)"
    iframeContainer.style.borderRightColor = "rgb(97, 97, 97)"
    iframeContainer.style.borderBottomColor = "rgb(97, 97, 97)"
    //create window iframe
    const iframe = document.createElement("iframe")
    iframe.src = value[2]
    iframe.style.position = "absolute"
    iframe.style.left = "25%"
    iframe.style.top = "25%"
    iframe.style.height = "500px"
    iframe.style.width = "500px"
    iframe.style.overflow = "auto"
    iframe.style.scrollbarWidth = "none"
    //iframe.style.padding = "5px"
    iframeContainer.appendChild(iframe)
    document.body.appendChild(iframeContainer)
  }
}

