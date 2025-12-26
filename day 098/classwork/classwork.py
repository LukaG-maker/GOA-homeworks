#1) დაწერეთ თქვენი ვარაუდი: რას გამოიტანს ეს კოდი?
#*fruit1, fruit2, fruit3 = fruits
#ეს კოდი ტაფლში რაც იქნება დაწერილი მაგალითად ხუთი რაღაცა რომ იყოს დაწერილი ფრუტ ერთს ექნება სამი და ფრუტ ორს და დრუტ სამს
#ერთი ექნებათ
#-------------------------------------------------------------------------------------------------------------------------



#ახსენით რას აკეთებს Asterisk ოპერატორი და მოიყვანეთ რამოდენიმე მაგალითი.
#* არის ასტერრისკი და დარჩენილ ელემენტებს ტაფლში გამოიტანს მაგალითად:

#fruits = ("watermellon", "banana", "strawberry", "blueberry", "peach")
#fruit1, *fruit2, fruit3 = fruits
#print(fruit1)
#print(fruit2)
#print(fruit3)
# fruit1 gamoitans watermellon, fruit 2 banana strawberrys da blueberry da fruit3 peach

#----------------------------------------------------------------------------------------------


#3) ჩამოწერეთ რა მსგავსება და განსხვავებაა List-ებსა და Tuple-ბს შორის.

#oriveshi wer elementebs oriveshi shegizlia dawero intebi stringebi da floatebi orive shegizlia dabewdot
#gansxvaveba isaa rom tuple არის უცვლელი და ვერ შეცვლი ფუნქციებით 
#ხოლო ლისტს შეცვლი ინდექსებით

#----------------------------------------------------------------------------------------------------------

#4) შექმენით Tuple, სადაც შეინახავთ 7 ელემენტს. გამოიყენეთ Tuple Unpacking იმისთვის, რომ 4 სხვადასხვა ცვლადში გადაანაწილოთ Tuple-ის ელემენტები. ოთხივე ცვლადი დაბეჭდეთ ტერმინალში.#

my_tuple = ('A', 'B', 'C', 'D', "E", 'F', 'G')
tuple1, tuple2, *tuple3, tuple4 = my_tuple
print(tuple1)
print(tuple2)
print(tuple3)
print(tuple4)