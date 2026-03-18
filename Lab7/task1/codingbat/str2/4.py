def count_code(s):
    count = 0
    for i in range(len(s) - 3):  # length 4 substrings
        if s[i] == 'c' and s[i+1] == 'o' and s[i+3] == 'e':
            count += 1
    return count

# Examples
print(count_code('aaacodebbb'))      # 1
print(count_code('codexxcode'))      # 2
print(count_code('cozexxcope'))      # 2