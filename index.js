// Code your solution in this file!
const logDriverNames = function (array){
  for(let item of array)
  console.log(item.name)
  
}


const logDriversByHometown = function(array, location){
  array.forEach(function (element){
    if(element.hometown===location)
    {
      console.log(element.name);
      
    }
  });
};



const driversByRevenue = function(array) 
{
  return array.slice().sort(function (elementA, elementB)
  {
    return elementA.revenue-elementB.revenue;
    
  }
  )};
  
  
  
const driversByName = function(array) 
{
  return array.slice().sort(function (elementA, elementB)
  {
    return elementA[name].localCompare(elementB[name]);
    
  }
  )};
  
  
  