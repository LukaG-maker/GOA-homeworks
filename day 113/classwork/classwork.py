# Filter ის გამოყენებით:
# 1) languages = ["Python", "Java", "JavaScript", "C", "C++", "PHP", "Go", "Rust", "Ruby", "Kotlin"] დატოვე მხოლოდ ის ენები რომლების სიგრძეც მეტია 5ზე.

# 2) foods = ["salad H", "burger J" , "fish H","fries J","fruits H","nuts H"]
# სიიდან დატოვე მხოლოდ ჯანსაღი საკვები —> H

# Map ის გამოყენებით:
# 3) languages = ["Python", "Java", "JavaScript", "C", "C++", "PHP", "Go", "Rust", "Ruby", "Kotlin"] თითოეულ ელემენტს წინ დაუმატეთ "I study"

# 4) minutes = [60, 120, 180, 240, 30] მოცემულია წუთები სიაში,map() ის გამოყენებით წუთები გადაიყვანეთ საათებში და დაპრინტეთ
# Hint: hours = minutes / 60


# languages = ["Python", "Java", "JavaScript", "C", "C++", "PHP", "Go", "Rust", "Ruby", "Kotlin"]

# language2 =  list(filter(lambda item: len(item) > 5, languages))
# print(language2)
#----------------------------------------------------------------------
# foods = ["salad H", "burger J" , "fish H","fries J","fruits H","nuts H"]

# h_foods = list(filter(lambda item: "H" in item, foods))
# print(h_foods)
# #--------------------------------------------------------------------------
# languages3 = ["Python", "Java", "JavaScript", "C", "C++", "PHP", "Go", "Rust", "Ruby", "Kotlin"]

# lan_list = list(map(lambda x: 'i study' + x, languages3))
# print(lan_list)
# #------------------------------------------------------------------------
# minutes = [60, 120, 180, 240, 30]

# hours = list(map(lambda item: item / 60, minutes))
# print(hours)