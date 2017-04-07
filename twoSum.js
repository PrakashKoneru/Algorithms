var obj = {}
    for(var i=0;i<nums.length;i++){
        var diff = target - nums[i];
        if(obj.hasOwnProperty('key' + nums[i])){
            return [obj['key' + nums[i]], i]
        }else{
            obj['key' + diff] = i;
            console.log('key'+diff);
        }
    }
};