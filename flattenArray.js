function flattenArray(arr){
    var result = arr.map(function(each){
        if(typeof(each.length) === 'num'){
            flattenArray(each)
        }else{
            return each
        }
    });

    return result
}

flattenArray([1,2,[3,[4,5]]]);