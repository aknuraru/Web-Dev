from models import Animal,Dog,Cat
def main():
    animals = [
        Dog("Buddy", 3, "Golden Retriever"),
        Dog("Max", 5, "Beagle", trained=True),
        Cat("Luna", 2, "Black"),
        Cat("Mittens", 4, "Orange", indoor=False),
        Animal("Mystery", 1, "Unknown")
    ]
    for animal in animals:
        print(animal) #str method
        print(animal.info()) #parent method
        print(animal.speak()) #polymorphism
        if isinstance(animal, Dog):
            print(animal.train())
        elif isinstance(animal, Cat):
            print(animal.play())
if __name__ == "__main__":
    main()