module.exports = {
    extends: ['stylelint-config-standard'],
    plugins: ['stylelint-declaration-block-no-ignored-properties', 'stylelint-order'],
    rules: {
        'color-hex-length': 'long',
        'color-named': 'never',
        'declaration-no-important': true,
        'declaration-property-value-disallowed-list': {
            '/^border/': ['none'],
            'padding': ['auto'],
        },
        'declaration-property-value-no-unknown': true,
        'font-weight-notation': 'numeric',
        'function-url-no-scheme-relative': true,
        'keyframe-block-no-duplicate-selectors': true,
        'max-nesting-depth': 3,
        'no-unknown-custom-media': true,
        'number-max-precision': null,
        'selector-max-compound-selectors': 3,
        'selector-max-id': 0,
        'selector-max-universal': 0,
        'selector-no-qualifying-type': [
            true,
            {
                ignore: ['attribute'],
            },
        ],
        'selector-not-notation': 'complex',
        'time-min-milliseconds': 100,

        'order/properties-alphabetical-order': true,
        'plugin/declaration-block-no-ignored-properties': true,
    },
};
