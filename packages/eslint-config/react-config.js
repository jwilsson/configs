import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export const reactConfig = [
    {
        files: ['**/*.jsx', '**/*.tsx'],
        plugins: {
            react,
            reactHooks,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            'react/button-has-type': 'error',
            'react/default-props-match-prop-types': 'error',
            'react/forbid-component-props': 'error',
            'react/hook-use-state': 'error',
            'react/iframe-missing-sandbox': 'error',
            'react/jsx-boolean-value': 'error',
            'react/jsx-curly-brace-presence': [
                'error',
                {
                    props: 'never',
                    children: 'never',
                    propElementValues: 'always',
                },
            ],
            'react/jsx-handler-names': 'error',
            'react/jsx-no-bind': [
                'error',
                {
                    allowArrowFunctions: true,
                },
            ],
            'react/jsx-no-constructed-context-values': 'error',
            'react/jsx-no-leaked-render': 'error',
            'react/jsx-no-script-url': 'error',
            'react/jsx-no-useless-fragment': 'error',
            'react/jsx-pascal-case': 'error',
            'react/jsx-props-no-spread-multi': 'error',
            'react/no-access-state-in-setstate': 'error',
            'react/no-arrow-function-lifecycle': 'error',
            'react/no-danger': 'error',
            'react/no-deprecated': 'error',
            'react/destructuring-assignment': [
                'error',
                'always',
                {
                    destructureInSignature: 'always',
                    ignoreClassFields: true,
                },
            ],
            'react/no-adjacent-inline-elements': 'error',
            'react/no-did-mount-set-state': 'error',
            'react/no-did-update-set-state': 'error',
            'react/no-multi-comp': 'error',
            'react/no-namespace': 'error',
            'react/no-redundant-should-component-update': 'error',
            'react/no-this-in-sfc': 'error',
            'react/no-typos': 'error',
            'react/no-unsafe': 'error',
            'react/no-unused-prop-types': 'error',
            'react/no-unused-state': 'error',
            'react/no-will-update-set-state': 'error',
            'react/prefer-es6-class': 'error',
            'react/prefer-stateless-function': 'error',
            'react/require-optimization': 'error',
            'react/self-closing-comp': 'error',
            'react/sort-comp': 'error',
            'react/sort-default-props': 'error',
            'react/sort-prop-types': 'error',
            'react/style-prop-object': 'error',
            'react/void-dom-elements-no-children': 'error',
        },
    },
];
