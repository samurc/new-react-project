const env = require("./src/config/setup")

module.exports = {
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ],
    "plugins": [
        "@babel/plugin-transform-runtime",
        ["transform-define", env]
    ]
}