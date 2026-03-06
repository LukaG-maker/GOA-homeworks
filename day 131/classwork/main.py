# შექმენით Car კლასი ატრიბუტებით (owner_name, plate_number)
# owner name უნდა იყოს protected attribute (Level 1)
# ხოლო plate_number უნდა იყოს private attribute (Level 2)

# ორივე გამოიტანეთ ტერმინალში. (გამოიყენეთ დამალული ატრიბუტის გამოყენების გზა რაც ვისწავლეთ.)

# კლასში დაამატეთ display_owner მეთოდი, რომელიც უნდა იყოს private attribute (Level 2) დაცული. იგი გამოიძახეთ name mangling-ის საშუალებით.

class Car:
    def __init__(self, owner_name, plate_number):
        self._owner_name = owner_name

        self.__plate_number = plate_number
    
    def __display_number(self):
        print(f"owners name is {self._owner_name}")

my_car = Car("luka", "Mustang")

print(my_car._owner_name)
print(my_car._Car__plate_number)

my_car._Car__display_owner()