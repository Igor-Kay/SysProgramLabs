{
    function filterElements(arr, num) {
        return arr.filter(element => element > num);
      }
      
      const arr = [1, 4, 6, 3, 2];
      const filteredElements = filterElements(arr, 2);
      console.log(`Отфильтрованные элементы: ${filteredElements}`)
}


{
    function flattenArray(arr) {
        const flatArray = [];
        for (const element of arr) {
          if (Array.isArray(element)) {
            flatArray.push(...flattenArray(element));
          } else {
            flatArray.push(element);
          }
        }
        return flatArray;
      }
      
      const arr = [1, 4, [34, 1, 20], [6, [6, 12, 8], 6]];
      const flatArray = flattenArray(arr);
      console.log(`Плоский массив: ${flatArray}`);
      
}


  