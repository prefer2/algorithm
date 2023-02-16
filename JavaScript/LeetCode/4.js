/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 
const findMedianSortedArrays = (nums1, nums2) => {
    // 둘이 다시 합쳐서 정렬하기에는 이미 두 배열이 정렬되어 있음
    // 이분탐색?

    // 그냥 푼 코드 O(n+m)
    // const sumArr = [...nums1, ...nums2].sort((a, b) => a-b);
    // const med = parseInt(sumArr.length/2);
    // if(sumArr.length % 2 !== 0) return sumArr[med];
    // else {
    //     const oneMore = med - 1;
    //     return (sumArr[med] + sumArr[oneMore])/2;
    // }

    // 이분탐색 O(log(min(n, m))) => 생각보다 시간, 공간 효율성이 높지 않음
    const n = nums1.length;
    const m = nums2.length;
    if(n > m) return findMedianSortedArrays(nums2, nums1);
;
    let low = 0;
    let high = n;
    while(low <= high) {
        const partitionX = (high + low) >> 1
        const partitionY = ((n + m + 1) >> 1) - partitionX
        
        const maxX = partitionX == 0 ? 987654321 : nums1[partitionX - 1]
        const maxY = partitionY == 0 ? 987654321 : nums2[partitionY - 1]
        
        const minX = partitionX == nums1.length ? 987654321 : nums1[partitionX]
        const minY = partitionY == nums2.length ? 987654321 : nums2[partitionY ]
        
        if(maxX <= minY && maxY <= minX) {
            const lowMax = Math.max(maxX, maxY)
            if( (n + m) % 2 == 1)
                return lowMax
            return (lowMax + Math.min(minX, minY)) / 2
        } else if(maxX < minY) {
            low = partitionX + 1
        } else 
            high = partitionX - 1
    }
};
