from random import *
import string
import datetime
import FireBaseI as fbi

ch = str(datetime.datetime.now()) + string.ascii_letters + string.hexdigits + '@#-/|$%&'


id = ''.join(choice(ch) for i in range(randint(25, 30)))

# print(id)
print(datetime.date.today())

fb = fbi.StudentData()
print(fb.show_class_attendance_data(23007, 20104133004)['data'])
print(fb.show_main_gate_data(23007, 20104133004))
# fb.add_class_attendance(23007, 20104133004, '10:32:23', '12:43:23')
# fb.add_main_gate_data(23007, 20104133004, '18:32:43', '16:43:32')

# d = {'2': 'd', '3': 'g'}
# f = d.keys()
# print(list(f))