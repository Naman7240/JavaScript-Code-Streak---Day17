JavaScript Code of Streak - Day17

Q) Write a JavaScript program to count number of 0 bits in binary representation of a given integer.

Test Data:
(45) -> 2
(17) -> 3
(15) -> "Parameter value is not an Integer!"

Explanation:

In this approach we are using bitset. We will set the bitset with num using |.   
Now traverse bitset using for loop, as soon as the first 1 is encountered then break the loop otherwise increment count for trailing zeroes.    
Take an integer num as input.    
Function trailing_zeroes(int num) takes num and returns the count of number of trailing zeros in Binary representation of a number using Bitset.     
Take the initial count as 0.      
Take a bitset arr.    
Set it with num as arr |=num.      
Traverse arr using for loop from i=0 to i<64. If arr[i] is 0 then increment count else breaks the loop.       
Return count as result at the end of loop.     

![image](https://user-images.githubusercontent.com/117966470/213972429-6f62a250-edcb-4cc1-bc9b-a8b232af6c4f.png)

