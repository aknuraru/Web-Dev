def xyz_there(s):
    # check start of string
    if s.startswith("xyz"):
        return True
    # check all other occurrences
    for i in range(1, len(s)-2):  # len-2 because "xyz" is length 3
        if s[i:i+3] == "xyz" and s[i-1] != ".":
            return True
    return False

# Examples
print(xyz_there('abcxyz'))     # True
print(xyz_there('abc.xyz'))    # False
print(xyz_there('xyz.abc'))    # True