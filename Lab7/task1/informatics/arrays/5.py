data=list(map(int,input().split()))
sec=data[1:]
for i in range(1,len(sec)):
    if sec[i]>0 and sec[i-1]>0:
        print("YES")
    if sec[i]<0 and sec[i-1]<0:
        print("YES")
else:
    print("NO")