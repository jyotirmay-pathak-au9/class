if __name__ == '__main__':
    no = int(input("number: "))
    for i in range (1, no + 1):
        for j in range ((no - i), 0, -1 ):
            print(" ", end="")
        for j in range (i):
            print (" *", end="")
        print()