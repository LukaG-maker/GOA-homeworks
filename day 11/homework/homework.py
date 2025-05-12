guess_num = 5
input_for_game = 0

while input_for_game != guess_num:
    input_for_game = int(input("Please enter number: "))

    if input_for_game == guess_num:
        print("You Won")
    else:
        print("Try again")