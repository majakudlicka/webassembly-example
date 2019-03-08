export function sum_up(arr: Array<i32>, size: i32): i32 {
    var res:i32 = 0;
    for (var i:i32 = 0; i < size; i++) {
        res += arr[i];
    }
    return res;
}
