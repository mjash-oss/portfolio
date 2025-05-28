import React, {useContext} from "react";
import "./SplashScreen.css";
//import {greeting, splashScreen} from "../../portfolio";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {Player} from "@lottiefiles/react-lottie-player";
import blondLadyAnimation from "../../assets/lottie/blondladyJSON.json";

export default function SplashScreen() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      <div className="splash-animation-container">
        <Player
          autoplay
          loop
          src={blondLadyAnimation}
          style={{height: "300px", width: "300px"}}
        />
      </div>
      <div className="splash-title-container">
        <span className="grey-color"> &lt;</span>
        <span className="splash-title">{greeting.username}</span>
        <span className="grey-color">/&gt;</span>
      </div>
    </div>
  );
}
