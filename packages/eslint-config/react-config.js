import eslintReact from '@eslint-react/eslint-plugin';
import { defineConfig } from 'eslint/config';

export const reactConfig = defineConfig({
    files: ['**/*.jsx', '**/*.tsx'],
    extends: [eslintReact.configs['recommended-typescript']],
    rules: {
        '@eslint-react/dom-no-dangerously-set-innerhtml': 'error',
        '@eslint-react/dom-no-missing-button-type': 'error',
        '@eslint-react/dom-no-missing-iframe-sandbox': 'error',
        '@eslint-react/dom-no-script-url': 'error',
        '@eslint-react/dom-no-string-style-prop': 'error',
        '@eslint-react/dom-no-void-elements-with-children': 'error',
        '@eslint-react/jsx-no-useless-fragment': 'error',
        '@eslint-react/no-access-state-in-setstate': 'error',
        '@eslint-react/no-leaked-conditional-rendering': 'error',
        '@eslint-react/no-set-state-in-component-did-mount': 'error',
        '@eslint-react/no-set-state-in-component-did-update': 'error',
        '@eslint-react/no-set-state-in-component-will-update': 'error',
        '@eslint-react/no-unsafe-component-will-mount': 'error',
        '@eslint-react/no-unsafe-component-will-receive-props': 'error',
        '@eslint-react/no-unsafe-component-will-update': 'error',
        '@eslint-react/no-unstable-context-value': 'error',
        '@eslint-react/no-unused-state': 'error',
        '@eslint-react/use-state': 'error',
    },
});
