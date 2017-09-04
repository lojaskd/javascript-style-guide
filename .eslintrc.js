module.exports = {
  extends: ['standard'],
  "plugins": [
    "standard",
    "promise"
  ],
  rules: {
    'max-len': [
      'error',
      {
        code: 80,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      }
    ]
  }
}