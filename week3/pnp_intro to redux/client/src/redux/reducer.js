
const initialTimer = {
  startedAt: 0,
  stoppedAt: "",
  pauseAt: "",
  baseTime: "",
}

function reducer(timer = initialTimer,  payload ) {
  switch (payload.type) {
    case 'RESET_TIMER':
      return initialTimer
    case 'START_TIMER':
      return {
        ...timer,
        baseTime: payload.baseTime,
        startedAt: payload.now,
        stoppedAt: undefined,
      }

      case 'PAUSE_TIMER':
      return timer.pausAt ? timer : { ...timer, pauseAt: payload.now }

    case 'STOP_TIMER':
      return timer.stoppedAt ? timer : { ...timer, stoppedAt: payload.now }
    default:
      return timer
  }
}

export default reducer