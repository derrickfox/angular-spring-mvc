export interface NavConfig {
	items: NavItem[];
}

export interface NavItem {
	label: string;
	route?: string;
	icon?: string;
	children?: NavItem[];
	level?: number;
}