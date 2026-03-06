class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    def get_salary(self):
        print(f"{self.name}-ის ანაზღაურება არის: {self.salary} ლარი")

class Manager(Employee):
    def bonus_salary(self):
        self.salary = self.salary * 1.20 
        print(f"ბონუსის შემდეგ {self.name}-ის ხელფასი გახდა: {self.salary}")

# გამოყენება:
emp = Employee("გიორგი", 2000)
emp.get_salary()

mgr = Manager("ანი", 3000)
mgr.get_salary()
mgr.bonus_salary()