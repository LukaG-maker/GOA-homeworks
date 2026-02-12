# შექმენით მშობელი კლასი სახელად Bird. მას გადაეცით init-ის საშუალებით თვისება name. ასევე მეთოდი eat და sleep.
# Bird-ს ჰყავდეს 2 სტამომავალი კლასი: Seagull და Duck. მათ მიეცით საკუთარი მეთოდი speak. 

# გამოიძახეთ შვილი კლასებიდან ყველა შექმნილი მეთოდი

class Bird:
    def __init__(self, name):
        self.name = name
    
    def eat(self):
        print(f"{self.name} is eating")
    
    def sleep(self):
        print(f"{self.name} is sleeping")

class Seagull(Bird):
    def speak(self):
        print(f"{self.name} says Squawk")
    
class Duck(Bird):
    def speak(self):
        print(f"{self.name} says Quack")

Seagull1 = Seagull("deme")
Seagull1.eat()
Seagull1.sleep()
Seagull1.speak()

Duck1 = Duck("Donald")
Duck1.eat()
Duck1.sleep()
Duck1.speak()