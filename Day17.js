//JavaScript program to count number of 0 bits in binary representation of a given integer.
function Binary_Count_SetBits(a) 
{
  // check whether input is an integer
  if (!Number.isInteger(a))
    {
      return('Parameter value is not an Integer!')
    }
    return a.toString(2).split('0').length - 1
}
console.log(Binary_Count_SetBits(64))
console.log(Binary_Count_SetBits(45))
console.log(Binary_Count_SetBits("15"))
console.log(Binary_Count_SetBits(10))
console.log(Binary_Count_SetBits(96))
console.log(Binary_Count_SetBits("96"))