data=list(map(int,input().split()))
first=data[0]
sec=data[1:]
for i in range(0,len(sec),2):
    print(sec[i],end=" ")