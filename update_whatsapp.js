const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/5511999999999/g, '5561992852849');

fs.writeFileSync('index.html', html, 'utf8');
console.log('WhatsApp number updated.');
