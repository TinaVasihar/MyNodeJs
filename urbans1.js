var read=require('fs');
var lineReader = require('readline').createInterface({
input: read.createReadStream('urb.csv'),
});

var myjson={};
var heading= [];
var i=0;
lineReader.on('line', function (line) 
{
  
  if(i===0){
     heading =line.split(',');
      i++;
  }
  else
  {
      var currentLineData = line.split(',');
      for (var j=0; j<heading.length; j++) {
                     
         
          if (heading[j]=="Area Name" ||heading[j]=="Age-group" ||heading[j]=="Illiterate - Persons") {
              myjson[heading[j]] = currentLineData[j]; 
          }
      }
     // console.log(jsonObj);
      var jso=JSON.stringify(myjson);
      read.appendFile('myop2.json',jso,function(err) {});

  }

});