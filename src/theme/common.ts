"use strict";

import {Dimensions} from "react-native";
const {width, height} = Dimensions.get("window");
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

//Guideline sizes
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const navbarHeight = screenHeight - height;
export {scale, verticalScale, moderateScale, screenHeight, screenWidth};
