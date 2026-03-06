#---------------------------------------
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

class Student(Person):
    def __init__(self, name, age, grade):
        super().__init__(name, age)
        self.grade = grade

#---------------------------------------------
class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

class Manager(Employee):
    def __init__(self, name, salary, department):
        super().__init__(name, salary)
        self.department = department

#--------------------------------------------
class Shape:
    def area(self):
        return 0

class Rectangle(Shape):
    def __init__(self, width, height):
        super().__init__()
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

#--------------------------------------------
class User:
    def __init__(self, username, email):
        self.username = username
        self.email = email

class Admin(User):
    def __init__(self, username, email, role):
        super().__init__(username, email)
        self.role = role


