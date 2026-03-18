data=list(map(int,input().split()))
sec=data[1:]
count=0
for i in range(1,len(sec)-1):
    if sec[i]>sec[i-1] and sec[i]>sec[i+1]:
        count+=1
print(count)