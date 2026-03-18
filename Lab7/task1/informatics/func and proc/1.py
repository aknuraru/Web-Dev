def min_inp(number):
    small=number[0]
    for n in number[1:]:
        if n<small:
            small=n
    return small
number=[]
for i in range(4):
    n=int(input())
    number.append(n)
print(min_inp(number))