import csv
from xml.dom import minidom
import yaml

# .txt file
txtDict = {}
with open('01-file-format-bonanza/test-files/test.txt', 'r') as f:
    for line in f:
        key, value = line.strip().split(" ")
        txtDict[key] = value
        
print(txtDict)
 
# .csv file
with open('01-file-format-bonanza/test-files/test.csv', mode='r') as infile:
    reader = csv.DictReader(infile, skipinitialspace=True)
    d = [r for r in reader]
    print(d)

# .xml file
dom = minidom.parse('01-file-format-bonanza/test-files/test.xml')
elements = dom.getElementsByTagName('student')

print(f"There are {len(elements)} students:")

print('\nAll student data:')
for elem in elements:
    print(elem.toxml())

# .yml file
with open('01-file-format-bonanza/test-files/test.yml') as f:
    my_dict = yaml.safe_load(f)
    print(my_dict)
