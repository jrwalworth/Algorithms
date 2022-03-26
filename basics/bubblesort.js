//Problem Statement: Sort array using bubble sort


//Define function that accepts array
//loop through counter that's initialized at array.length
    //iterate through array
        //compare current value and next value 
        // if current is greather than next, swap
        //else continue
    //Decrement our counter variable
//return sorted array

function bubbleSort(arr){
    let counter = arr.length;
    while (counter > 0) {
        let prevArr = arr.toString();
        console.log(counter);
        for (let i = 0; i < counter -1; i++){
            if (arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i +1]
                arr[i + 1] = temp
            }
        }
        console.log(prevArr == arr.toString());
        if (prevArr == arr.toString()){
            return arr
        }
        //console.log(arr);
        counter --
    }
    return arr
}
console.log(bubbleSort([6,5,3,1,8,7,2,4]));