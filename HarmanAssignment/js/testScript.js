// Unit test case to click on button 

setTimeout(() => {
  unitTest();
}, 2000);

async function unitTest() {
  let btnElements = document.getElementsByClassName('btnClass');
  if (btnElements.length === 5) {
    console.log(`Test case PASS`);
  } else {
    console.log(`Test case FAIL`);
  }
}
