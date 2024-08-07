import tseslint from 'typescript-eslint';

export const typescriptConfig = [
    ...tseslint.configs.strictTypeChecked,
    {
        files: ['**/*.ts', '**/*.tsx'],
        plugins: {
            '@typescript-eslint': tseslint.plugin,
        },
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                projectService: true,
            },
        },
        rules: {
            'consistent-return': 'off',
            'default-param-last': 'off',
            'no-invalid-this': 'off',
            'no-loop-func': 'off',
            'no-shadow': 'off',
            'no-unused-expressions': 'off',
            'no-use-before-define': 'off',
            'prefer-destructuring': 'off',

            '@typescript-eslint/array-type': 'error',
            '@typescript-eslint/consistent-generic-constructors': 'error',
            '@typescript-eslint/consistent-indexed-object-style': 'error',
            '@typescript-eslint/consistent-return': 'error',
            '@typescript-eslint/consistent-type-assertions': [
                'error',
                {
                    assertionStyle: 'as',
                    objectLiteralTypeAssertions: 'never',
                },
            ],
            '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
            '@typescript-eslint/consistent-type-exports': [
                'error',
                {
                    fixMixedExportsWithInlineTypeSpecifier: true,
                },
            ],
            '@typescript-eslint/consistent-type-imports': [
                'error',
                {
                    prefer: 'no-type-imports',
                },
            ],
            '@typescript-eslint/default-param-last': 'error',
            '@typescript-eslint/explicit-member-accessibility': 'error',
            '@typescript-eslint/explicit-function-return-type': [
                'error',
                {
                    allowIIFEs: true,
                },
            ],
            '@typescript-eslint/method-signature-style': 'error',
            '@typescript-eslint/no-dupe-class-members': 'error',
            '@typescript-eslint/no-inferrable-types': 'error',
            '@typescript-eslint/no-loop-func': 'error',
            '@typescript-eslint/no-redeclare': 'error',
            '@typescript-eslint/no-require-imports': 'error',
            '@typescript-eslint/no-shadow': 'error',
            '@typescript-eslint/no-unnecessary-qualifier': 'error',
            '@typescript-eslint/no-unsafe-unary-minus': 'error',
            '@typescript-eslint/no-unused-expressions': [
                'error',
                {
                    allowShortCircuit: true,
                },
            ],
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    varsIgnorePattern: '_',
                },
            ],
            '@typescript-eslint/no-use-before-define': 'error',
            '@typescript-eslint/prefer-destructuring': 'error',
            '@typescript-eslint/prefer-enum-initializers': 'error',
            '@typescript-eslint/prefer-find': 'error',
            '@typescript-eslint/prefer-for-of': 'error',
            '@typescript-eslint/prefer-function-type': 'error',
            '@typescript-eslint/prefer-nullish-coalescing': [
                'error',
                {
                    ignoreTernaryTests: false,
                },
            ],
            '@typescript-eslint/prefer-optional-chain': 'error',
            '@typescript-eslint/prefer-string-starts-ends-with': 'error',
            '@typescript-eslint/require-array-sort-compare': 'error',
            '@typescript-eslint/return-await': 'error',
            '@typescript-eslint/sort-type-constituents': 'error',
            '@typescript-eslint/switch-exhaustiveness-check': 'error',
        },
    },
    {
        files: ['**/*.tsx'],
        rules: {
            '@typescript-eslint/explicit-module-boundary-types': 'off',
        },
    },
];
