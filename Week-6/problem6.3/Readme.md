# Problem 6.1: Sort array of 0's,1's and 2's

Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascendingorder. 

Example 1:
Input: 
N = 5
arr[]= {0 2 1 2 0}

Output: 0 0 1 2 2

Explanation: 0's 1's and 2's are segregated into ascending order

Example 2:

Input:
N = 3
arr[] = {0 1 0}

Output:0 0 1


Explanation: 0s 1s and 2s are segregated into ascending order. 

Time Complexity: O(N) 

Expected Auxiliary Space: O(1)

Constraints: 1 <= N <= 10^6 0 <= A[i] <= 2


## Solution:

Reference : https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/

```javascript
arr[] = {0, 1, 2, 0, 1, 2}

lo = 0, mid = 0, hi = 5
```

![alt text](https://media.geeksforgeeks.org/wp-content/uploads/20220804130128/0th.png)

```javascript
// Step – 1: 
arr[mid] == 0

swap(arr[lo], arr[mid])
lo = lo + 1 = 1
mid = mid + 1 = 1
arr[] = {0, 1, 2, 0, 1, 2}
```

![alt text](https://media.geeksforgeeks.org/wp-content/uploads/20220804130128/1st.png)

```javascript
Step – 2: arr[mid] == 1

mid = mid + 1 = 2
arr[] = {0, 1, 2, 0, 1, 2}
```

![alt text](https://media.geeksforgeeks.org/wp-content/uploads/20220804131120/2nd.png)
```javascript
Step – 3: arr[mid] == 2

swap(arr[mid], arr[hi])
hi = hi – 1 = 4
arr[] = {0, 1, 2, 0, 1, 2}
```

![alt text](https://media.geeksforgeeks.org/wp-content/uploads/20220804131121/3rd.png)

```javascript
Step – 4: arr[mid] == 2

swap(arr[mid], arr[hi])
hi = hi – 1 = 3
arr[] = {0, 1, 1, 0, 2, 2}
```

![alt text](https://media.geeksforgeeks.org/wp-content/uploads/20220804131121/4th.png)

```javascript
Step – 5: arr[mid] == 1

mid = mid + 1 = 3
arr[] = {0, 1, 1, 0, 2, 2}
```

![alt text](https://media.geeksforgeeks.org/wp-content/uploads/20220804131121/5th.png)

```javascript
Step – 6: arr[mid] == 0

swap(arr[lo], arr[mid])
lo = lo + 1 = 2
mid = mid + 1 = 4
arr[] = {0, 0, 1, 1, 2, 2}
```

![alt text](https://media.geeksforgeeks.org/wp-content/uploads/20220804131121/6th.png)

```javascript
Hence, arr[] = {0, 0, 1, 1, 2, 2}

```