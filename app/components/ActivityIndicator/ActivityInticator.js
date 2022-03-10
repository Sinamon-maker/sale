import React from "react";
import LottieView from "lottie-react-native";

function ActivityInticator({ visible = false }) {
  if (!visible) return null;
  return (
    <LottieView
      autoPlay
      loop
      source={require("../../assets/animation/loader.json")}
    />
  );
}

export default ActivityInticator;
