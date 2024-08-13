import './HomePage.css'

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="rectangle-1">
      </div>
      <img className="menu-slider" src="assets/vectors/MenuSlider5_x2.svg" />
      <div className="container-5">
        <div className="status-bar-iphone">
          <div className="time">
            <span className="time-1">
            9:41
            </span>
          </div>
          <div className="levels">
            <img className="cellular-connection" src="assets/vectors/CellularConnection7_x2.svg" />
            <img className="wifi" src="assets/vectors/Wifi2_x2.svg" />
            <img className="battery" src="assets/vectors/Battery16_x2.svg" />
          </div>
        </div>
        <div className="search-bar">
          <div className="state-layer">
            <div className="container-1">
              <div className="leading-icon">
                <div className="container-2">
                  <img className="icon" src="assets/vectors/Icon6_x2.svg" />
                </div>
              </div>
              <div className="content">
                <span className="supporting-text">
                Hinted search text
                </span>
              </div>
            </div>
            <div className="trailing-elements">
              <div className="container-3">
                <img className="icon-1" src="assets/vectors/Icon_x2.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <img className="rectangle-3" src="assets/vectors/Rectangle31_x2.svg" />
        <div className="living-room">
        Living room
        </div>
        <div className="building-blocks-segmented-button-button-segmentend">
          <div className="container-4">
            <span className="label-text">
            Go back
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}