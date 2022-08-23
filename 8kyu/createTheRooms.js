// Escape the room

// You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each being a hash table with at least three properties (e.g. name, description, completed).

// Solution:
class Room{
    constructor(name, description, completed){
      this.name = name;
      this.description = description;
      this.completed = completed;
    }
  }
  
const rooms = {
    bedroom: new Room('Bedroom', 'It has beds', true),
    bathroom: new Room('Bathroom', 'It has toilets', true),
    attic: new Room('Attic', 'It has spiders', false)
}