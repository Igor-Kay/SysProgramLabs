    
{
        function findZeroPairs(arr) {
            let count = 0;
            const seen = new Set();
          
            for (let i = 0; i < arr.length; i++) {
              const complement = -arr[i];
          
              if (seen.has(complement)) {
                count++;
                seen.delete(complement);
              } else {
                seen.add(arr[i]);
              }
            }
          
            return count;
          }
          
          const arr1 = [-7, 12, 4, 6, -4, -12, 0];
          const count1 = findZeroPairs(arr1);
          console.log(`Количество пар: ${count1}`); 
          
          const arr2 = [-1, 2, 4, 7, -4, 1, -2];
          const count2 = findZeroPairs(arr2);
          console.log(`Количество пар: ${count2}`);
          
          const arr3 = [-1, 1, 0, 1];
          const count3 = findZeroPairs(arr3);
          console.log(`Количество пар: ${count3}`); 
          
}


{
    function findZeroTriplets(arr) {
        let count = 0;
        const seenPairs = new Map();
      
        for (let i = 0; i < arr.length; i++) {
          for (let j = i + 1; j < arr.length; j++) {
            const complement = -arr[i] - arr[j];
      
            if (seenPairs.has(complement)) {
              count += seenPairs.get(complement);
            }
      
            seenPairs.set(arr[j], (seenPairs.get(arr[j]) || 0) + 1);
          }
        }
      
        return count;
      }
      
      const arr1 = [-7, 12, 4, 6, -4, -12, 0];
      const count1 = findZeroTriplets(arr1);
      console.log(`Количество троек: ${count1}`); 
      
      const arr2 = [-1, 2, 4, 7, -4, 1, -2];
      const count2 = findZeroTriplets(arr2);
      console.log(`Количество троек: ${count2}`); 
      
      const arr3 = [-1, 1, 0, 1];
      const count3 = findZeroTriplets(arr3);
      console.log(`Количество троек: ${count3}`); 
      
}