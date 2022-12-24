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
// Input : a = [1,2,3,4,50
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
// Input : a = [1,2,3,4,50
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
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                *     *    *    *   *
// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// Problem - 5:
// ============
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


// Problem - :
// ============
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                *     *    *    *   *
// -----------------------------------------------------------------------------------------------------------------------------------------------------------

