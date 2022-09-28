import React from "react";
import Lottie from "react-lottie-player";

import lottieJson from "/public/robot.json";

export default function Animation() {
  return (
    <Lottie loop animationData={lottieJson} play style={{ height: 500 }} />
  );
}
