const getFlagValue = require('./flags')

console.log(`Oi ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)