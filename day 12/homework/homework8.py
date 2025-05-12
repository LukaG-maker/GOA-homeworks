numberlol = int(input("enter a number :"))
boolean = True 

if numberlol < 2:
    boolean = False
else:
    for i in range(2, numberlol):
        if numberlol % i == 0:
            boolean = False
            break

if boolean:
    print("number is easy")
else:
    print("number is not easy")