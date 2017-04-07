function quickSort (arr){
	var left = [],
		right = [],
		sorted;

		if(arr && arr.length>1){
			var mid = arr[0];

			for(var i=1;i<n;i++){
				if(arr[i] < mid){
					left.push(arr[i]);
				}else{
					right.push(arr[i]);
				}
			}

			left = quickSort(left);
			right = quickSort(right);

			left.push(mid);
			sorted = left.Concat(right);
		}
		else if(arr[0] !== undefined){
			sorted.push(arr[0]);
		}

	return sorted;
}