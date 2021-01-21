const fs = require('fs')
fs.readFile('./cards/set_1.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("Error reading file from disk:", err)
        return
    }
    try {
        const deck = JSON.parse(jsonString)
        console.log(deck);
        
    } catch(err) {
        console.log('Error parsing JSON string:', err)
    }
})
