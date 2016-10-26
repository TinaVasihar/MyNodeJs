var readline = require('readline');
var fs = require('fs');
var path=require("path");
i=0;
header=[];
var json = [];
var rl = readline.createInterface({
input: fs.createReadStream('data.csv')
});

rl.on('line',function(line){
    i++;
    if(i==1)
    {
      header=line.split(",");
    }
    else
    {
      var tempArray=[];
      row = line.split(",");
      if(row[4]=="Total")
       {
         for(var i = 0; i < header.length; i++)
           if(i==5)
          tempArray.push(row[i]);
        else if(i==12)
           tempArray.push(parseInt(row[i]));
       // Add object to list

           if(json.length!=0)
           {
               var check=0;
               var index=-1;
               for(var j=0;j<json.length;j++)
               {
                   if(json[j].includes(tempArray[0])==true)
                   {
                       check=1;
                       index=j;
                       break;
                   }
               }
               if(check==1)
                   json[index][1]=json[index][1]+tempArray[1];
               else
                 json.push(tempArray);
           }
           else
           json.push(tempArray);
    }
  }
    });
rl.on("close",function()
{

var rl1 = readline.createInterface({
input: fs.createReadStream('data.csv')
});

rl1.on('line',function(line)
{
i++;
if(i==1)
{
  header=line.split(",");
}
else
{
      var tempArray=[];
       row = line.split(",");
       if(row[4]=="Total")
       {
         for(var i = 0; i < header.length; i++)
        if(i==5)
          tempArray.push(row[i]);
        else if(i==12)
           tempArray.push(parseInt(row[i]));
       // Add object to list

           if(json.length!=0){
               var check=0;
               var index=-1;
               for(var j=0;j<json.length;j++)
               {
                   if(json[j].includes(tempArray[0])==true)
                   {
                       check=1;
                       index=j;
                       break;
                   }
               }
               if(check==1)
                   json[index][1]=json[index][1]+tempArray[1];
               else
                 json.push(tempArray);
           }
           else
           json.push(tempArray);
    }

}

});
rl1.on("close",function()
{


var rl2 = readline.createInterface({
input: fs.createReadStream('data.csv')
});

rl2.on('line',function(line){
i++;
if(i==1)
{
  header=line.split(",");
}
else
{
      var tempArray=[];
       row = line.split(",");
       if(row[4]=="Total")
       {
         for(var i = 0; i < header.length; i++)
        if(i==5)
          tempArray.push(row[i]);
        else if(i==12)
           tempArray.push(parseInt(row[i]));
       // Add object to list

           if(json.length!=0)
           {
               var check=0;
               var index=-1;
               for(var j=0;j<json.length;j++)
               {
                   if(json[j].includes(tempArray[0])==true)
                   {
                       check=1;
                       index=j;
                       break;
                   }
               }
               if(check==1)
                   json[index][1]=json[index][1]+tempArray[1];
               else
                 json.push(tempArray);
           }
           else
           json.push(tempArray);
    }
  }

});

rl2.on("close",function()
{
 var finalJson=[];
for(var i=0;i<json.length;i++)
{
   var tmp={};
   tmp["AgeGroup"]=json[i][0];
   tmp["LiteratePerson"]=json[i][1];
   finalJson.push(tmp);
}

//Output file path
var outPath = path.join(__dirname, 'json2.json');
// Convert object to string, write json to file
fs.writeFileSync(outPath, JSON.stringify(finalJson), 'utf8',
   function(err){console.log(err);});


});
});
});