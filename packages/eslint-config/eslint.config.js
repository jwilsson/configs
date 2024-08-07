import js from '@eslint/js';
import { defaultConfig } from './default-config.js';
import { reactConfig } from './react-config.js';
import { typescriptConfig } from './typescript-config.js';

export default [js.configs.recommended, ...defaultConfig, ...typescriptConfig, ...reactConfig];
