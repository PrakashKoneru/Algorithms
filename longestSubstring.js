var lengthOfLongestSubstring = function(s) {
    var result = [];
    var SS = s.split('');
    var length = SS.length;
    var currentIndex = 0,
        max = 1;
    
    for (var i=currentIndex; i<length; i++){
        if(result.indexOf(SS[i]) === -1){
            result.push(SS[i])
        }else{
            if(result.length>max){
                max = result.length
                console.log(max, result);
            }
            result = []
            currentIndex += 1;
            
        }
    }
    
    return max;
};


lengthOfLongestSubstring("pwwkew");