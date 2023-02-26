let n = 3;
let rows = 3;
let col = 4;
let arr = [[1,0,0,1],
           [0,0,1,1],
           [1,1,0,0],
           [0,0,0,0]];
var res = 0;
// rows i from 0 to 3( total 4 rows)
for(let i=0;i<4;i++)
{ 
    // cols j from 0 to 3 
    for(let j=0;j<4;j++)
    {
        var cnt = 1;
        
        if(arr[i][j] == 0)
        {
            for(let k =j+1;(k<=4 && cnt<=n);k++){
                if(arr[i][k] == 0){
                    cnt++;
                    if(cnt==n){
                        res++;
                    }
                }
            }
        }
    }
}
console.log(res)
