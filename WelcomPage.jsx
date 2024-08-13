import './WelcomPage.css'

export default function WelcomPage() {
  return (
    <div className="welcom-page">
      <div className="rectangle-1">
      </div>
      <div className="status-bar-iphone">
        <div className="time">
          <span className="time-1">
          9:41
          </span>
        </div>
        <div className="levels">
          <img className="cellular-connection" src="assets/vectors/CellularConnection12_x2.svg" />
          <img className="wifi" src="assets/vectors/Wifi15_x2.svg" />
          <img className="battery" src="assets/vectors/Battery7_x2.svg" />
        </div>
      </div>
      <div className="bg-21">
      </div>
      <img className="container-1" src="assets/vectors/Container5_x2.svg" />
      <img className="ellipse-2" src="assets/vectors/Ellipse22_x2.svg" />
      <span className="welcome-home">
      WELCOME HOME
      </span>
      <div className="login">
        <span className="label-text">
        Login
        </span>
      </div>
      <span className="new-user-sign-in">
      New user? Sign in
      </span>
    </div>
  )
}