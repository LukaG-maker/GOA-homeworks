class Person:
      def __init__(self, name, age):
        self.name = name
        self.age = age

      def introduce(self):
            print("hi my name is {name}, my age is {age}")

class Rectangle:
     def __init__(self, width, height):
        self.width = width
        self.height = height

     def parameter(self):
        return self.width * self.height
     
     def area(self):
        return 2 * (self.width + self.height)
     

# 4) შექმენით კლასი Product და დაამატეთ თვისებები price და quantity. დაამატეთ მეთოდი:
# total_value() → price × quantity

# ასევე კლასის გამოყენებით შექმენით პროდუქტების სია და:
# • იპოვეთ ყველაზე ძვირი პროდუქტი
# • იპოვეთ ყველაზე იაფი პროდუქტი

class Product:
    def __init__(self, price, quantity):
        self.price = price
        self.quantity = quantity
    def total_value(self):
        return self.price * self.quantity

p1 = Product(1200, 2)
p2 = Product(50, 10)
p3 = Product(300, 5)
p4 = Product(15, 100)

Product = [p1, p2, p3, p4]

for i in Product:
    if i >
        
       
        

        