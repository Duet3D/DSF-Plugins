'use strict'

import { registerSettingTab } from '../../routes'

import EndstopsMonitor from './EndstopsMonitor.vue'

registerSettingTab(false, 'Endstops', EndstopsMonitor, 'Endstops');
