const buttonString = 'Button';
const duration = 3000;
let buttonCount;

const setAttributes = (btnElement, attrs) => {
  Object.entries(attrs)
    .forEach(args =>
      btnElement.setAttribute(...args));
      btnElement.onclick = tempAlert;
}

buttonUIExecute = (btnNumber) => {
  let div = document.getElementById("btnView");
  buttonCount = btnNumber || 5;
  let attrs = { 'class': 'btnClass', 'type': 'button', 'value': '', 'id': '' };
  for (let i = 1; i <= buttonCount; i++) {
    let button = document.createElement("input");
    attrs.value = buttonString + ' ' + i;
    attrs.id = i;
    setAttributes(button, attrs);
    div.appendChild(button);
  }
}

tempAlert = (event) => {
  const divElement = document.createElement("div");
  divElement.setAttribute('class', 'popup');
  divElement.innerHTML = typeof event === 'object' ? `Button name: ${event.srcElement.value} Index: ${event.srcElement.id}` : event;
  setTimeout(() => {
    divElement.parentNode.removeChild(divElement);
  }, duration);
  document.body.appendChild(divElement);
}
