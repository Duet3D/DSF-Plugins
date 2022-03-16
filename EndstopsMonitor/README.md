# Endstops Monitor Plugin

## Description

This is a very simple demonstration for a DWC-only plugin (v3.4 and later). It lets users monitor the endstops interactively like in previous DWC versions. When loaded it creates a new "Endstops" tab on the Settings -> Machine page.

## Automatic build instructions

1. Install NodeJS on your system
2. Clone [DuetWebControl](https://github.com/chrishamm/DuetWebControl) and set it up by running `npm install` in the DWC directory
3. Run `npm run build-plugin PATH` where `PATH` is the directory containing `plugin.json`
4. EndstopsMonitor.zip is generated automatically in the new `dist` directory

## Manual build instructions

1. Clone [DuetWebControl](https://github.com/chrishamm/DuetWebControl) and set it up by running `npm install` in the DWC directory
2. Copy the `src` directory to `src/plugins/EndstopsMonitor` of DuetWebControl
3. Append the following DwcPlugin definition to the default exports of `src/plugins/index.js`:
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
4. By performing this step, the plugin is registered as a built-in plugin. To test it, run `npm run serve` and activate it using the Settings -> General page
5. Now you have two choices:
6. - Copy `plugin.json` to the new `src/plugins/EndstopsMonitor` directory
   - Run `npm run build-plugin EndstopsMonitor` to generate the plugin ZIP file
7. - Build DWC by running `npm run build`
   - Create a new ZIP file and add `plugin.json` to the root level
   - Compress the resulting `EndstopsMonitor` CSS and JS files from `dist/css` and `dist/js` under `dwc/css` and `dwc/js`
