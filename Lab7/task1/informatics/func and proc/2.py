def power(a, n):
    result = 1
    for _ in range(n):
        result *= a
    return result
a, n = map(int, input().split())
print(power(a, n))