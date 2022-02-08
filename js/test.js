
class Storage {
  constructor(items) { 
      
    }

    getItem() {
        return items
    }

    addItem(newItem) {
        items.push(newItem)
    }

    removeItem(itemToRemove) {
        const index = items.indexOf(itemToRemove)
        items.splice(index, 1)
    }
}

// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
