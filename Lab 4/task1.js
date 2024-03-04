{
    function getMaxDiff(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      min = Math.min(min, arr[i]);
      max = Math.max(max, arr[i]);
    }
    return max - min;
  }
  
  
    const arr = [1, 5, 10, 2, 7];
    const maxDiff = getMaxDiff(arr);
    console.log(`Максимальная разница: ${maxDiff}`);

}

{

    function getUniqueElements(arr) {
        const uniqueSet = new Set(arr);
        return [...uniqueSet];
      }
      
      const arr = [1, 2, 3, 1, 4, 5, 2];
      const uniqueElements = getUniqueElements(arr);
      console.log(`Уникальные элементы: ${uniqueElements}`); 
      
}
  

{
    function getDoneObjects(arr) {
        return arr.filter(obj => obj.isDone === true);
      }
      
      const arr = [
        { id: 1, isDone: true },
        { id: 2, isDone: false },
        { id: 3, isDone: true },
      ];
      const doneObjects = getDoneObjects(arr);
      console.log(`Done objects: ${JSON.stringify(doneObjects)}`); 
      
}