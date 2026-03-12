#!/usr/bin/python3


with open("pic10.md", "r") as f:
    line = f.read()
    print(line)
    for i in range(20, 28):
        with open(f"pic{i}.md", "w+", i) as tm:
            tm.write(line)
    
