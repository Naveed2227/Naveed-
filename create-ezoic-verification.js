const fs = require('fs');
const path = require('path');

// Token from Ezoic
const token = 'ezoic-xCZrdIDEznD0RgIZa0rqhbAgNZoQdU';

// Path to public folder
const publicFolder = path.join(__dirname, 'public');
if (!fs.existsSync(publicFolder)) {
  fs.mkdirSync(publicFolder);
}

// File path
const filePath = path.join(publicFolder, `${token}.html`);

// HTML content
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Ezoic Verification</title>
</head>
<body>
${token}
</body>
</html>`;

// Write file
fs.writeFileSync(filePath, htmlContent, 'utf8');
console.log(`Ezoic verification file created at: ${filePath}`);
