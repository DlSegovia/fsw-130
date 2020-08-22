import React from 'react';
import { connect } from 'react-redux';
import { startTimer, stopTimer, resetTimer } from './redux/actions';


// Helper function that takes store state
// and returns the current elapsed time
function getElapsedTime(baseTime, startedAt, stoppedAt = new Date().getTime()) {

  if (!startedAt) {
    return 0;
  } else {
    return stoppedAt - startedAt + baseTime;
  }
}

class Timer extends React.Component {
  componentDidMount() {
    this.interval = setInterval(this.forceUpdate.bind(this), this.props.updateInterval || 0);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { baseTime, startedAt, stoppedAt } = this.props;
    const elapsed = getElapsedTime(baseTime, startedAt, stoppedAt);

    return (
      <div className= 'container'>
        <div className='clock'>
         .0 {elapsed / 3600000 < 1 ? " " : Math.floor(elapsed / 3600000) + " "}
         .0 {elapsed / 60000 < 1 ? " " : Math.floor(elapsed / 60000) + " "}
         .0 {Math.floor(elapsed / 1000)}
         .0 {elapsed}
        </div>
        <div className='btn-row'>
          <button className='play'
            onClick={() => {
              this.props.dispatch(startTimer(elapsed))
            }}>
            Start</button>
          <button className='stop'
            onClick={() => this.props.dispatch(stopTimer())
            }>
            Stop</button>
          <button className='reset'
            onClick={() => this.props.dispatch(resetTimer())
            }>
            Reset</button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { baseTime, startedAt, stoppedAt } = state;
  return { baseTime, startedAt, stoppedAt };
}



export default connect(mapStateToProps)(Timer)