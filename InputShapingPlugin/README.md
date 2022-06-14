# Input Shaping Plugin

## Description

This plugin lets you fine-tune input shaping and try out different shaper types.
Please see the [official docs](https://docs.duet3d.com/User_manual/Tuning/Input_shaping_plugin) for further information.

## Automatic build instructions

1. Install NodeJS on your system
2. Clone [DuetWebControl](https://github.com/Duet3D/DuetWebControl) and set it up by running `npm install` in the DWC directory
3. Install `@duet3d/motionanalysis` package by running `npm install @duet3d/motionanalysis`
4. Run `npm run build-plugin PATH` where `PATH` is the directory containing `plugin.json`
5. InputShaping.zip is generated automatically in the new `dist` directory

## Manual build instructions

1. Clone [DuetWebControl](https://github.com/Duet3D/DuetWebControl) and set it up by running `npm install` in the DWC directory
2. Install `@duet3d/motionanalysis` package by running `npm install @duet3d/motionanalysis`
3. Copy the `src` directory to `src/plugins/InputShaping` of DuetWebControl
4. Append the following DwcPlugin definition to the default exports of `src/plugins/index.js`:
```
	new DwcPlugin({
		id: 'InputShaping',
		name: 'Input Shaping',
		author: 'Duet3D Ltd',
		version,
		loadDwcResources: () => import(
			/* webpackChunkName: "InputShaping" */
			'./InputShaping/index.js'
		)
	}),
```
5. By performing this step, the plugin is registered as a built-in plugin. To test it, run `npm run serve` and activate it using the Settings -> General page
6. Now you have two choices:
7. - Copy `plugin.json` to the new `src/plugins/InputShaping` directory
   - Run `npm run build-plugin InputShaping` to generate the plugin ZIP file
8. - Build DWC by running `npm run build`
   - Create a new ZIP file and add `plugin.json` to the root level
   - Compress the resulting `InputShaping` CSS and JS files from `dist/css` and `dist/js` under `dwc/css` and `dwc/js`
