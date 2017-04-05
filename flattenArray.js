function flattenArray(arr){
    var result = arr.map(function(each){
        if(Array.isArray(each)){
            flattenArray(each)
        }else{
            return each
        }
    });

    return result
}

flattenArray([1,2,[3,[4,5]]]);