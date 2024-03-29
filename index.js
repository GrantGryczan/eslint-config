const isInstalled = id => {
	try {
		require.resolve(id);
		return true;
	} catch {
		return false;
	}
};

const typescriptInstalled = isInstalled('typescript');
const reactInstalled = isInstalled('react');
const nextInstalled = isInstalled('next');
const reactNotNextInstalled = reactInstalled && !nextInstalled;

module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		...nextInstalled ? [
			'next'
		] : [],
		...reactNotNextInstalled ? [
			'plugin:react/recommended',
			'plugin:react-hooks/recommended'
		] : []
	],
	...typescriptInstalled && {
		parser: '@typescript-eslint/parser'
	},
	parserOptions: {
		ecmaVersion: 2020,
		...typescriptInstalled && {
			sourceType: 'module',
			project: 'tsconfig.json'
		},
		...reactInstalled && {
			ecmaFeatures: {
				jsx: true
			}
		}
	},
	plugins: [
		...typescriptInstalled ? [
			'@typescript-eslint'
		] : [],
		...reactNotNextInstalled ? [
			'react',
			'react-hooks'
		] : []
	],
	ignorePatterns: [
		'node_modules',
		'dist',
		...nextInstalled ? [
			'.next',
			'next-env.d.ts',
			'public'
		] : []
	],
	...!nextInstalled && {
		env: {
			// It isn't very precise to assume the environment is both the browser and Node, but in the worst case, this can be overwritten in the dependent's own `.eslintrc`.
			browser: true,
			node: true
		},
		...reactInstalled && {
			settings: {
				react: {
					version: 'detect'
				}
			}
		}
	},
	rules: {
		'no-async-promise-executor': 'off',
		'no-cond-assign': 'off',
		'no-constant-condition': [
			'error',
			{
				checkLoops: false
			}
		],
		'no-control-regex': 'off',
		'no-debugger': 'warn',
		'no-empty': 'off',
		'no-prototype-builtins': 'off',
		'no-unsafe-optional-chaining': 'error',
		'no-useless-backreference': 'warn',
		'curly': 'error',
		'default-param-last': 'error',
		'dot-location': [
			'error',
			'property'
		],
		'dot-notation': 'error',
		'eqeqeq': [
			'error',
			'always'
		],
		'no-caller': 'error',
		'no-case-declarations': 'off',
		'no-constructor-return': 'error',
		'no-else-return': 'error',
		'no-empty-pattern': 'warn',
		'no-extra-bind': 'error',
		'no-extra-label': 'warn',
		'no-floating-decimal': 'error',
		'no-multi-spaces': 'error',
		'no-octal-escape': 'error',
		'no-proto': 'error',
		'no-return-await': 'error',
		'no-self-assign': 'off',
		'no-self-compare': 'error',
		'no-sparse-arrays': 'off',
		'no-sequences': 'error',
		'no-throw-literal': 'error',
		'no-unused-labels': 'warn',
		'no-useless-call': 'error',
		'no-useless-concat': 'error',
		'no-useless-return': 'warn',
		'no-void': 'error',
		'prefer-regex-literals': 'error',
		'no-unused-vars': [
			'warn',
			{
				vars: 'all',
				args: 'after-used'
			}
		],
		'array-bracket-newline': [
			'error',
			'consistent'
		],
		'array-bracket-spacing': [
			'error',
			'never'
		],
		'brace-style': [
			'error',
			'1tbs',
			{
				allowSingleLine: false
			}
		],
		'comma-dangle': [
			'warn',
			'never'
		],
		'comma-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		'comma-style': [
			'error',
			'last'
		],
		'computed-property-spacing': [
			'error',
			'never'
		],
		'eol-last': 'warn',
		'func-call-spacing': [
			'error',
			'never'
		],
		'func-style': [
			'error',
			'expression'
		],
		'function-call-argument-newline': [
			'error',
			'consistent'
		],
		'function-paren-newline': [
			'error',
			'multiline-arguments'
		],
		'indent': [
			'warn',
			'tab',
			{
				SwitchCase: 1
			}
		],
		'jsx-quotes': [
			'error',
			'prefer-double'
		],
		'key-spacing': [
			'error',
			{
				beforeColon: false,
				afterColon: true,
				mode: 'strict'
			}
		],
		'keyword-spacing': [
			'error',
			{
				before: true,
				after: true
			}
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'max-statements-per-line': [
			'error',
			{
				max: 1
			}
		],
		'new-parens': [
			'error',
			'always'
		],
		'no-array-constructor': 'error',
		'no-lonely-if': 'error',
		'no-multiple-empty-lines': [
			'warn',
			{
				max: 1,
				maxEOF: 0,
				maxBOF: 0
			}
		],
		'no-negated-condition': 'error',
		'no-new-object': 'error',
		'no-restricted-syntax': [
			'error',
			{
				selector: 'ForInStatement',
				message: '`for (const key of Object.keys(object))` is faster than `for (key in object)` (though `for (const value of Object.values(object))` is fastest).'
			},
			{
				selector: 'Identifier[name=useCallback]',
				message: 'Please use `useFunction` instead of `useCallback`.'
			}
		],
		'no-trailing-spaces': [
			'warn',
			{
				skipBlankLines: false,
				ignoreComments: false
			}
		],
		'no-unneeded-ternary': [
			'error',
			{
				defaultAssignment: false
			}
		],
		'no-whitespace-before-property': 'error',
		'object-curly-newline': [
			'error',
			{
				consistent: true
			}
		],
		'object-curly-spacing': [
			'error',
			'always'
		],
		'object-property-newline': [
			'error',
			{
				allowAllPropertiesOnSameLine: true
			}
		],
		'one-var': [
			'error',
			'never'
		],
		'operator-assignment': [
			'error',
			'always'
		],
		'operator-linebreak': [
			'error',
			'before',
			{
				overrides: {
					'=': 'none'
				}
			}
		],
		'prefer-exponentiation-operator': 'error',
		'prefer-object-spread': 'error',
		'quote-props': [
			'error',
			'consistent-as-needed'
		],
		'quotes': [
			'warn',
			'single'
		],
		'semi': [
			'warn',
			'always'
		],
		'semi-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		'semi-style': [
			'error',
			'last'
		],
		'space-before-blocks': [
			'error',
			'always'
		],
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always'
			}
		],
		'space-in-parens': [
			'error',
			'never'
		],
		'space-infix-ops': 'error',
		'space-unary-ops': [
			'error',
			{
				words: true,
				nonwords: false
			}
		],
		'spaced-comment': [
			'warn',
			'always'
		],
		'switch-colon-spacing': [
			'error',
			{
				after: true,
				before: false
			}
		],
		'template-tag-spacing': [
			'error',
			'never'
		],
		'arrow-body-style': [
			'warn',
			'as-needed'
		],
		'arrow-parens': [
			'warn',
			'as-needed'
		],
		'arrow-spacing': [
			'error',
			{
				before: true,
				after: true
			}
		],
		'generator-star-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		'no-duplicate-imports': 'error',
		'no-useless-computed-key': [
			'error',
			{
				enforceForClassMembers: true
			}
		],
		'no-useless-constructor': 'warn',
		'no-useless-rename': 'error',
		'no-var': 'error',
		'object-shorthand': [
			'error',
			'always',
			{
				avoidQuotes: true
			}
		],
		'prefer-arrow-callback': 'error',
		'prefer-const': [
			'warn',
			{
				destructuring: 'all'
			}
		],
		'prefer-numeric-literals': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'require-yield': 'warn',
		'rest-spread-spacing': [
			'error',
			'never'
		],
		'symbol-description': 'error',
		'template-curly-spacing': [
			'error',
			'never'
		],
		'yield-star-spacing': [
			'error',
			'after'
		],
		...typescriptInstalled && {
			'@typescript-eslint/prefer-includes': 'error'
		},
		...reactInstalled && {
			'react/display-name': 'off',
			'react/forbid-elements': [
				'error',
				{
					forbid: [
						{
							element: 'a',
							message: 'use <Link> from \'components/Link\' instead.'
						}
					]
				}
			],
			'react/no-access-state-in-setstate': 'error',
			'react/no-did-mount-set-state': 'error',
			'react/no-did-update-set-state': 'error',
			'react/no-redundant-should-component-update': 'error',
			'react/no-unescaped-entities': 'off',
			'react/no-unused-prop-types': 'warn',
			'react/no-unused-state': 'warn',
			'react/no-will-update-set-state': 'error',
			'react/prefer-stateless-function': 'error',
			'react/prop-types': 'off',
			'react/self-closing-comp': [
				'warn',
				{
					component: true,
					html: true
				}
			],
			'react/state-in-constructor': [
				'error',
				'always'
			],
			'react/static-property-placement': [
				'error',
				'static public field'
			],
			'react/void-dom-elements-no-children': 'error',
			'react-hooks/exhaustive-deps': [
				'warn',
				{
					additionalHooks: 'useIsomorphicLayoutEffect'
				}
			]
		}
	},
	overrides: [
		...typescriptInstalled ? [
			{
				files: [
					'*.ts',
					'*.tsx'
				],
				rules: {
					'no-undef': 'off',
					'@typescript-eslint/adjacent-overload-signatures': 'error',
					'@typescript-eslint/array-type': [
						'error',
						{
							default: 'array-simple'
						}
					],
					'@typescript-eslint/await-thenable': 'error',
					'@typescript-eslint/ban-types': [
						'error',
						{
							types: {
								'{}': false
							}
						}
					],
					'@typescript-eslint/consistent-indexed-object-style': [
						'error',
						'record'
					],
					'@typescript-eslint/consistent-type-assertions': [
						'error',
						{
							assertionStyle: 'as',
							objectLiteralTypeAssertions: 'allow'
						}
					],
					'@typescript-eslint/consistent-type-imports': [
						'error',
						{
							prefer: 'type-imports',
							disallowTypeAnnotations: false
						}
					],
					'@typescript-eslint/explicit-member-accessibility': [
						'error',
						{
							accessibility: 'no-public'
						}
					],
					'@typescript-eslint/member-delimiter-style': [
						'error',
						{
							multiline: {
								delimiter: 'comma',
								requireLast: false
							},
							singleline: {
								delimiter: 'comma',
								requireLast: false
							}
						}
					],
					'@typescript-eslint/method-signature-style': [
						'error',
						'property'
					],
					'@typescript-eslint/no-confusing-void-expression': [
						'error',
						{
							ignoreArrowShorthand: false
						}
					],
					'@typescript-eslint/no-extra-non-null-assertion': 'error',
					'@typescript-eslint/no-for-in-array': 'error',
					'@typescript-eslint/no-inferrable-types': 'error',
					'@typescript-eslint/no-misused-new': 'error',
					'@typescript-eslint/no-namespace': [
						'error',
						{
							allowDeclarations: true
						}
					],
					'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
					'@typescript-eslint/no-unnecessary-boolean-literal-compare': [
						'error',
						{
							allowComparingNullableBooleansToTrue: false,
							allowComparingNullableBooleansToFalse: true
						}
					],
					'@typescript-eslint/no-unnecessary-condition': [
						'warn',
						{
							allowConstantLoopConditions: true
						}
					],
					'@typescript-eslint/no-unnecessary-qualifier': 'warn',
					'@typescript-eslint/no-unnecessary-type-assertion': 'error',
					'@typescript-eslint/no-unnecessary-type-constraint': 'error',
					'@typescript-eslint/no-var-requires': 'error',
					'@typescript-eslint/non-nullable-type-assertion-style': 'warn',
					'@typescript-eslint/prefer-as-const': 'error',
					'@typescript-eslint/prefer-function-type': 'error',
					'@typescript-eslint/prefer-literal-enum-member': 'error',
					'@typescript-eslint/prefer-ts-expect-error': 'error',
					'@typescript-eslint/triple-slash-reference': 'error',
					'@typescript-eslint/type-annotation-spacing': [
						'error',
						{
							before: false,
							after: true,
							overrides: {
								arrow: {
									before: true,
									after: true
								}
							}
						}
					],
					'@typescript-eslint/unbound-method': [
						'error',
						{
							ignoreStatic: true
						}
					],
					'@typescript-eslint/unified-signatures': 'error',
					'brace-style': 'off',
					'@typescript-eslint/brace-style': [
						'error',
						'1tbs',
						{
							allowSingleLine: false
						}
					],
					'comma-dangle': 'off',
					'@typescript-eslint/comma-dangle': [
						'warn',
						'never'
					],
					'comma-spacing': 'off',
					'@typescript-eslint/comma-spacing': [
						'error',
						{
							before: false,
							after: true
						}
					],
					'default-param-last': 'off',
					'@typescript-eslint/default-param-last': 'error',
					'dot-notation': 'off',
					'@typescript-eslint/dot-notation': 'error',
					'func-call-spacing': 'off',
					'@typescript-eslint/func-call-spacing': [
						'error',
						'never'
					],
					'indent': 'off',
					'@typescript-eslint/indent': [
						'warn',
						'tab',
						{
							SwitchCase: 1
						}
					],
					'keyword-spacing': 'off',
					'@typescript-eslint/keyword-spacing': [
						'error',
						{
							before: true,
							after: true
						}
					],
					'no-array-constructor': 'off',
					'@typescript-eslint/no-array-constructor': 'error',
					'no-duplicate-imports': 'off',
					'@typescript-eslint/no-duplicate-imports': 'error',
					'no-extra-semi': 'off',
					'@typescript-eslint/no-extra-semi': 'error',
					'no-implied-eval': 'off',
					'@typescript-eslint/no-implied-eval': 'error',
					'no-redeclare': 'off',
					'@typescript-eslint/no-redeclare': [
						'error'
					],
					'no-throw-literal': 'off',
					'@typescript-eslint/no-throw-literal': 'error',
					'no-unused-vars': 'off',
					'@typescript-eslint/no-unused-vars': [
						'warn',
						{
							vars: 'all',
							args: 'after-used'
						}
					],
					'no-useless-constructor': 'off',
					'@typescript-eslint/no-useless-constructor': 'warn',
					'quotes': 'off',
					'@typescript-eslint/quotes': [
						'warn',
						'single'
					],
					'semi': 'off',
					'@typescript-eslint/semi': [
						'warn',
						'always'
					],
					'space-before-function-paren': 'off',
					'@typescript-eslint/space-before-function-paren': [
						'error',
						{
							anonymous: 'always',
							named: 'never',
							asyncArrow: 'always'
						}
					],
					'space-infix-ops': 'off',
					'@typescript-eslint/space-infix-ops': 'error'
				}
			},
			{
				files: [
					'*.ts',
					'*.tsx'
				],
				excludedFiles: [
					'*.d.ts'
				],
				rules: {
					'@typescript-eslint/consistent-type-definitions': [
						'error',
						'type'
					]
				}
			}
		] : [],
		...reactInstalled ? [
			{
				files: [
					'*.jsx',
					'*.tsx'
				],
				rules: {
					'react/jsx-boolean-value': 'error',
					'react/jsx-closing-bracket-location': [
						'warn',
						'tag-aligned'
					],
					'react/jsx-closing-tag-location': 'error',
					'react/jsx-curly-brace-presence': [
						'warn',
						'never'
					],
					'react/jsx-curly-newline': [
						'error',
						'consistent'
					],
					'react/jsx-curly-spacing': [
						'error',
						{
							when: 'never'
						}
					],
					'react/jsx-equals-spacing': [
						'error',
						'never'
					],
					'react/jsx-first-prop-new-line': [
						'error',
						'multiline'
					],
					'react/jsx-fragments': [
						'error',
						'syntax'
					],
					'react/jsx-indent': [
						'warn',
						'tab',
						{
							checkAttributes: false,
							indentLogicalExpressions: true
						}
					],
					'react/jsx-indent-props': [
						'warn',
						'tab'
					],
					'react/jsx-max-props-per-line': [
						'error',
						{
							maximum: 1,
							when: 'multiline'
						}
					],
					'react/jsx-no-bind': 'error',
					'react/jsx-no-comment-textnodes': 'off',
					'react/jsx-no-constructed-context-values': 'warn',
					'react/jsx-no-script-url': 'error',
					'react/jsx-props-no-multi-spaces': 'error',
					'react/jsx-tag-spacing': [
						'warn',
						{
							closingSlash: 'never',
							beforeSelfClosing: 'always',
							afterOpening: 'never',
							beforeClosing: 'never'
						}
					],
					'react/jsx-wrap-multilines': [
						'error',
						{
							declaration: 'parens-new-line',
							assignment: 'parens-new-line',
							return: 'parens-new-line',
							arrow: 'parens-new-line',
							condition: 'parens-new-line',
							logical: 'parens-new-line',
							prop: 'parens-new-line'
						}
					],
					'@next/next/no-img-element': 'off'
				}
			}
		] : []
	]
};
