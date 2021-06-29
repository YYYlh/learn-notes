import pyperclip

PASSWORDS = {'liuhao': 'emmm123liu...'}

account = input()

if account in PASSWORDS:
    pyperclip.copy(PASSWORDS[account])
    print('我们拿到了你的密码，请直接粘贴')
else:
    print('没有找到你的密码')