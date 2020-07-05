/*
*
*     This is a file to make the process of creating a webpage easier and faster
*
*   client = new Paho.MQTT.Client(location.hostname, Number(location.port), "clientId");
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;
    client.connect({onSuccess:onConnect});

    function onConnect() {
      // Once a connection has been made, make a subscription and send a message.
      console.log("onConnect");
      client.subscribe("/World");
    };
    function onConnectionLost(responseObject) {
      if (responseObject.errorCode !== 0)
    	console.log("onConnectionLost:"+responseObject.errorMessage);
    };
    function onMessageArrived(message) {
      console.log("onMessageArrived:"+message.payloadString);
      //client.disconnect();
    };


    message = new Paho.MQTT.Message("Hello");
    message.destinationName = "/World";
    client.send(message);


*
*
*
*/



function write(I,O,T){//I=input O=output T=true/false
  var inp = document.getElementById(I);
  var out = document.getElementById(O);
  if(T==true){
    out.innerHTML = out.innerHTML + " - " + inp.value;
  }else{
    out.innerHTML = inp.value;
  }
}

function loop(w,x){//function to call for a loop x is for theamount of time
  setInterval(w, x);
}
