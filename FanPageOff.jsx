import './FanPageOff.css'

export default function FanPageOff() {
  return (
    <div className="fan-page-off">
      <img className="menu-slider" src="assets/vectors/MenuSlider12_x2.svg" />
      <div className="container">
        <div className="status-bar-iphone">
          <div className="time">
            <span className="time-1">
            9:41
            </span>
          </div>
          <div className="levels">
            <img className="cellular-connection" src="assets/vectors/CellularConnection8_x2.svg" />
            <img className="wifi" src="assets/vectors/Wifi_x2.svg" />
            <img className="battery" src="assets/vectors/Battery4_x2.svg" />
          </div>
        </div>
        <div className="fan-bg">
        </div>
        <div className="fan-value">
          <div className="container-1">
            <div className="handle">
              <div className="state-layer">
              </div>
            </div>
            <div className="inactive-track">
              <div className="discrete-dots">
                <div className="track-dot-2">
                  <div className="dot">
                  </div>
                </div>
                <div className="track-dot-3">
                  <div className="dot-1">
                  </div>
                </div>
                <div className="track-dot-4">
                  <div className="dot-2">
                  </div>
                </div>
                <div className="track-dot-5">
                  <div className="dot-3">
                  </div>
                </div>
                <div className="track-dot-6">
                  <div className="dot-4">
                  </div>
                </div>
                <div className="track-dot-7">
                  <div className="dot-5">
                  </div>
                </div>
                <div className="track-dot-8">
                  <div className="dot-6">
                  </div>
                </div>
                <div className="track-dot-9">
                  <div className="dot-7">
                  </div>
                </div>
                <div className="track-dot-10">
                  <div className="dot-8">
                  </div>
                </div>
                <div className="track-dot-11">
                  <div className="dot-9">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="value-indicator">
            <span className="label-text-1">
            0
            </span>
          </div>
        </div>
        <div className="go-back">
          <div className="container-2">
            <span className="label-text">
            Go back
            </span>
          </div>
        </div>
      </div>
      <div className="toggle">
        <div className="knob">
        </div>
      </div>
      <span className="living-room-fan-is-off">
      Living room fan is off
      </span>
    </div>
  )
}