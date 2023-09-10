def format_number(number):

    if number < 0:
        print("Number must be Positive.")
    
    else:
        string = str(number[::-1])
        

a = 1000000
a = list(str(a))[::-1]
print(a)

string = ""
var = 0
for i in a:
    string += i
    var +=1

    if var % 3 == 0:
        string+=","

print(string[::-1])

