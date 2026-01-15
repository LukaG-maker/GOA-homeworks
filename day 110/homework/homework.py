
avg = lambda nums: sum(nums) / len(nums)
print(avg([10, 20, 30]))
#-------------------------------------------
is_palindrome = lambda s: s == s[::-1]
print(is_palindrome("madam"))
#-------------------------------------------
nums = [1, 2, 3, 4]
double_list = list(map(lambda n: n * 2, nums))

print(double_list)
#-------------------------------------
strings = ["apple", "banana", "kiwi", "strawberry"]
long_words = list(filter(lambda s: len(strings) > 5, strings))
print(long_words)
#-------------------------------------
numbers = [10, -5, 3, -1, 2, -8]
get_negatives = list(filter(lambda n: n < 0, numbers))

print(get_negatives)