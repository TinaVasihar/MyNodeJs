var read=require('fs');
var lineReader = require('readline').createInterface({
input: read.createReadStream('urb.csv'),
});

var myjson=[];
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
var obj={};
	  
      for (var j=0; j<heading.length; j++) {
                     
         
          if (heading[j]=="Area Name" ||heading[j]=="Age-group" ||heading[j]=="Illiterate - Persons") 
{
              obj[heading[j]] = currentLineData[j]; 
          }
}
		  myjson.push(obj);
      }
     
      
  

});
lineReader.on('close',function()
{
	var jso=JSON.stringify(myjson);
      read.appendFile('myop3.json',jso,function(err) {});

});