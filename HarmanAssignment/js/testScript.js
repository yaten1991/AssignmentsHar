// Unit test case to click on button 

setTimeout(() => {
  unitTest();
}, duration);

async function unitTest() {
  let btnElement = [...document.getElementsByClassName('btnClass')];
  if (btnElement.length === buttonCount) {
    console.log(`Test case PASS, All ${buttonCount} buttons are available on UI.`);
  } else {
    console.log(`Test case FAIL, All ${buttonCount} buttons are not available on UI.`);
  }
}