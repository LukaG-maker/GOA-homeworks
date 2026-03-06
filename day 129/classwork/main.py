# შექმენით Movie მშობელი კლასი და გაუწერეთ ატრიბუტი: name.
# ამავე კლასში შექმენით მეთოდი display_info(), რომელიც დაბეჭდავს წინადადებას 'The name of the film is...{name}'

# შექმენით შვილი კლასი და დაარქვით თქვენი საყვარელი ფილმის სახელი. გამოიყენეთ super() მეთოდი, რომ ამ კლასს დაუმატოთ ახალი ატრიბუტები: director, year.
# display_info() მეთოდი შეცვალეთ Method overriding-ის გარეშე super()-ის გამოყენებით და მან უნდა გამოიტანოს ახალი ინფორმაცია: 'The name of the film is {name}. \n The director is {directr} \n and it came out in {year}.

class Movie:
    def __init__(self, name):
        self.name = name
        
    def display_info(self):
        print(f"'The name of the film is...{self.name}")

film = Movie("rocky")
film.display_info()
#-------------------------------------------------------
class Rocky(Movie):
    def __init__(self, name, director, year):
        super().__init__(name)
        self.director = director
        self.year = year
        
    def display_info(self):
        super().display_info(self)
        print(f"the director of the movie is {self.director}")

my_fav_film = Rocky("rocky, John G. Avildsen 1976")
my_fav_film.display_info()