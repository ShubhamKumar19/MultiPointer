//We can implement multiple pointers if array is sorted
function UniqueValues(arr)
{
    arr=arr.sort();
   if(!arr.length)
      return 0;
   let i=0;
   let j=i+1;
   let count=0;
    while(j<=arr.length) {
        if(arr[i]===arr[j]) {
            j+=1;
        }
        else {
            count++;
            i=j;
            j++;    
        }
    }
    return count++;
}
console.log(UniqueValues([1,4,2,2,5,7,7,9,9]))