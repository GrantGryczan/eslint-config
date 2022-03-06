# Grant Gryczan's ESLint Config

To use this ESLint config, run the following command.

```sh
npm i --save-dev @grantgryczan/eslint-config
```

Then create an `.eslintrc` file with the following contents.

```json
{
	"extends": "@grantgryczan"
}
```

If you're using TypeScript, also run this.

```sh
npm i --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

If you're using Next, also run this.

```sh
npm i --save-dev eslint-config-next
```

If you're using React (but not Next since Next comes with this already), also run this.

```sh
npm i --save-dev eslint-plugin-react eslint-plugin-react-hooks
```