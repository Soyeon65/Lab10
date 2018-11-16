var start =  new Date().getTime();

function stopTime() {
  var end = new Date().getTime();
  var myAlert = alert("You have been on the page for: " + ((end-start)/1000) + " seconds");
  console.log(myAlert);
}
