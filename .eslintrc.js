// .eslintrc.js
module.exports = {
  extends: [
    'plugin:vue/recommended',
    'plugin:vuetify/base'
  ],
  rules: {
    'vuetify/no-deprecated-classes': 'error',
    'vuetify/no-legacy-grid': 'error',
    // 위의 룰로 인해 v-legacy와 v-flex가 에러뜸
    'indent': ["error", 2]
  }
}
