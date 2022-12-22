console.log("Page is loading");
//Push Front
function pushToFront(array,number){
    
    for(var i = array.length - 1; i >= 0; i--){
        array[i+1] =array[i]
    }
    array[0] = number
    console.log(array) 
}

pushToFront([1,2,3], 2)

//Pop Front
function popFront(array){
    for(var i = 0 ; i<array.length -1; i++){
    
        for(var j = i; j<array.length ; j++){
            
            array[j] = array[j+1]
        }
        array.length = array.length - 1
    }
    console.log(array)
}
popFront([3,2,1])

//remove at index
function removeAt(array,index){
    for(var i = index -1; i< array.length; i++){
        array[i] = array[i+1]
    }
    array.length = array.length -1;
    console.log(array);
    
}
removeAt([1,2,3], 2)


//remove duplicates
function removeDuplicates(array){
    //you do this to put the items in array is a descending orascending order it doesnt matter so in this way we can see if one index is equal to the upcoming index
    for(var i=0; i<array.length -1; i++){
        for(var j=i+1; j<array.length; j++){
            if(array[i] > array[j]){
                var tempora = array[i]
                array[i] = array[j]
                array[j] = tempora
            }
        }
    }
    for ( i = 0; i < array.length; i ++){  
        for ( j = i + 1; j < array.length; j++){  
            if ( array[i] == array[j] ){  
                for ( k = j; k < array.length - 1; k++){  
                    array[k] = array [k + 1];  
                }   
                array.length = array.length-1;  
                j=j-1;      
            }  
        }  
    }  
    console.log(array)
}
removeDuplicates([1,2,3,2,4,3,3]);
