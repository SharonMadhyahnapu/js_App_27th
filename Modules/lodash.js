var _=require('lodash')

console.log(_.partition([1,2,3,4,5,6],x=>x%2))
console.log(_.chunk([1,2,3,4,5,6],2));                        //splits
console.log(_.compact([1,2,3,0,3]));                         //remove falsy
console.log(_.concat([1,5,6],[2]));                         //join
console.log(_.difference([1,5,6],[1,6,2]));                //non common arrays in first array
console.log(_.drop([1,5,6,8],2));                         //drops create slice
console.log(_.fill([1,5,6],8,1,2));                      //fills with specified value
console.log(_.filter([1,5,6],x=>x>2));
console.log(_.flatten([1,5,6,[1,6,7]]));
console.log(_.findIndex([1,5,6],x=>x%6==0));
