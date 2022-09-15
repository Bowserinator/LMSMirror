module.exports = {
    env: {
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended',
        '@hellomouse/eslint-config'
    ],
    rules: {
        'curly': ['error', 'multi-or-nest'],
        'vue/this-in-template': 'off',
        'vue/valid-v-slot': ['off'],
        'vue/script-setup-uses-vars': 'off',

        'no-unused-vars': 'warn',
        'vue/no-unused-vars': 'warn',

        'vue/html-indent': ['warn', 4],
        'indent': ['warn', 4],

        'vue/max-attributes-per-line': ['warn', {
            'singleline': 4,
            'multiline': 4
        }]
    }
};
