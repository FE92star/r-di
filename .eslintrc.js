const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  // 自定义eslint preset扩展包
  extends: ['@antfu/eslint-config-ts'],
})
