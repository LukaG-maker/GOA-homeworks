def work(text, a):
    count = 0 
    for i in text:
        if i == a.lower() or i == a.upper():
            count += 1
    return count
        
def example(one, two):
    res = []
    for i in list2