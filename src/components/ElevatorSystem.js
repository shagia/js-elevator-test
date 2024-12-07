import ElevatorCar from './ElevatorCar.js'

const TAG = 'ElevatorSystem'

class ElevatorSystem {
  // Build the elevator system
  constructor() {
    this.elevatorCount = 1
    this.elevatorList = []
    this.minFloor = 0
    this.maxFloor = 10
    console.log(TAG, 'System init')
  }

  // Create the initialization
  init() {
    // Count how many elevators are present and make a new amount of elevators for them to push to the elevator list
    for (let i = 0; i < this.elevatorCount; i++) {
      const elevator = new ElevatorCar(i)
      this.elevatorList.push(elevator)
    }
  }

  // Make a function to add a floor onto the elevator queue

  addToQueue(elevator, floorNum) {
    console.log(TAG, 'Adding a new floor to queue: ', floorNum)
    this.elevatorList[elevator].floorQueue.push(floorNum)
    console.log(
      TAG,
      'Checking for current queue: ',
      this.elevatorList[elevator].floorQueue
    )
    // The queue is now updated - make the elevator move to the closest number by a sort
    // this.elevatorList[elevator].moveElevator(floorNum)
  }
  sortQueue(elevator) {
    this.elevatorList[elevator].floorQueue.sort((a, b) => a - b)
    console.log(TAG, 'Final queue: ', this.elevatorList[elevator].floorQueue)
    this.elevatorList[elevator].moveElevator()
  }
}

export default ElevatorSystem
