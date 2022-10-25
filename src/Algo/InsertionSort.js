import React from 'react';
import { 
  newTrace,
  addToTrace, 
  createKey 
} from './engine';

const InsertionSort = (nums) => {
  // Initial State
  const trace = newTrace(nums);

  // Core Algorithm
  for (let i = 1; i < nums.length; i++) {
    let value = nums[i];
    let hole = i;
    // Visualize: Hole has been selected for comparison
    addToTrace(trace, nums, [], [i]);
    while (hole > 0 && nums[hole - 1] > value) {
      // Visualize: Compare hole to value
      addToTrace(trace, nums, [], [hole], [hole - 1]);
      nums[hole] = nums[hole - 1];
      hole -= 1;
      // Visualize: Overwrite hole with hole - 1
      addToTrace(trace, nums, [], [], [hole, hole + 1]);
    }
    // Visualize: Overwrite hole with value
    addToTrace(trace, nums, [], [], [], [hole]);
    nums[hole] = value;
    // Visualize: value is in sorted position
    addToTrace(trace, nums, [], [], [], [hole]);
  }

  // Visualize: Mark all elements as sorted
  addToTrace(trace, nums, [...Array(nums.length).keys()]);
  return trace;
};

export const InsertionSortKey = createKey(
  'Comparing',
  'Swapping',
  'Overwrite from memory'
);
export const InsertionSortDesc = {
  title: 'Insertion Sort',
  description: (
    <p>
      <a
        href="https://www.programiz.com/dsa/insertion-sort"
        target="_blank"
        rel="noopener noreferrer"
      >
        Insertion Sort
      </a>{' '}
      là một thuật toán sắp xếp đơn giản lặp qua một mảng và tại mỗi lần lặp, 
      nó sẽ xóa một phần tử khỏi mảng, tìm vị trí của nó trong danh sách đã 
      sắp xếp và chèn nó vào đó, lặp lại cho đến khi không còn phần tử nào trong 
      danh sách chưa được sắp xếp. Insertion Sort là một thuật toán sắp xếp tại chỗ, ổn định,
      không hiệu quả trên các mảng đầu vào lớn nhưng hoạt động tốt đối với các tập 
      dữ liệu gần như đã được sắp xếp. Thuật toán này hiệu quả hơn trong thực tế so với các thuật 
      toán sắp xếp có độ phức tạp O(n<sup>2</sup>) khác như sắp xếp nổi bọt và sắp xếp lựa chọn.
    </p>
  ),
  worstCase: (
    <span>
      O(n<sup>2</sup>)
    </span>
  ),
  avgCase: (
    <span>
      O(n<sup>2</sup>)
    </span>
  ),
  bestCase: <span>O(n)</span>,
  space: <span>O(1)</span>
};

export default InsertionSort;
