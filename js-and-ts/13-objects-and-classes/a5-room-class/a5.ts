class Room {
  furniture: string[];
  constructor(public width: number, public height: number) {
    this.furniture = [];
  }
  getArea() {
    return this.width * this.height;
  }
  addFurniture(newFurniture: string) {
    this.furniture.push(newFurniture);
  }
}
const room = new Room(4.5, 6.0);
console.log(room); //Room { width: 4.5, height: 6 }

const area = room.getArea();
console.log(area); //27

room.addFurniture("sofa");
room.addFurniture("bed");
room.addFurniture("chair");
console.log(room);
//Room { width: 4.5, height: 6, furniture: [ 'sofa', 'bed', 'chair' ] }
