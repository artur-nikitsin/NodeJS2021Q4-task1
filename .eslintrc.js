module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['prettier', 'airbnb-base', 'plugin:prettier/recommended'],
    plugins: ['prettier'],

    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': 'error',
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
    },
}
