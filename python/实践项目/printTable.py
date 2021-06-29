

def printTable():
    tableData = [['apples', 'oranges', 'cherries', 'banana'],
             ['Alice', 'Bob', 'Carol', 'David'],
             ['dogs', 'cats', 'moose', 'goose']]
    colWidth = [0] * len(tableData)
    for i in range(len(tableData)):
        colWidth[i] = max(len(tableData[i][j]) for j in range(len(tableData[i])))
    for i in range(len(tableData[0])):
        for j in range(len(tableData)):
            print(tableData[j][i].rjust(colWidth[j]), end=' ')
        print('')
printTable()