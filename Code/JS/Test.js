var xmlhttp = new XMLHttpRequest();
var myObj;// = JSON.parse(this.responseText);
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myObj = JSON.parse(this.responseText);
    console.log(myObj.sequences[0].sequence[0].zone);
    console.log(getZoneTimes(15));
  }
};
xmlhttp.open("GET", "Code/JSON/config.json", true);
xmlhttp.send();

function getZoneTimes(zone){
  for(var i = 0; i<=myObj.sequences[0].sequence.length;i++){
    if(myObj.sequences[0].sequence[i].zone == zone){
      return myObj.sequences[0].sequence[i].time;
    }
  }
}
