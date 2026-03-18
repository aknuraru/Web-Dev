def centered_average(nums):
    total = sum(nums) - max(nums) - min(nums)
    count = len(nums) - 2
    return total // count