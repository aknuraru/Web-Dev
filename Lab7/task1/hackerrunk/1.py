# Read English subscribers
n_english = int(input())
english = set(map(int, input().split()))

# Read French subscribers
n_french = int(input())
french = set(map(int, input().split()))

# Students who only have English = English - French
only_english = english.difference(french)

# Output the count
print(len(only_english))