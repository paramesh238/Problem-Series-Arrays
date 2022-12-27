// Problem - 1:
// ============
// Digit Frequency 
// Input : arr = [10,20,30,10,10,40,50,60,10,20,50] and digit d 
// Output : eg: d = 10
// Frequency of 10 is 4
let arr = [10,20,30,10,10,40,50,60,10,20,50];
let d = 10;
var count = 0;
for(let i=0;i<arr.length-1;i++)
{
    if(arr[i] == d)
    {
        count++;
    }
}
console.log("Frequency of " + d + " is " +count);

// -----------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                *     *    *    *   *
// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// Problem - 2:
// ============
// Bar Chart
// Input : a[]
// Output : Print Bar chart

// Case - i :(Vertical Bar Chart)
// step-1 : find max of array which is no.of rows
// step-2 : no.of cols is equal to length of given array
// step-3 : check a[i] is greater or less than the max
//            if a[i] is greater than or equal to max print *
//            else print space

// Sample Output :
//   *   
//   *   
//   *   
//   *   
//   *   
//   *   
//   *   
//   *   
//   *   
//   *   
//   *   
//   *   
//  **  *
//  **  *
//  **  *
//  **  *
// ******
// ******
// ******
// ******
// ******
// ******
// ******
// ******
// ******
// ******
let arr = [10,14,26,10,10];
var max = 0;
for(let i=0;i<arr.length-1;i++)
{
    if(arr[i]>max) max = arr[i];   
}
for(let i=max;i>=1;i--)
{
    for(let j=0;j<arr.length;j++)
    {
        if(arr[j]>=i)
        {
            process.stdout.write("*");
        }
        else
        {
            process.stdout.write(" ");
        }
    }
    process.stdout.write("\n");
}


// Case - ii :(Horizontal Bar Chart)
// Sample Output :
// **********
// **************
// **************************
// **********
let arr = [10,14,26,10,10,];
for(let i=0;i<arr.length-1;i++)
{
    for(let j=1;j<=arr[i];j++)
    {
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                *     *    *    *   *
// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// Problem - 3:
// ============
// Reverse of givien array
// Input : a = [1,2,3,4,5]
// Output : a = [5,4,3,2,1]

// Case - i :(By using swapping technique - Rohan Sharma)
// Input : a = [2,5,3,5,7,1]
// Output : a = [1,7,5,3,5,2]
let a = [2,5,3,5,7,1];
let i = 0;
let j = a.length-1;
let temp;
while(i<j)
{
    temp = a[i];
    a[i] = a[j];
    a[j] = temp;
    i++;j--;
}
console.log(a);

// Case - ii :(By using new empty array - KPR)
// Input : a = [1,2,3,4,5]
// Output : a = [5,4,3,2,1]
let a = [1,2,3,4,5];
let b = [];
let j = 0;
for(let i=a.length-1;i>=0;i--){
    b[j] = a[i];
    j++;
}
console.log(b);

// -----------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                *     *    *    *   *
// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// Problem - 4:
// ============
// Additin of two arrays of diffeent sizes
// Input : a = [2,4,6,7,9] & b = [2,4,7]
// Output : c = [2,4,9,2,6]

//                                                                Solution - 1 [KPR]
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
// This method is only working if string length of digits is less than 15
let a = [1,2,3,9];
let b = [2,3,7];
let c = [];
let a1 = [], b1 = [];
// convert int to string 
let a_ItoS = "", b_ItoS = "";
for(let i=0;i<a.length;i++)
{
    a_ItoS += a[i];
}
for(let i=0;i<b.length;i++)
{
    b_ItoS += b[i];
}
// convert string back into integer while applying math addition
let temp = parseInt(a_ItoS) + parseInt(b_ItoS);
let result = "" + temp;
for(let i=0;i<result.length;i++)
{
    c[i] = parseInt(result[i]);
}
console.log("Sum of two arrays is : " + c);

//                                                                Solution - 2 [Roshan Sharma]
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
// Step 1 : Reverse both the arrays
// Step 2 : Iterate while loop until length of a[] elements (or) until length of b[] elements (or) carry not zero
// Step 3 : let n be the lenght a[] & m be the length of b[]
//          let x = 0, y = 0, carry =0;
//             if(i < n) x = a[i]
//             if(j < m) y = b[j]
//         sum =  x + y + carry;
//         carry = sum/10  forward the carry to next iteration
//         sum = sum/10 to get the current sum
//         i++,j++
// Step 4 : reverse the result array

let a = [9,9,5,1,7,6];
let b = [9,3,2,5,5,2,6];

function rev(arr)
{
    let i = 0;
    let j = arr.length - 1;
    while(i<j)
    {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++,j--;
    }
    return arr;
}

rev(a);
rev(b);

let i=0, j=0, carry=0, result=[];
var n=a.length, m=b.length;
while(i<n || j<m || carry!=0)
{
    let x = 0;
    let y = 0;
    if(i<n) x=a[i];
    if(j<m) y=b[j];

    let sum = carry + x + y;
    carry = parseInt(sum/10);
    sum = sum%10;
    result.push(sum);
    i++,j++;
}
result = rev(result);
console.log(result);

// Sample Output :
// [1, 0, 3, 2, 0, 7, 0, 2]
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                *     *    *    *   *
// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// Problem - 5:
// ============
// Additin of two arrays of diffeent sizes
// Input : a = [2,4,6,7,9] & b = [2,4,7]
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                *     *    *    *   *
// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// Problem - 6:
// ============
// Array rotation
// Case - i :(By moving last element of an array to the first element of an array - Rohan Sharma)
// Input : a = [1,2,3,4,5] and k=2 no.of rotations
// Output : a = [4,5,1,2,3]

// Algorithm
// ==========
// a = [1,2,3,4,5]
// k = 2
// n = 5
// step 1 : reverse the array from length n-k to n-1. i,e 3 to 4.
// 			a = [1,2,3,5,4]
// step 2 : reverse the array from length 0 to n-k-1. i,e 0 to 2.
// 			a = [3,2,1,5,4]
// ster 3 : reverse the array from length 0 to n-1 i,e total length of the array.
// 			a = [4,5,1,2,3]              [*Error in code because it is not working if k is more than the array length]
let a = [1,2,3,4,5];
let n = a.length;
// k is the no.of rotations
let k = 1;
// function to reverse the array of length from i to j
function rev_arr(i,j)
{
    while(i<j)
    {
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
        i++;j--;
    }
}
rev_arr(n-k,n-1);
rev_arr(0,n-k-1);
rev_arr(0,n-1);
console.log(a);

// Case - ii :(By moving first element of an array to the last element of an array - KPR)
// Input : a = [1,2,3,4,5] and k=2 no.of rotations
// Output : a = [3,4,5,1,2]

// Algorithm
// ==========
// a = [1,2,3,4,5]
// k = 2
// n = 5
// step 1 : reverse the array from length k to n-1. i,e 2 to 4.
// 			a = [1,2,5,4,3]
// step 2 : reverse the array from length 0 to n-1. i,e 0 to 4.(i,e total length of the array)
// 			a = [3,4,5,2,1]
// ster 3 : reverse the array from length n-k to n-1 i,e 3 to 4.
// 			a = [3,4,5,1,2]              [*Error in code because it is not working if k is more than the array length]

let a = [1,2,3,4,5];
let n = a.length;
// k is the no.of rotations
let k = 3;
// function to reverse the array of length from i to j
function rev_arr(i,j)
{
    while(i<j)
    {
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
        i++;j--;
    }
}
rev_arr(k,n-1);
rev_arr(0,n-1);
rev_arr(n-k,n-1);
console.log(a);
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                *     *    *    *   *
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
// Subset : continuity and sequence doesn't matter.
// Subsequence : continuity doesn't matter & sequence does matter
// Eg:[1,2,3]
// Subsequences are : []        000 
//                   [1]       001
//                   [2]       010
//                   [1,2]     011
//                   [3]       100
//                   [1,3]     101
//                   [2,3]     110
//                   [1,2,3]   111
//                   Total No.of SubSequence 2^n;
// Subarray : both continuity and sequence MutationObserver.
// Eg:[1,2,3]
// Sub Arrays are : [1], [1,2], [1,2,3]
//                  [2], [2,3]
//                  [3]
//                  Total no.of Sub arrays are n!.
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                *     *    *    *   *
// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// Problem - 7:
// ============
// Print all sub arrays of an array
// Input : [1,2,3,4]

let a = [1,2,3,4];
for(let i=0;i<a.length;i++)
{
    for(let j=i;j<a.length;j++)
    {
        for(let k=i;k<j;k++)
        {
            process.stdout.write(a[k] + " ");
        }
        process.stdout.write("\n");
    }   
}

// Output :
// 1 
// 1 2 
// 1 2 3 
// 2 
// 2 3 
// 3
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                *     *    *    *   *
// -----------------------------------------------------------------------------------------------------------------------------------------------------------


// Problem - 8:
// ============
// Target sum SubArray
// Input : a = [1,2,3,4,5,7] & target 7
// Output : is the indexes of sub array for the given target sum [2,3]

//                                                                Brute Force Method
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
// brute force time complexity is 1000*1000*1000 if there are 1000 elements in array
let a = [4,3,5,7,9,3,6];
let target = 16;
function bruteforce(arr, target)
{
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length;j++)
        {
            let csum = 0;
            for(let k=i;k<=j;k++)
            {
                csum += arr[k];
            }
            if(csum == target) return[i,j];
        }
    }
    return[-1,-1];
}
console.log(bruteforce(a,target));

// Output :
// [3,4]

//                                                                Optimized Code
// -----------------------------------------------------------------------------------------------------------------------------------------------------------

let a = [4,3,5,7,9,3,6];
let target = 16;
function optimized(arr, target)
{
    let sp = 0;
    let ep = 0;
    let csum = arr[sp];
    while(ep < arr.length)
    {
        if(csum == target) return[sp,ep];
        else if(csum < target)
        {
            ep++;
            if(ep == arr.length) break;
            csum += arr[ep];
        }
        else
        {
            csum -= arr[sp];
            sp++;
        }
    }
    return [-1.-1];
}
console.log(optimized(a,target));
// Output :
// [3,4]
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                *     *    *    *   *
// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// Problem - 9:
// ============
// Minimum size SUbArray sum [HR-209 Question]
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                *     *    *    *   *
// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// Problem - 10:
// ============
// Two Sum 
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                *     *    *    *   *
// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// Problem - :
// ============
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                *     *    *    *   *
// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// Problem - :
// ============
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                *     *    *    *   *
// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// Problem - :
// ============
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                *     *    *    *   *
// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// Problem - :
// ============
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                *     *    *    *   *
// -----------------------------------------------------------------------------------------------------------------------------------------------------------

