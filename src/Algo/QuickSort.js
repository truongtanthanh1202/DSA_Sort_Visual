import React from 'react';
import {
  swap,
  newTrace,
  addToTrace,
  lastSorted,
  createRange,
  createKey
} from './engine';

const QuickSort = (nums) => {
  // Initial State
  const trace = newTrace(nums);

  function choosePivot(array, start, end) {
    // randomly pick an element between start and end;
    return Math.floor(Math.random() * (end - start)) + start;
  }

  function partition(array, start, end) {
    let i = start + 1;
    let j = start + 1;

    // Visualize: Keep pivot marked
    addToTrace(trace, array, lastSorted(trace), [start]);

    while (j <= end) {
      if (array[j] < array[start]) {
        // Visualize: Mark item that is less than pivot
        addToTrace(
          trace,
          array,
          lastSorted(trace),
          [start],
          [j],
          [],
          createRange(start + 1, i)
        );

        swap(array, i, j);

        // Visualize: Move item to lesser list
        addToTrace(
          trace,
          array,
          lastSorted(trace),
          [start],
          [i],
          [],
          createRange(start + 1, i)
        );
        i += 1;
      }
      j += 1;
    }

    // Visualize: Mark center position
    addToTrace(
      trace,
      array,
      lastSorted(trace),
      [i - 1],
      [],
      [],
      createRange(start, i - 1)
    );
    swap(array, start, i - 1);

    // Visualize: Move pivot to center
    addToTrace(
      trace,
      array,
      lastSorted(trace),
      [i - 1],
      [],
      [],
      createRange(start, i - 1)
    );
    return i - 1;
  }

  function recursiveQuickSort(array, start, end) {
    if (start >= end) {
      if (start === end) {
        // Visualize: Mark only item as sorted
        addToTrace(trace, array, [...lastSorted(trace), start]);
      }
      return null;
    }

    let pivot = choosePivot(array, start, end);

    // Visualize: Mark chosen pivot
    addToTrace(trace, array, lastSorted(trace), [pivot]);

    swap(array, start, pivot);

    // Visualize: Move chosen pivot to start
    addToTrace(trace, array, lastSorted(trace), [pivot]);

    pivot = partition(array, start, end);

    // Visualize: Mark pivot after partition as sorted
    addToTrace(trace, array, [...lastSorted(trace), pivot]);

    recursiveQuickSort(array, start, pivot - 1);
    recursiveQuickSort(array, pivot + 1, end);
  }

  recursiveQuickSort(nums, 0, nums.length - 1);

  return trace;
};

export const QuickSortKey = createKey(
  'Comparing',
  'Swapping',
  null,
  'Less than pivot'
);

export const QuickSortDesc = {
  title: 'Quick Sort',
  description: (
    <div>
      <p>
        <a
          href="https://www.programiz.com/dsa/quick-sort"
          target="_blank"
          rel="noopener noreferrer"
        >
          Quick Sort
        </a>{' '}
        là một thuật toán sắp xếp tại chỗ, hiệu quả, trong thực tế 
        nhanh hơn MergeSort và HeapSort. Tuy nhiên, đây không phải là 
        một thuật toán sắp xếp ổn định, bởi vị trí tương đối 
        của các phần tử sắp xếp bằng nhau không được bảo toàn và cách 
        chọn phần tử "Pivot" là ngẫu nhiên.Quicksort là một thuật toán áp dụng 
        chia để trị. Đầu tiên, Quicksort chia một mảng lớn thành hai mảng 
        con nhỏ hơn: các phần tử thấp và các phần tử cao (so với Pivot). Quicksort 
        sau đó có thể sắp xếp đệ quy các mảng con. Các bước thực hiện sẽ là:
      </p>
      <ol>
        <li>
          Chọn <em>ngẫu nhiên</em> một phần tử trong mảng. Phần tử này được gọi là Pivot.
        </li>
        <li>Di chuyển phần tử pivot đến đầu mảng.</li>
        <li>
          <em>Phân vùng:</em> sắp xếp lại thứ tự mảng để tất cả các phần tử có giá trị 
          nhỏ hơn Pivot đều đến đứng trước Pivot, trong khi tất cả các phần tử có 
          giá trị lớn hơn Pivot đều đứng sau nó (các giá trị bằng nhau có thể 
          chọn ở một trong hai bên). Sau khi phân vùng, Pivot sẽ ở vị trí 
          đã được sắp xếp (sorted) của nó.
        </li>
        <li>
          Áp dụng lần lượt các bước trên cho mảng con các phần tử có giá trị 
          nhỏ hơn và cho mảng con các phần tử có giá trị lớn hơn.
        </li>
      </ol>
      <p>
        Cơ sở của đệ quy là một mảng có kích thước 
        bằng không hoặc một, được sắp xếp theo định nghĩa.
      </p>
    </div>
  ),
  worstCase: (
    <span>
      O(<em>n</em>
      <sup>2</sup>)
    </span>
  ),
  avgCase: (
    <span>
      O(<em>n</em>log<em>n</em>)
    </span>
  ),
  bestCase: (
    <span>
      O(<em>n</em>log<em>n</em>)
    </span>
  ),
  space: (
    <span>
      O(log<em>n</em>)
    </span>
  )
};

export default QuickSort;
