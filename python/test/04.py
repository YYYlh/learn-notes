import shelve

shelveFile = shelve.open('myData')

# cars = ['奔驰', '奥迪']

# shelveFile['cars'] = cars

# shelveFile.close()

print(shelveFile.get('cars'))

