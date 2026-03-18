class Animal:
    def __init__(self,name,age,species):
        self.name=name
        self.age=age
        self.species=species
    def speak(self):
        return "Some generic sound"
    def info(self):
        return f"{self.name} is {self.age} years old {self.species}"
    def __str__(self):
        return f"Animal({self.name},{self.age},{self.species})"
class Dog(Animal):
    def __init__(self,name,age,breed,trained=False):
        super().__init__(name,age,"Dog")
        self.breed=breed
        self.trained=trained
    def speak(self):
        return "Woof!"
    def train(self):
        self.trained=True
        return f"{self.name} is trained"
    def __str__(self):
        return f"Dog({self.name},{self.age},{self.breed},{self.trained})"
class Cat(Animal):
    def __init__(self,name,age,color,indoor=True):
        super().__init__(name,age,"Cat")
        self.color=color
        self.indoor=indoor
    def speak(self):
        return "Meow!"
    def play(self):
        return f"{self.name} is playing a toy"
    def __str__(self):
        return f"Cat({self.name},{self.age},{self.color},{self.indoor})"
