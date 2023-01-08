/* Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascendingorder. 

Example 1: Input: prices = [7,1,5,3,6,4] 
Output: 5 (Max Profit)

Example 2: Input: prices = [7,6,4,3,1] 
Output: 0 (No Profit)

*/

// Reference  https://www.geeksforgeeks.org/best-time-to-buy-and-sell-stock/

let prices = [7,1,5,3,6,4] ;
let buy = prices[0], max_profit = 0;
for (let i = 1; i < prices.length; i++) {

    // Checking for lower buy value
    if (buy > prices[i])
        buy = prices[i];

    // Checking for higher profit
    else if (prices[i] - buy > max_profit)
        max_profit = prices[i] - buy;
}
console.log(max_profit); // 5

// Time Complexity: O(n)
// Space Complexity: O(1)


