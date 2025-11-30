export function greet(name) {
    return `Hello, ${name}!`
}

export function addCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export class Human {
  constructor(name) {
    this.name = name;
  }
  
  jump() {
    console.log(`${this.name} is jumping!`);
  }

  run() {
    console.log(`${this.name} is running!`);
  }
}