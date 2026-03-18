def common_end(a, b):
  return a[0]==b[0] or (a[-1]==b[-1])
n=int(input())
r=[]
for i in range(n):
    s=int(input())
    r.append(s)
l=int(input())
o=[]
for i in range(l):
    s=int(input())
    o.append(s)
print(common_end(o,r))