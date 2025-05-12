guess_num = 5
user_input = 0
lives = 3

while user_input != guess_num and lives != 0:
    user_input = int(input("Please enter number: "))

    if user_input == guess_num:
        print("You Won")
    else:
        print("Try again")
    
    lives = lives - 1
