import datetime

# For date information
print(datetime.date.today())
""" 2024-05-11 """

# For year information
print(datetime.date.today().year)
"""2024"""

# For finding weekday (11-05-2024 : 5(Saturday)
print(datetime.date.weekday(datetime.date.today()))

# For finding current date time
print(datetime.datetime.today().ctime())
"""Sat May 11 15:40:25 2024"""
print(datetime.datetime.today())
""" 2024-05-11 15:43:04.006174 """


print(datetime.datetime.now())
""" 2024-05-11 19:58:49.727183 """

now = datetime.datetime.now()
odate = now.strftime("%H:%M:%S")
print(odate)
print(odate[:2])
print(odate[3:5])
print(odate[6:])