const jsonfile = require('jsonfile');

const moment = require('moment');

const FILEPATH = './data.json';

const DATE = moment().format();

const data = {
    date: DATE
}

jsonfile.writeFile(FILEPATH, data);
