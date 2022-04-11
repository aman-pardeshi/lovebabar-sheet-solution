import math


def countShare(B):
        #code here
  if B < 4:
    return 0
            
  input = (B - 2) / 2
  rouInput = math.trunc(input)
  print(rouInput)
  def factorial(n):
    if n == 0 or n == 1: 
      return 1
    else: 
      return n + factorial(n - 1)
        
  ans = round(factorial(rouInput))
  return ans

print(countShare(5))