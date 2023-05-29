import { readFile } from 'fs';
import path from 'path';
import xml2js from "xml2js";
import yaml from "js-yaml";

const fetchFile = async (filePath) => {
    return new Promise((resolve, reject) => {
        readFile(filePath, 'utf8', (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

export const parseFile = async (filePath) => {
    const file = await fetchFile(filePath)
    const fileType = path.extname(filePath)

    switch (fileType) {
        case '.txt':
            return parseTextFile(file)
        case '.yml':
            return parseYmlFile(file)
        case '.csv':
            return parseCsvFile(file)
        case '.xml':
            return parseXmlFile(file)
        default:
            throw new Error('File type not supported')
    }
}

const parseTextFile = (file) => {
    const lines = file.split('\n')
    return lines.reduce((acc, line) => {
        const [key, value] = line.split(':')
        acc[key] = value
        return acc
    }, {})
}
const parseYmlFile = (file) => {
    return yaml.load(file)
}

const parseCsvFile = (file) => {
    const [header, ...rows] = file.split('\n')
    const headers = header.split(',')
    return rows.map(row => {
        const values = row.split(',')
        return headers.reduce((acc, header, index) => {
            acc[header] = values[index]
            return acc
        }, {})
    })
}

const parseXmlFile = (file) => {
    const parser = new xml2js.Parser()
    return new Promise((resolve, reject) => {
        parser.parseString(file, (err, result) => {
            if (err) reject(err)
            resolve(result)
        })
    })
}