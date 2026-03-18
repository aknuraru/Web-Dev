from collections import OrderedDict

n = int(input())
items = OrderedDict()

for _ in range(n):
    line = input().split()
    price = int(line[-1])  # last part is price
    name = " ".join(line[:-1])  # rest is item name

    if name in items:
        items[name] += price
    else:
        items[name] = price

# Output
for name, total in items.items():
    print(name, total)