/**Given a m x n matrix grid which is sorted in non-increasing order both row-wise 
 * and column-wise, return the number of negative numbers in grid. */

const countNegatives=(grid)=>{
    let count=0;

    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]<0){
                count++;
            }
        }
    }

    return count;
}


console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]));
console.log(countNegatives([[3,2],[1,0]]));
console.log(countNegatives([[-4,3,-2,-1],[3,-2,1,-1],[1,-1,-1,-2],[-1,1,-2,3,-9,-11]]));
/**A problem by leetcode */