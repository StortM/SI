import csv
import xmltodict
import yaml
import json

# .txt file
txtDict = {}

with open('test-files/test.txt', 'r') as f:
    for line in f:
        key, value = line.strip().split(":")
        txtDict[key] = value
        
print(txtDict)
 
# .csv file
csvDict = {}
with open('test-files/test.csv', mode='r') as infile:
    reader = csv.DictReader(infile, skipinitialspace=True)
    csvDict = [r for r in reader]
    
print(csvDict)

# .xml file
with open('test-files/test.xml', 'r', encoding='utf-8') as file:
    xmlFromFile = file.read()

xmlDict = xmltodict.parse(xmlFromFile)
print(xmlDict)

# .yml file
ymlDict = {}
with open('test-files/test.yml') as f:
    ymlDict = yaml.safe_load(f)

print(ymlDict)

# .json file
jsonDict = {}
with open('test-files/test.json') as f:
    jsonDict = json.load(f)

print(jsonDict)
