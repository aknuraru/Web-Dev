def first_last6(nums):
  return nums[0]==6 or nums[-1]==6
n=int(input())
r=[]
for i in range(n):
    s=int(input())
    r.append(s)
print(first_last6(r))