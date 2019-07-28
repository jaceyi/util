/**
 * @description 删除数组指定索引的值 返回一个新数组
 * @param array
 * @param index
 * @returns {[]}
 */
export function removeArrayIndex(array, index) {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}
