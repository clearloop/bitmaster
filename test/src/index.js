//index.js
import _ from "lodash";
import "./index.css"

function component() {
  var element = document.createElement('div');
  // Lodash, currently included via a script, is required for this line to work

	element.innerHTML = _.join(['Hello', 'scheme'], ' ');

  return element;
}

document.body.appendChild(component());

