this_is_username = "breh"
this_is_perssonal_password = "passwordlol"

inputuser = ""
inputpass = ""

while inputuser != this_is_username or inputpass != this_is_perssonal_password:
    inputuser = input("enter your username bro :")
    inputpass = input("enter your password bro :")

    if inputuser == this_is_username and inputpass ==  this_is_perssonal_password:
        print("hello user how are you?")
    else:
        print("you are not the user bro")