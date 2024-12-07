class ElevatorCar {
  constructor(id) {
    // The elevator is programmed to only follow what the system knows is the minimum and the maximum floor
    this.currentFloor = 0
    this.direction = null
    this.floorQueue = []
    this.carId = id
    this.TAG = 'ElevatorCar' + this.carId
    console.log(this.TAG, 'Elevator car init')
    console.log(this.TAG, this.currentFloor)
  }

  announce() {
    console.log(this.TAG, 'Elevator car made')
  }

  moveElevator() {
    while (this.floorQueue.length > 0) {
      this.currentFloor = this.floorQueue[0]
      this.floorQueue.shift()
      console.log(this.TAG, 'moving elevator ', this.currentFloor)
    }
    // Queue finishes, return to 0?
    console.log(this.TAG, 'Finished moving, returning to floor')
    this.currentFloor = 0
    console.log(this.TAG, this.currentFloor)
  }
}

export default ElevatorCar
