import React from 'react';
import {
  swap,
  newTrace,
  addToTrace,
  lastSorted,
  createKey
} from './engine';

const BubbleSort = (nums) => {
  // Set up code for tracing the algorithm
  const trace = newTrace(nums);

  // Sorting Algorithm with trace capture
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      // Visualize: Comparing A[j] and A[j + 1]
      addToTrace(trace, nums, lastSorted(trace), [j, j + 1]);
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1);
        // Visualize: Swap A[j] and A[j + 1]
        addToTrace(trace, nums, lastSorted(trace), [], [j, j + 1]);
      }
    }

    // Visualize: final value is sorted
    addToTrace(trace, nums, [
      ...lastSorted(trace),
      nums.length - 1 - i
    ]);
  }

  return trace;
};

export const BubbleSortKey = createKey('Comparing', 'Swapping');
export const BubbleSortDesc = {
  title: 'Bubble Sort',
  description: (
    <p>
      <a
        href="https://www.programiz.com/dsa/bubble-sort"
        target="_blank"
        rel="noopener noreferrer"
      >
        Bubble Sort
      </a>{' '}
      (Sắp xếp nổi bọt) là một thuật toán sắp xếp đơn giản với việc lặp đi lặp lại các bước có sẵn, 
      so sánh các phần tử liền kề và hoán đổi chúng nếu chúng không đúng thứ tự. 
      Việc so sánh các cặp sẽ dừng lại cho đến khi phần tử lớn nhất được xếp đúng và lại lặp lại. 
      Cũng giống như sự chuyển động của bọt khí trong nước nổi lên mặt nước, mỗi phần tử của mảng 
      di chuyển về phía cuối trong mỗi lần lặp lại. Do đó, nó được gọi là sắp xếp Nổi bọt. 
      Mặc dù thuật toán đơn giản nhưng nó quá chậm nên chỉ dùng được với những mảng có kích thước nhỏ.
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
export default BubbleSort;
