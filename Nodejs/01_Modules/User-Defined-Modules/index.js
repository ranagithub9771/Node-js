// console.log("hii");

//!commonJS way
// const {greet,add} = require("./function.js");
// const substraction = require("./Utilities.js");

// greet();
// add(20,34);
// substraction(30,20);

//! ES module way (Recommended);

import {greet,add} from "./function.js";
import substract from "./Utilities.js";

greet();
substract(40,30);
