See: [https://github.com/facebook/fbt/issues/240](https://github.com/facebook/fbt/issues/240)

Run:

```bash
yarn dev

# OR:

yarn build
yarn start
```

Open: [http://0.0.0.0:3000/](http://0.0.0.0:3000/)

Inspect it in your browser (don't forget to click "Edit as HTML" to actually see the HTML entities). Currently, it renders this:

```html
<div>This&nbsp;renders&nbsp;<code>nbsp</code>&nbsp;correctly&nbsp;✅</div>
<div>This DOESN'T render <code>nbsp</code> correctly ❌</div>

<div>Other HTML entities: × &amp; &lt; " ↓ ℃ ℉</div>
<div>Other HTML entities: × &amp; &lt; " ↓ ℃ ℉</div>
```

---

```bash
yarn fbt-manifest --src=pages --enum-manifest=translations/enum_manifest.json --src-manifest=translations/src_manifest.json
yarn run fbt-collect --options=__self --pretty --manifest < translations/src_manifest.json > translations/source_strings.json
yarn fbt-translate --source-strings=translations/source_strings.json --pretty --translations translations/in/*.json --output-dir=translations/out --jenkins
```
