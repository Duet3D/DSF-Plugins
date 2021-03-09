# Endstops Monitor Plugin

## Description

This is a very simple demonstration for a DWC-only plugin (v3.3 and later). It lets users monitor the endstops interactively like in previous DWC versions. When loaded it creates a new "Endstops" tab on the Settings -> Machine page.

## Build instructions

1. Copy the contents from the `src` directory to the `src/plugins` directory of DWC
2. Append the following DwcPlugin definition to the default exports of `src/plugins/index.js`:
```
	new DwcPlugin({
		id: 'EndstopsMonitor',
		name: 'Endstops Monitor',
		author: 'Duet3D Ltd',
		version,
		loadDwcResources: () => import(
			/* webpackChunkName: "EndstopsMonitor" */
			'./EndstopsMonitor/index.js'
		)
	}),
```
3. By performing this step, the plugin is registered as a built-in plugin. To test it, run `npm run serve` and activate it using the Settings -> General page
4. To build the final Webpack chunk, run `npm run build` and copy the resulting `EndstopsMonitor` CSS and JS files to `zip/dwc`
5. Look for the resulting JS entry point in `zip/dwc/js` which is named like `EndstopsMonitor.[hash].js`. Copy that filename and replace `dwcWebpackChunk` with it
5. Compress the files in the `zip` directory to a single file. The resulting bundle should be installable using the DWC plugin wizard
