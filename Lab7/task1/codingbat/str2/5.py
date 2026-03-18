def end_other(a, b):
    a = a.lower()
    b = b.lower()
    return a.endswith(b) or b.endswith(a)

# Examples
print(end_other('Hiabc', 'abc'))      # True
print(end_other('AbC', 'HiaBc'))      # True
print(end_other('abc', 'abXabc'))     # True