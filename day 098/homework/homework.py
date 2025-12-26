#2) რას ეწოდება Tuple unpacking? მოიყვანეთ მინიმუმ 3 მაგალითი (Asterisk ოპერატორის გამნოყენების და გამოყენების გარეშეც)

##3) კომენტარის სახით ჩამოწერეთ რომელი მეთოდების/ფუნქციების გამოყენებაა შესაძლებელი Tuple-ებზე.

#4) კომენტარის სახით ჩამოწერეთ რომელი მეთოდების/ფუნქციების გამოყენება არ არის ხელმისაწვდომი Tuple-ებზე.

#5) შექმენით Tuple სახელწოდებით info, სადაც შეინახავთ თქვენს მონაცემებს (სახელი, ასაკი, მისამართი ა.შ). მასში შეინახეთ 5 მონაცემი და მოახდინეთ თაფლის unpacking: თითოეულ მონაცემს შესაბამისი ცვლადის სახელი შეისაბამეთ (name, age, etc..)


#1
#tuple unpacking
#my_tuple = ('A', 'B', 'C', 'D', "E", 'F', 'G')
#tuple1, tuple2, *tuple3, tuple4 = my_tuple
#print(tuple1)
#print(tuple2)
#print(tuple3)
#print(tuple4)

#2
#ფუნქციების გამოყენება არ შეიძლება ტაფლებში, tuple არის უცვლელი და ვერ შეცვლი ფუნქციებით 
#unpacking method მუშაობს tuple-ზე აი მაღლაც წერია როგორ იწერება

info = ('Luka', 'Gvelukashvili', 'krtanisi', '13 years', "8th grade")
tuple1, tuple2, tuple3, tuple4, tuple5 = info
print(tuple1)
print(tuple2)
print(tuple3)
print(tuple4)
print(tuple5) 