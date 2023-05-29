import csv
import xmltodict
import yaml
import json

def convertTxtToDict(txtFile):
    txtDict = {}
    with open(txtFile, 'r') as f:
        for line in f:
            key, value = line.strip().split(":")
            txtDict[key] = value
    return txtDict
 
def convertCsvToDict(csvFile):
    csvDict = {}
    with open(csvFile, mode='r') as infile:
        reader = csv.DictReader(infile, skipinitialspace=True)
        csvDict = [r for r in reader]
    return csvDict

def convertXmlToDict(xmlFile):
    with open(xmlFile, 'r', encoding='utf-8') as file:
        xmlFromFile = file.read()
    return xmltodict.parse(xmlFromFile)

def convertYmlToDict(ymlFile):
    ymlDict = {}
    with open(ymlFile) as f:
        ymlDict = yaml.safe_load(f)
    return ymlDict

def convertJsonToDict(jsonFile):
    jsonDict = {}
    with open(jsonFile) as f:
        jsonDict = json.load(f)
    return jsonDict
