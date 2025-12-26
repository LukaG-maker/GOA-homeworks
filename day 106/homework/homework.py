# // 2) რა დანიშნულება აქვს finally, else და raise keyword-ებს?

# // 3) შექმენით ფუნქცია divide(a, b) რომელიც აბრუნებს გაყოფის შედეგს.
# // გამოიყენეთ try/except, რომ ZeroDivisionError-მა არ გამოიწვიოს შეცდომა.

# // 4) დაწერეთ კოდი, რომელიც:
# // try-ში ბეჭდავს "Trying..."
# // except-ში ბეჭდავს "Error encountered"
# // finally-ში ბეჭდავს "Code cleanup is done"

# // 5) დაწერეთ ფუნქცია check_password, რომელსაც გადაეცემა პარამეტრი pass.
# // გამოიყენეთ Exception Handling, რომ გამოიწვიოთ შემდეგი Error-ები:
# // თუ პაროლი < 8 სიმბოლოა -> "Password too short"
# // თუ შეიცავს space-ს -> "Password cannot contain spaces"
# // თუ ყველაფერი სწორია აბრუნებს "Password accepted"

# // 6) განურჩევლად იმისა დაესწარით გაკვეთილს თუ არა - ყველამ თავიდან ბოლომდე უყურეთ ჩანაწერს. შემდეგზე შევამოწმებ თქვენს ცოდნას.
#-----------------------------------------------
# try:
#     num1 = int(input('ENTER NUM1: '))
#     num2 = int(input('ENTER NUM2: '))
# except ZeroDivisionErorr:
#     print("cant do that")
# else:
#     print(num1 // num2)
#-----------------------------------------------
# try:
#     print("Trying..")
# except ValueError:
#     print( "Error encountered")
# finally:
#     print("code cleanup is done")

#-----------------------------------------------

# try:
#     check_password = input("check password:")
# except SyntaxError:
#     print("print Error")
# if  len(check_password) < 8:
#         print("passsword to short")
# elif len(check_password) > 8:
#     print("Password accepted")
# for space in check_password:
#     if space == " ":
#         print( "Password cannot contain spaces")
