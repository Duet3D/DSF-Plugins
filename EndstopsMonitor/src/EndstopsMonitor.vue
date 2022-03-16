<template>
	<v-simple-table>
		<template #default>
			<thead>
				<tr>
					<th class="text-left">
						Axis
					</th>
					<th class="text-left">
						Triggered
					</th>
					<th class="text-left">
						High End
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(endstop, index) in endstopItems" :key="index" :class="endstop.triggered ? 'success' : ''">
					<td>{{ endstop.axis }}</td>
					<td>{{ endstop.triggered ? 'Yes' : 'No' }}</td>
					<td>{{ endstop.highEnd ? 'Yes' : 'No' }}</td>
				</tr>
			</tbody>
		</template>
	</v-simple-table>
</template>

<script>
'use strict'

import { mapState } from 'vuex'

export default {
	computed: {
		...mapState('machine/model', {
			axes: state => state.move.axes,
			endstops: state => state.sensors.endstops
		}),
		endstopItems() {
			return this.endstops.map((endstop, index) => ({
				axis: (index < this.axes.length) ? this.axes[index].letter : 'n/a',
				...endstop
			}), this);
		}
	}
}
</script>
