import birdie from './birdie'

const gameController = {
  init (game) {
   window.addEventListener('keydown', (e) => {
       if(e.key === 'j') {
           if(!game.hasStarted) {
               game.hasStarted = true
           }
           birdie.goUp()
       }
   })
  }
}

export default gameController
