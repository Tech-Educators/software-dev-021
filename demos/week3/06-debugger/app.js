//code to test the debugger tool

function countToTen() {
  for (let i = 0; i <= 10; i++) {
    console.log(i);
    debugger; //this debugger will stop the code execution
  }
}

countToTen();

//You can add breakpoints on VSCode too by clicking on the specific lines (a dot will appear)
