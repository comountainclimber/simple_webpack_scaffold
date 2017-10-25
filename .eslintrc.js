module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb-base",
    "globals": {
        "WP_ENVIRONMENT": true
    },
    //"installedESLint": true,
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": false,
            "jsx": false
        },
        "sourceType": "module"
    },
    "rules": {
        "global-require": [0],
        "no-underscore-dangle": [0],
        "strict": [0],
        "no-plusplus":[0],
        "no-var": [0],
        "prefer-arrow-callback": [0],
        "func-names": [0],
        "prefer-template": [0],
        "vars-on-top": [0],
        "comma-dangle": [0],
        "max-len": ["warn", 100],
        "consistent-return": "warn",
        "object-curly-spacing": [0],
        "quotes": ["error", "single", { "avoidEscape": true }],
        "object-shorthand": [0],
        "indent": ["warn", 2],
        "no-use-before-define": [0],
        "semi": [ "error", "always"],
        "no-unused-vars": ["error", { "args": "none" }],
        "import/no-extraneous-dependencies": "warn"
    }
};
