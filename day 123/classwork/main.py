# 1) შექმენით Car class, რომელსაც გაუწერთ თვისებებს: name, brand, horsePower, year, color. 
# class-ში ასევე დაამატეთ მეთოდი move(), რომელიც დაბეჭდავს '{car name} is moving' ყოველ გამოძახებაზე.

# დაამატეთ 2 სხვადასხვა მანქანის ცვლადი და გამოიტანეთ თითოეულის თვისება ცალ-ცალკე. ასევე ორივე მანქანაზე გამოიძახეთ move() მეთოდი.

class Car:
    def __init__(self, name, brand, horsepower, year, color):
        self.name = name
        self.brand = brand
        self.horsepower = horsepower
        self.year = year
        self.color = color

    def move(self):
        print(f'car is moving')

car1 = Car('M5', 'BMW', 667, 2026, 'Black' )
car2 = Car('911 gtr', 'porsche', 510, 2025, "dark blue metalic")
        
print(f'Name: {car1.name}')
print(f'brand: {car1.brand}')
print(f'HP: {car1.horsepower}')
print(f'year: {car1.year}')
print(f'color: {car1.color}')

print(f'Name: {car2.name}')
print(f'brand: {car2.brand}')
print(f'HP: {car2.horsepower}')
print(f'year: {car2.year}')
print(f'color: {car2.color}')

car1.move()
car2.move()