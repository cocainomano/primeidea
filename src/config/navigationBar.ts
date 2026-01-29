// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.svg',
		alt: 'Prime Idea Asesores',
		text: 'Prime Idea Asesores'
	},
	navItems: [
		{ name: 'Home', link: '/' },
		{
			name: 'Productos',
			link: '#',
			submenu: [
				{ name: 'Plan de Retiro', link: '/plan-personal-de-retiro/' },
				{ name: 'Fondo de Ahorro', link: '/fondo-de-ahorro-inteligente/' },
				{ name: 'Fideicomiso Educativo', link: '/fideicomiso-educativo/' },
				{ name: 'Blindaje Empresarial', link: '/blindaje-empresarial/' },
				{ name: 'Vida Mujer', link: '/vida-mujer/' },
				{ name: 'Coaching Financiero', link: '/coaching-financiero/' },
			]
		},
		{ name: 'Nosotros', link: '/nosotros' },
		{ name: 'Contacto', link: '/contacto' }
	],
	navActions: [{ name: 'Agenda tu cita', link: '/', style: 'primary', size: 'lg' }]
}
