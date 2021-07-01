import re

phoneNumberRegex = re.compile(r'(\d\d\d)-\d\d\d\-\d\d\d\d')

mo = phoneNumberRegex.search('我的手机号是123-123-1234')
print(mo.group(1))
print(mo.group())
print(mo.groups())

heroRegex = re.compile(r'超人|钢铁侠')


message = '超人和钢铁侠都是英雄，我不是'
heroMo = heroRegex.search(message)
print(heroMo.group())
heroStr = heroRegex.findall(message)
print(heroStr)

allNumberRegex = re.compile(r'^\d+$')

allNumberMo = allNumberRegex.search('122')
print(allNumberMo.group())