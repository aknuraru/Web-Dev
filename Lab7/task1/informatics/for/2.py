a,b,c,d=map(int,input().split())
for i in range(a,b+1):
    if i%d==c:
        print(i,end=" ")