export interface NavConfig {
	items: {
			label: string;
			route?: string;
			icon?: string;
			children?: {
					label: string;
					route: string;
			}[];
	}[];
}