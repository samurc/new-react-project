require('dotenv').config()

const env = [
  'REACT_DEV_NAME'
]
function buildEnvConfig (acc, cur) {
  return { ...acc, [`process.env.${cur}`]: process.env[cur] }
}

module.exports = env.reduce(buildEnvConfig, {})
