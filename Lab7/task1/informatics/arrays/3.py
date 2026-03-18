data=list(map(int,input().split()))
first=data[0]
second=data[1:]
print(sum(1 for x in second if x>0))