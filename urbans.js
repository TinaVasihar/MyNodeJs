var read=require('fs');
var lineReader = require('readline').createInterface({
input: read.createReadStream('urb.csv'),
});

var myjson=[];//Json object
var heading= [];//array
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
var obj={};
      for (var j=0; j<heading.length; j++) {
                     
          if(j === 3){
             myjson[heading[j]] = currentLineData[j]; 
          }
          if (j === 6) {
              obj[heading[j]] = currentLineData[j]; 
           }
}
		  myjson.push(obj);
      }
     
      
  

});
lineReader.on('close',function()
{
	var jso=JSON.stringify(myjson);
      read.appendFile('myoutput.json',jso,function(err) {});

});