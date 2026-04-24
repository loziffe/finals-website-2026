const fs = require('fs');
const files = fs.readdirSync('./assets/buttons');

files.forEach(file => {
  const img = document.createElement('img');
    img.src = file;
    img.alt = 'Hi';
    document.footer.appendChild(img);

});




// file loop help https://stackoverflow.com/questions/32511789/looping-through-files-in-a-folder-node-js