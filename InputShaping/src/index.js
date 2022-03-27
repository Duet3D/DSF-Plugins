'use strict'

import { registerRoute } from '@/routes'
//import { registerPluginData, PluginDataType } from '../../store'

import InputShaping from './InputShaping.vue'

// Register a route via Plugins -> Input Shaping
registerRoute(InputShaping, {
	Plugins: {
		InputShaping: {
			icon: 'mdi-transition',
			caption: 'Input Shaping',
			translated: true,
			path: '/InputShaping'
		}
	}
});
