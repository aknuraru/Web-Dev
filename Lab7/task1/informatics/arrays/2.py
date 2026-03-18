data=list(map(int,input().split()))
first=data[0]
second=data[1:]
for i in range(0,len(second)):
    if second[i]%2==0:
        print(second[i],end=" ")
