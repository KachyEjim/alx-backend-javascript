// Import the file system module
const fs = require('fs');

// Generate files asynchronously
for (let i = 0; i < 10; i++) {
  const filePath = `${i}-main.js`;
  const fileContent = 'node';

  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      return console.error(`Error writing file: ${err}`);
    }
    console.log(`File created successfully at ${filePath}`);
  });
}
