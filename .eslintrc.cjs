rules: {
  'prettier/prettier': [
    'warn',
    {
      singleQuote: true,
      semi: false,
      printWidth: 80,
      trailingComma: 'none',
      endOfLine: 'auto'
    }
  ],
  'vue/multi-word-component-names': [
    'warn',
    {
      ignores: ['index']
    }
  ],
  'vue/no-setup-props-destructure': ['off'],
  // 💡 添加未定义变量错误提示，create-vue@3.6.3 关闭，这里加上是为了支持下一个章节演示。
  'no-undef': 'error'
}