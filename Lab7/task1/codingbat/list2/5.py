def sum67(nums):
    total = 0
    in_section = False
    for n in nums:
        if n == 6:
            in_section = True
            continue
        if in_section:
            if n == 7:
                in_section = False
            continue
        total += n
    return total