def func(a, b):
    a += 1 
    b.append(1)
    return a, b # დააბრუნებს a და b
    a = 5 # ა=5
    b= [] #ბ = [] ანუ ცარიელი ლისტი

print (func(a, b))#ეს დაბეჭდავს (6, [1])
print(a, b)#5 [1]

