def int_numbers(numbers):
    return [x for x in numbers if x % 2 == 0]


nums = [1, 2, 3, 4, 5 ]
even_nums = int_numbers(nums)
print(even_nums)

