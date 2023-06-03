for i in [*open(0)][1:]:
    print(1 if i.strip() == '1' else pow(2, int(i) - 2, 1000000007))