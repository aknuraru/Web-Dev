def string_times(str, n):
  result = ""
  for i in range(n):  # range(n) is [0, 1, 2, .... n-1]
    result = result + str  # could use += here
  return result
print(string_times("abcd", 3))
print(string_times("abcd", 4))