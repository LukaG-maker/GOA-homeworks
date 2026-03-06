# --- 3) Person Class ---
class Person:
    def __init__(self, name, age, id_number):
        self.name = name                # Public
        self._age = age                 # Protected (Level 1)
        self.__id_number = id_number    # Private (Level 2)

    def get_age(self):                  # Public method
        return self._age

    def __is_adult(self):               # Private method
        return self._age >= 18


# --- 4) Phone Class ---
class Phone:
    def __init__(self, model, battery_health, serial_number):
        self._model = model                         # Protected (Level 1)
        self._battery_health = battery_health       # Protected (Level 1)
        self.__serial_number = serial_number        # Private (Level 2)

    def charge(self):
        print(f"{self._model} is charging...")

    def __validate_serial_number(self):             # Private method
        return len(str(self.__serial_number)) > 5




