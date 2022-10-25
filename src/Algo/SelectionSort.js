import React from 'react';
import {
  swap,
  newTrace,
  addToTrace,
  lastSorted,
  createKey
} from './engine';

const SelectionSort = (nums) => {
  // Initial State
  const trace = newTrace(nums);

  // Core Algorithm
  for (let i = 0; i < nums.length - 1; i++) {
    // Internal Loop: Find index of min value
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      // Visualize: comparing A[j] to A[minIndex]
      addToTrace(trace, nums, lastSorted(trace), [minIndex, j]);
      if (nums[j] < nums[minIndex]) {
        // Visualize: discovered new minIndex
        addToTrace(trace, nums, lastSorted(trace), [minIndex], [j]);
        minIndex = j;
        // Visualize: reassign new minIndex;
        addToTrace(trace, nums, lastSorted(trace), [minIndex], [j]);
      }
    }

    // Visualize: i'th value to be swapped with min value
    addToTrace(trace, nums, lastSorted(trace), [], [i, minIndex]);

    swap(nums, i, minIndex);

    // Visualize: i'th value has been swapped with min value
    addToTrace(trace, nums, [...lastSorted(trace), i], [], []);
  }

  // Visualize: Final item in the array is sorted
  addToTrace(trace, nums, [...lastSorted(trace), nums.length - 1]);

  return trace;
};

export const SelectionSortKey = createKey('Comparing', 'Swapping');

export const SelectionSortDesc = {
  title: 'Selection Sort',
  description: (
    <p>
      <a
        href="https://www.programiz.com/dsa/selection-sort"
        target="_blank"
        rel="noopener noreferrer"
      >
        Selection Sort
      </a>{' '}
      là một thuật toán sắp xếp so sánh tại chỗ chia danh sách đầu vào thành hai phần: 
      danh sách con các mục đã được sắp xếp, được xây dựng từ trái sang phải ở phía 
      trước (bên trái) của danh sách và danh sách con các mục còn lại được sắp xếp 
      chiếm phần còn lại của danh sách. Ban đầu, danh sách con được sắp xếp trống và 
      danh sách con chưa được sắp xếp là toàn bộ danh sách đầu vào. Thuật toán tiến 
      hành bằng cách tìm phần tử nhỏ nhất trong danh sách con chưa được sắp xếp, 
      trao đổi (hoán đổi) nó với phần tử chưa được sắp xếp ngoài cùng bên trái 
      (đặt nó theo thứ tự đã sắp xếp) và di chuyển ranh giới của danh sách con 
      một phần tử sang bên phải.
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
  bestCase: (
    <span>
      O(n<sup>2</sup>)
    </span>
  ),
  space: <span>O(1)</span>
};

export default SelectionSort;
