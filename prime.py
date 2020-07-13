def prime():
    for i in range (2, n):
        if n % i == 0:
            print ("not prime")
            break
    else:
        print("prime")
if __name__ == '__main__':
    n= int(input("enter the number : "))
    prime()