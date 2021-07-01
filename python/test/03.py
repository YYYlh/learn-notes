import os

print(os.getcwd())
print(os.path.getsize(os.getcwd()))
print(os.listdir('.'))

# fileObj = open('./03.py')
# print(fileObj.read())
# print(fileObj.readlines())
fileObj = open('./03.py', 'a')
fileObj.write('#我是添加进来的额')
fileObj.close()

# os.mkdir(os.path.join(os.getcwd(), '我是python创建的文件夹'))
#我是添加进来的额
