class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = "up";

  }

  start() {
    this.interval = setInterval( () => this.update,1000);
  }

  stop(){ 
    clearInterval(this.interval);
  }
  update() {
    this.log()
   }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() { 
    if(this.floor<10){
      this.floor ++
    }
  }
  floorDown() { 
    if( this.floor > 0){
      this.floor --
    }
    
  }
  call(person) {
    this.requests.push(person);
    console.log(this.requests.length);
   }
  log() {
    console.log(`Direction:${this.direction} Floor: ${this.floor}` )
   }
}

module.exports = Elevator;
