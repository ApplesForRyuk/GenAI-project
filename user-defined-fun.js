function displayMessage() {
    alert("Hello World!");
  }
  displayMessage();
  displayMessage();
  
  function displayMessagewithParameter(message) {
    alert(message);
  }
  displayMessagewithParameter("Hello World!");
  displayMessagewithParameter("Goodbye World!");
  displayMessagewithParameter("Hello JavaScript!");
  
  function addNumbers(num1, num2) {
    return num1 + num2;
  }
  var result = addNumbers(5, 10);
  alert(result); // 15
  var result1 = addNumbers(100, 200);
  alert(result1); // 300
  var result2 = addNumbers("a", "b");
  alert(result2); // ab
  var result3 = addNumbers(100);
  alert(result3); // NaN