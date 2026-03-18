def xor(x, y):
    return int((x and not y) or (not x and y))
x, y = map(int, input().split())
print(xor(x, y))