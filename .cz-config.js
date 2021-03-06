module.exports = {
  types: [
    { value: 'Feat', name: '特性:    一个新的特性' },
    { value: 'Update', name: '更新:   更新一个功能' },
    { value: 'Fix', name: '修复:    修复一个Bug' },
    { value: 'Style', name: '样式:    变更的只有样式' },
    { value: 'Doc', name: '文档:    变更的只有文档' },
    { value: 'Refactor', name: '重构:    代码重构，注意和特性、修复区分开' },
    { value: 'Test', name: '测试:    添加一个测试' },
    { value: 'Framework', name: '框架:    开发框架变动(构建、脚手架工具等)' },
    { value: 'Revert', name: '回滚:    代码回退' },
  ],
  scopes: [{ name: '系统框架' }, { name: '公共组件' }],
  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [

      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个scope (可选):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: '短说明:\n',
    body: '长说明，使用"|"换行(可选)：\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明?',
  },

  allowCustomScopes: true,
  // allowBreakingChanges: ['特性', 'Fix'],
  // skip any questions you want
  skipQuestions: ['body'],

  // limit subject length
  subjectLimit: 72,
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};
