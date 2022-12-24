// Problem - 1:
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

