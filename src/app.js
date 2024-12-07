import ElevatorSystem from './components/ElevatorSystem.js'

const System = new ElevatorSystem()

System.init()

const scenarioA = () => {
  console.log('Starting scenario A - basic up and down function')
  System.addToQueue(0, 3)
  System.addToQueue(0, 2)
  System.addToQueue(0, 9)
  System.sortQueue(0)
}

scenarioA()
