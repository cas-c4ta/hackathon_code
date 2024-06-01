class Kreatur {
  constructor(x, y, s) {
    this.position = {
      x: x,
      y: y
    };
    this.size = s;
  }

  display() {
    push();
    noFill();
    ellipse(this.position.x, this.position.y, this.size);
    triangle(this.position.x, this.position.y, this.position.x +10, this.position.y, this.position.x + 20, this.position.y +10);
    pop();
  }

  move() {
    let newX= this.position.x + int(random(-10, 10));
    let newY= this.position.y + int(random(-10, 10));
    this.position = {x: newX, y: newY};
    console.log(this.position);
  }
}

// functional programming

/**
 * Creates a creature with position and size properties, and provides methods to display and move it.
 * @param {Object} props - The properties object.
 * @param {number} props.x - The initial x-coordinate of the creature.
 * @param {number} props.y - The initial y-coordinate of the creature.
 * @param {number} props.size - The size of the creature.
 * @returns {Object} An object containing the creature's properties and methods to display and move it.
 */
const useCreature = props => {
  let { x, y, size } = props;

  const display = () => {
    push();
    noFill();
    ellipse(x, y, size);
    triangle(x, y, x +10, y, x + 20, y +10);
    pop();
  }

  const move = () => {
    x = x + int(random(-10, 10));
    y = y + int(random(-10, 10))
  }

  return { x, y, size, display, move };
} 
