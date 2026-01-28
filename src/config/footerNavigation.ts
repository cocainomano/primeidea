// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	address: string
	logo: Logo
	conduseflogo: Logo
	logoburo: Logo
	logoesr: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'Prime Idea Asesores',
		aboutText:
			'En Prime Idea Asesores, tenemos los mejores productos para tu retiro, educación de tus hijos, ahorro y salud. Te ayudamos a elegir lo que mejor se adapta a tu vida y a tu situación actual de forma que no sacrifiques tu estilo de vida actual.',
		logo: {
			src: '/logo.svg',
			alt: 'The tailwind astro theme',
			text: 'Prime Idea Asesores'
		},
		address: 'Calle 123, Col. Centro, C.P. 12345, Ciudad de México, México',
		conduseflogo: {
			src: '/logos/condusefv2.png',
			alt: 'Condusef',
			text: ''
		},
		logoburo: {
			src: '/logos/logo-buro-v2.png',
			alt: 'Buro',
			text: ''
		},
		logoesr: {
			src: '/logos/logo-esr.png',
			alt: 'ESR',
			text: ''
		},
	},
	footerColumns: [
		{
			category: 'Producto',
			subCategories: [
				{
					subCategory: 'Plan de Retiro',
					subCategoryLink: '/plan-personal-de-retiro'
				},
				{
					subCategory: 'Fondo de Ahorro Inteligente',
					subCategoryLink: '/fondo-de-ahorro-inteligente'
				},
				{
					subCategory: 'Fideicomiso Educativo',
					subCategoryLink: '/fideicomiso-educativo'
				},
				{
					subCategory: 'Blindaje Empresarial',
					subCategoryLink: '/blindaje-empresarial'
				},
				{
					subCategory: 'Fondo de Ahorro para Mujeres',
					subCategoryLink: '/fondo-de-ahorro-para-mujeres'
				},
				{
					subCategory: 'Consultoría Financiera',
					subCategoryLink: '/consultoría-financiera'
				}
			]
		},
		{
			category: 'Nosotros',
			subCategories: [
				{
					subCategory: 'Nosotros',
					subCategoryLink: '/'
				},
				{
					subCategory: 'Aviso de Privacidad',
					subCategoryLink: '/aviso-de-privacidad'
				},
				{
					subCategory: 'Términos y Condiciones',
					subCategoryLink: '/terminos-y-condiciones'
				}
			]
		},
		{
			category: 'Contáctanos',
			subCategories: [
				{
					subCategory: 'Contacto',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Agenda tu Cita',
					subCategoryLink: '/agenda-tu-cita'
				},
			]
		}
	],
	subFooter: {
		copywriteText: '© Prime Idea Asesores 2025-2026.'
	}
}
