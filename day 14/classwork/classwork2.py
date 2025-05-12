names = []

for i in range(5):
    name = input("Please enter a name: ")
    names.append(name)


for name in names:
    if len(name) > 5:
        print(name)