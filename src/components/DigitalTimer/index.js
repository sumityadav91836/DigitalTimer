import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    isTimerRunning: false,
    elapsedTimeInSeconds: 0,
    defaultTimeInMinutes: 25,
  }

  renderTimerController = () => {
    const {isTimerRunning} = this.state

    const iconImg = isTimerRunning
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'

    const iconAltText = isTimerRunning ? 'pause icon' : 'play icon'

    return (
      <div className="timer-controller-container">
        <button className="timer-button" type="button">
          <img src={iconImg} alt={iconAltText} className="icon" />
          <p className="timer-icon-text">{isTimerRunning ? 'Pause' : 'Play'}</p>
        </button>
        <button className="timer-button" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
            alt="reset-icon"
            className="icon"
          />
          <p className="timer-icon-text">Reset</p>
        </button>
      </div>
    )
  }

  getElapsedTimeInSeconds = () => {
    const {elapsedTimeInSeconds, defaultTimeInMinutes} = this.state

    const totalRemainingTimeInSec =
      defaultTimeInMinutes * 60 - elapsedTimeInSeconds
    const minutes = Math.floor(totalRemainingTimeInSec / 60)
    const seconds = Math.floor(totalRemainingTimeInSec % 60)

    const stringifiedTimeMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedTimeSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedTimeMinutes}:${stringifiedTimeSeconds}`
  }

  renderTimerLimitController = () => {
    const {defaultTimeInMinutes} = this.state

    return (
      <div className="timer-limit-container">
        <button
          className="timer-limit-button"
          type="button"
          onClick={this.onDecreaseTimer}
        >
          -
        </button>
        <div className="timer-limit-container">
          <p className="timer-limit">{defaultTimeInMinutes}</p>
        </div>
        <button
          className="timer-limit-button"
          type="button"
          onClick={this.onIncreaseTimer}
        >
          +
        </button>
      </div>
    )
  }

  render() {
    const {isTimerRunning} = this.state

    return (
      <div className="bg-container">
        <h1 className="title-heading">Digital Timer</h1>
        <div className="content-area">
          <div className="bg-img">
            <div className="timer-container">
              <h1 className="timer-text">{this.getElapsedTimeInSeconds}</h1>
              <p className="timer-status">
                {isTimerRunning ? 'Running' : 'Paused'}
              </p>
            </div>
          </div>
          <div className="timer-controller">
            {this.renderTimerController()}
            <p className="set-timer-text">Set Timer Limit</p>
            {this.renderTimerLimitController}
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
