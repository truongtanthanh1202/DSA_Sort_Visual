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

    //Keep pivot marked
    addToTrace(trace, array, lastSorted(trace), [start]);

    while (j <= end) {
      if (array[j] < array[start]) {
        //Mark item that is less than pivot
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

        //Move item to lesser list
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

    //Mark center position
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

    //Move pivot to center
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
        //Mark only item as sorted
        addToTrace(trace, array, [...lastSorted(trace), start]);
      }
      return null;
    }

    let pivot = choosePivot(array, start, end);

    //Mark chosen pivot
    addToTrace(trace, array, lastSorted(trace), [pivot]);

    swap(array, start, pivot);

    //Move chosen pivot to start
    addToTrace(trace, array, lastSorted(trace), [pivot]);

    pivot = partition(array, start, end);

    //Mark pivot after partition as sorted
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
        l?? m???t thu???t to??n s???p x???p t???i ch???, hi???u qu???, trong th???c t??? 
        nhanh h??n MergeSort v?? HeapSort. Tuy nhi??n, ????y kh??ng ph???i l?? 
        m???t thu???t to??n s???p x???p ???n ?????nh, b???i v??? tr?? t????ng ?????i 
        c???a c??c ph???n t??? s???p x???p b???ng nhau kh??ng ???????c b???o to??n v?? c??ch 
        ch???n ph???n t??? "Pivot" l?? ng???u nhi??n.Quicksort l?? m???t thu???t to??n ??p d???ng 
        chia ????? tr???. ?????u ti??n, Quicksort chia m???t m???ng l???n th??nh hai m???ng 
        con nh??? h??n: c??c ph???n t??? th???p v?? c??c ph???n t??? cao (so v???i Pivot). Quicksort 
        sau ???? c?? th??? s???p x???p ????? quy c??c m???ng con. C??c b?????c th???c hi???n s??? l??:
      </p>
      <ol>
        <li>
          Ch???n <em>ng???u nhi??n</em> m???t ph???n t??? trong m???ng. Ph???n t??? n??y ???????c g???i l?? Pivot.
        </li>
        <li>Di chuy???n ph???n t??? pivot ?????n ?????u m???ng.</li>
        <li>
          <em>Ph??n v??ng:</em> s???p x???p l???i th??? t??? m???ng ????? t???t c??? c??c ph???n t??? c?? gi?? tr??? 
          nh??? h??n Pivot ?????u ?????n ?????ng tr?????c Pivot, trong khi t???t c??? c??c ph???n t??? c?? 
          gi?? tr??? l???n h??n Pivot ?????u ?????ng sau n?? (c??c gi?? tr??? b???ng nhau c?? th??? 
          ch???n ??? m???t trong hai b??n). Sau khi ph??n v??ng, Pivot s??? ??? v??? tr?? 
          ???? ???????c s???p x???p (sorted) c???a n??.
        </li>
        <li>
          ??p d???ng l???n l?????t c??c b?????c tr??n cho m???ng con c??c ph???n t??? c?? gi?? tr??? 
          nh??? h??n v?? cho m???ng con c??c ph???n t??? c?? gi?? tr??? l???n h??n.
        </li>
      </ol>
      <p>
        C?? s??? c???a ????? quy l?? m???t m???ng c?? k??ch th?????c 
        b???ng kh??ng ho???c m???t, ???????c s???p x???p theo ?????nh ngh??a.
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
