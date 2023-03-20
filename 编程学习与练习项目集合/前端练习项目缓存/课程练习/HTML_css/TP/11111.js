let arr=[12,5,24,3,0,987,2];
let qsort=quickSort(arr);
console.log(qsort);

function quickSort(arr) {
	if (arr.length <= 1) {
		return arr
	}
	let pivotIndex = Math.floor(arr.length / 2)
	let pivot = arr.splice(pivotIndex, 1)[0]
	let left = []
	let right = []
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i])
		} else {
			right.push(arr[i])
		}
	}
	return quickSort(left).concat([pivot], quickSort(right))
}