if __name__ == "__main__":
    n = int(input("enter a number : "))
    i = 1
    while (i <= n):
        j = 1
        while (j < i):
            print(j, end="")
            j += 1
        print(i)
        i += 1
