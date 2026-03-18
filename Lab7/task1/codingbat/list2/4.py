def sum13(nums):
    total = 0
    skip = False
    for n in nums:
        if n == 13:
            skip = True   # skip next number
            continue
        if skip:
            skip = False
            continue
        total += n
    return total