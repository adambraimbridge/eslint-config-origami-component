module.exports = {
	"ecmaFeatures": {
		"modules": true
	},
	"parserOptions": {
		"sourceType": "module"
	},
	"env": {
		"es6": true,
		"browser": true
	},
	"rules": {
		"no-unused-vars": 2,
		"no-undef": 2,
		"eqeqeq": 2,
		"guard-for-in": 2,
		"no-extend-native": 2,
		"wrap-iife": 2,
		"new-cap": 2,
		"no-caller": 2,
		"no-multi-str": 0,
		"dot-notation": 0,
		"semi": [2, "always"],
		"strict": [2, "global"],
		"valid-jsdoc": 1,
		"no-irregular-whitespace": 1,
		"no-multi-spaces": 2,
		"one-var": [2, "never"],
		"constructor-super": 2,
		"no-this-before-super": 2,
		"no-var": 2,
		"prefer-const": 1,
		"no-const-assign": 2
	},
	"globals": {
		"require": false,
		"module": false,
		"exports": false,
		"requireText": false
	}
};