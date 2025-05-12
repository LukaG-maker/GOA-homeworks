fruits = ["banana, apple, watermelon"]

index = int(input("Please enter the index between (0 - 2): "))

if 0 <= index < len(fruits):
        removed_fruit = fruits.pop(index)
        print(removed_fruit)


    

