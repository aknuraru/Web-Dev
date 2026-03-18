data=list(map(int,input().split()))
sec=data[1:]
print(sum(1 for i in range(1,len(sec)) if sec[i]>sec[i-1]))