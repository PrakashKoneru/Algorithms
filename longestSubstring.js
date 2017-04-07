var lengthOfLongestSubstring = function(s) {
     // a
    var hash = {};
    var SS = s.split('');
    var currentIndex = 0;
    var str = ""
    var i = 0;
    max = 0;
    while(i < SS.length){
        if(!hash.hasOwnProperty("key" + SS[i])){
            hash["key" + SS[i]] = 1;
            str = str + SS[i];
            i++;
        }else{
            if(str.length > max){
                max = str.length
            }
                currentIndex = currentIndex + 1;
                str = "";
                i = currentIndex;
                hash = {};
        }
    }
    
    return max;
    
};