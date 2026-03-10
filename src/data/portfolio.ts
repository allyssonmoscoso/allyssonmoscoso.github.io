export type Locale = 'es' | 'en';

export interface ActionLink {
	label: string;
	href: string;
	variant?: 'primary' | 'secondary';
	external?: boolean;
}

export interface HeroContent {
	badge: string;
	status: string;
	name: string;
	role: string;
	summary: string;
	actions: ActionLink[];
	statsTitle: string;
	stats: Array<{ label: string; value: string }>;
	focusTitle: string;
	focusItems: string[];
	principlesTitle: string;
	principles: string[];
	currentTitle: string;
	currentSummary: string;
}

export interface TimelineItem {
	period: string;
	title: string;
	summary: string;
}

export interface TimelineContent {
	id: string;
	label: string;
	title: string;
	intro: string;
	items: TimelineItem[];
}

export interface ProjectItem {
	name: string;
	category: string;
	summary: string;
	stack: string[];
	highlights: string[];
	imageSrc: string;
	imageAlt: string;
	href: string;
	cta: string;
}

export interface ProjectsContent {
	id: string;
	label: string;
	title: string;
	intro: string;
	items: ProjectItem[];
}

export interface FooterContent {
	copy: string;
	githubLabel: string;
	builtWith: string;
	githubHref: string;
}

export interface ContactLink {
	label: string;
	value: string;
	href: string;
}

export interface ContactContent {
	id: string;
	label: string;
	title: string;
	intro: string;
	availability: string;
	panelTitle: string;
	note: string;
	actions: ActionLink[];
	links: ContactLink[];
}

export interface PageContent {
	meta: {
		title: string;
		description: string;
	};
	navigation: {
		brand: string;
		brandTag: string;
		label: string;
		menuButtonLabel: string;
		localeLabel: string;
		items: Array<{ id: string; label: string }>;
	};
	hero: HeroContent;
	experience: TimelineContent;
	education: TimelineContent;
	projects: ProjectsContent;
	contact: ContactContent;
	footer: FooterContent;
}

export const portfolioContent: Record<Locale, PageContent> = {
	es: {
		meta: {
			title: 'Allysson Moscoso | SRE Senior y Backend Engineer',
			description:
				'Portfolio bilingue en Astro de Allysson Moscoso, con foco en confiabilidad, automatizacion, Oracle, Java y .NET.',
		},
		navigation: {
			brand: 'Allysson Moscoso',
			brandTag: 'SRE Senior // Backend',
			label: 'Navegacion principal',
			menuButtonLabel: 'Abrir navegacion principal',
			localeLabel: 'Cambiar idioma',
			items: [
				{ id: 'about', label: 'Perfil' },
				{ id: 'experience', label: 'Experiencia' },
				{ id: 'education', label: 'Educacion' },
				{ id: 'projects', label: 'Proyectos' },
				{ id: 'contact', label: 'Contacto' },
			],
		},
		hero: {
			badge: 'Portfolio // Reliability Engineering',
			status: 'Disponible para colaboraciones y retos tecnicos',
			name: 'Allysson Moscoso',
			role: 'Diseño, opero y mejoro plataformas con foco en automatizacion, observabilidad y software backend.',
			summary:
				'Soy Senior Site Reliability Engineer con experiencia en Oracle, Java, PSQL, WebLogic y el ecosistema .NET. Trabajo desde la operacion hasta el desarrollo, con una practica centrada en resiliencia, mejora continua y ejecucion pragmatica.',
			actions: [
				{ label: 'Ver Proyectos', href: '#projects', variant: 'primary' },
				{ label: 'Revisar Experiencia', href: '#experience', variant: 'secondary' },
			],
			statsTitle: 'Snapshot tecnico',
			stats: [
				{ label: 'Stack principal', value: 'Oracle, Java, .NET' },
				{ label: 'Modo de trabajo', value: 'SRE + Backend' },
				{ label: 'Prioridad', value: 'Confiabilidad y automatizacion' },
				{ label: 'Contexto', value: 'Servicios y sistemas criticos' },
			],
			focusTitle: 'Areas de enfoque',
			focusItems: [
				'Site Reliability Engineering',
				'Automatizacion y resiliencia',
				'Oracle, Java y WebLogic',
				'.NET y desarrollo backend',
			],
			principlesTitle: 'Forma de trabajo',
			principles: [
				'Automatizar antes de escalar.',
				'Diseñar pensando en fallos y recuperacion.',
				'Medir, documentar y mejorar de forma continua.',
			],
			currentTitle: 'Ahora',
			currentSummary:
				'Combino operacion, arquitectura y desarrollo para sostener servicios mas confiables y equipos mas efectivos.',
		},
		experience: {
			id: 'experience',
			label: 'Trayectoria',
			title: 'Experiencia profesional',
			intro:
				'He evolucionado desde desarrollo de software hacia ingenieria de confiabilidad, manteniendo una base fuerte en codigo, operaciones y toma de decisiones tecnicas.',
			items: [
				{
					period: '2019',
					title: 'Desarrollador de Software Junior',
					summary:
						'Escritura de codigo, resolucion de problemas simples y aprendizaje guiado junto a perfiles con mas experiencia en desarrollo de software.',
				},
				{
					period: 'dic. 2020 - nov. 2022',
					title: 'Desarrollador de Software Middle',
					summary:
						'Participacion activa en diseno, desarrollo y depuracion de soluciones mas complejas, colaborando con equipos multidisciplinarios y asumiendo mayor responsabilidad tecnica.',
				},
				{
					period: 'dic. 2020 - actualidad',
					title: 'Senior Site Reliability Engineer',
					summary:
						'Gestion y optimizacion de infraestructura, automatizacion, monitoreo, respuesta a incidentes y mejora continua para mantener servicios confiables, escalables y observables.',
				},
			],
		},
		education: {
			id: 'education',
			label: 'Formacion',
			title: 'Educacion y aprendizaje tecnico',
			intro:
				'La base academica se complementa con una trayectoria profesional orientada a sistemas, backend y mejora operativa.',
			items: [
				{
					period: '2016 - 2018',
					title: 'APEC',
					summary: 'Ingles en Escuela de Idiomas.',
				},
				{
					period: 'ene. 2018 - ago. 2020',
					title: 'ITLA',
					summary: 'Tecnologo en Desarrollo de Software.',
				},
			],
		},
		projects: {
			id: 'projects',
			label: 'Builds',
			title: 'Proyectos destacados',
			intro:
				'Repositorios publicados que muestran experiencia practica en herramientas, automatizacion y software orientado a operaciones.',
			items: [
				{
					name: 'SyncData',
					category: 'CLI Utility',
					summary:
						'Aplicacion de consola en .NET 8 para sincronizar archivos y directorios entre dos rutas, con progreso, logging, exclusiones y preservacion de permisos y timestamps.',
					stack: ['C#', '.NET 8', 'CLI'],
					highlights: [
						'Sincronizacion entre rutas fuente y destino.',
						'Exclusiones configurables y modo verbose.',
						'Preservacion de permisos y timestamps.',
					],
					imageSrc: '/projects/syncdata-card.svg',
					imageAlt: 'Vista previa ilustrada de SyncData mostrando carpetas sincronizadas y una terminal de ejecucion.',
					href: 'https://github.com/allyssonmoscoso/SyncData',
					cta: 'Ver Repositorio',
				},
				{
					name: 'NNPPSS',
					category: 'Desktop Tool',
					summary:
						'Herramienta en Java 17 para gestionar y descargar paquetes con persistencia, reintentos, limites configurables y extraccion automatica en multiples plataformas.',
					stack: ['Java 17', 'Desktop', 'Automation'],
					highlights: [
						'Descargas persistentes y reanudables.',
						'Configuracion inicial y limites por descarga.',
						'Extraccion automatica y soporte multiplataforma.',
					],
					imageSrc: '/projects/nnppss-card.svg',
					imageAlt: 'Vista previa ilustrada de NNPPSS con interfaz de escritorio, lista de descargas y barras de progreso.',
					href: 'https://github.com/allyssonmoscoso/NNPPSS',
					cta: 'Abrir en GitHub',
				},
			],
		},
		contact: {
			id: 'contact',
			label: 'Contacto',
			title: 'Construyamos sistemas mas confiables',
			intro:
				'Si necesitas apoyo en confiabilidad, automatizacion o desarrollo backend, puedo integrarme en conversaciones tecnicas, auditorias puntuales o ejecucion directa.',
			availability:
				'Abierto a colaboraciones, revisiones tecnicas y oportunidades donde la estabilidad del sistema y la calidad de entrega importen de verdad.',
			panelTitle: 'Canales directos',
			note:
				'Tambien puedes revisar mis repositorios fijados y el historial publico en GitHub para entender mejor mi foco tecnico y estilo de trabajo.',
			actions: [
				{
					label: 'Abrir LinkedIn',
					href: 'https://linkedin.com/in/AllyssonJesusMoscoso',
					variant: 'primary',
					external: true,
				},
				{
					label: 'Ver GitHub',
					href: 'https://github.com/allyssonmoscoso',
					variant: 'secondary',
					external: true,
				},
			],
			links: [
				{
					label: 'LinkedIn',
					value: 'linkedin.com/in/AllyssonJesusMoscoso',
					href: 'https://linkedin.com/in/AllyssonJesusMoscoso',
				},
				{
					label: 'GitHub',
					value: 'github.com/allyssonmoscoso',
					href: 'https://github.com/allyssonmoscoso',
				},
			],
		},
		footer: {
			copy: 'Portfolio personal.',
			githubLabel: 'GitHub',
			builtWith: 'Hecho con Astro.',
			githubHref: 'https://github.com/allyssonmoscoso',
		},
	},
	en: {
		meta: {
			title: 'Allysson Moscoso | Senior SRE and Backend Engineer',
			description:
				'Bilingual Astro portfolio for Allysson Moscoso, focused on reliability, automation, Oracle, Java and .NET.',
		},
		navigation: {
			brand: 'Allysson Moscoso',
			brandTag: 'Senior SRE // Backend',
			label: 'Primary navigation',
			menuButtonLabel: 'Open primary navigation',
			localeLabel: 'Switch language',
			items: [
				{ id: 'about', label: 'Profile' },
				{ id: 'experience', label: 'Experience' },
				{ id: 'education', label: 'Education' },
				{ id: 'projects', label: 'Projects' },
				{ id: 'contact', label: 'Contact' },
			],
		},
		hero: {
			badge: 'Portfolio // Reliability Engineering',
			status: 'Open to collaborations and technical challenges',
			name: 'Allysson Moscoso',
			role: 'I design, operate and improve platforms with a focus on automation, observability and backend software.',
			summary:
				'I am a Senior Site Reliability Engineer with experience across Oracle, Java, PSQL, WebLogic and the .NET ecosystem. My work spans operations and software delivery, with a pragmatic focus on resilience, continuous improvement and reliable systems.',
			actions: [
				{ label: 'View Projects', href: '#projects', variant: 'primary' },
				{ label: 'Review Experience', href: '#experience', variant: 'secondary' },
			],
			statsTitle: 'Technical snapshot',
			stats: [
				{ label: 'Primary stack', value: 'Oracle, Java, .NET' },
				{ label: 'Operating mode', value: 'SRE + Backend' },
				{ label: 'Priority', value: 'Reliability and automation' },
				{ label: 'Context', value: 'Critical systems and services' },
			],
			focusTitle: 'Focus areas',
			focusItems: [
				'Site Reliability Engineering',
				'Automation and resilience',
				'Oracle, Java and WebLogic',
				'.NET and backend development',
			],
			principlesTitle: 'Operating principles',
			principles: [
				'Automate before scaling.',
				'Design for failure and recovery.',
				'Measure, document and improve continuously.',
			],
			currentTitle: 'Current focus',
			currentSummary:
				'I combine operations, architecture and software delivery to support more reliable services and more effective teams.',
		},
		experience: {
			id: 'experience',
			label: 'Career',
			title: 'Professional experience',
			intro:
				'My path has evolved from software development into reliability engineering, while keeping a strong foundation in code, systems and technical decision-making.',
			items: [
				{
					period: '2019',
					title: 'Junior Software Developer',
					summary:
						'Built software, solved straightforward issues and learned delivery discipline under the guidance of more experienced engineers.',
				},
				{
					period: 'Dec 2020 - Nov 2022',
					title: 'Mid-level Software Developer',
					summary:
						'Worked on more complex solutions across design, development and debugging, collaborating with multidisciplinary teams and taking on greater technical ownership.',
				},
				{
					period: 'Dec 2020 - Present',
					title: 'Senior Site Reliability Engineer',
					summary:
						'Lead infrastructure optimization, automation, monitoring, incident response and continuous improvement efforts to keep services reliable, scalable and observable.',
				},
			],
		},
		education: {
			id: 'education',
			label: 'Learning',
			title: 'Education and technical foundation',
			intro:
				'Formal training is complemented by a professional path focused on systems, backend engineering and operational improvement.',
			items: [
				{
					period: '2016 - 2018',
					title: 'APEC',
					summary: 'English studies at the language school.',
				},
				{
					period: 'Jan 2018 - Aug 2020',
					title: 'ITLA',
					summary: 'Software Development Technologist.',
				},
			],
		},
		projects: {
			id: 'projects',
			label: 'Builds',
			title: 'Featured projects',
			intro:
				'Public repositories that reflect hands-on work in tooling, automation and software built for operational use cases.',
			items: [
				{
					name: 'SyncData',
					category: 'CLI Utility',
					summary:
						'.NET 8 console application for syncing files and directories between two paths, including progress feedback, logging, exclusions and permission preservation.',
					stack: ['C#', '.NET 8', 'CLI'],
					highlights: [
						'Synchronization between source and target paths.',
						'Configurable exclusions and verbose output.',
						'Permission and timestamp preservation.',
					],
					imageSrc: '/projects/syncdata-card.svg',
					imageAlt: 'Illustrated project preview for SyncData showing synchronized folders and a terminal command.',
					href: 'https://github.com/allyssonmoscoso/SyncData',
					cta: 'View Repository',
				},
				{
					name: 'NNPPSS',
					category: 'Desktop Tool',
					summary:
						'Java 17 tool for managing and downloading packages with persistence, retries, configurable limits and automatic extraction across multiple platforms.',
					stack: ['Java 17', 'Desktop', 'Automation'],
					highlights: [
						'Persistent and resumable downloads.',
						'First-run setup and configurable limits.',
						'Automatic extraction across platforms.',
					],
					imageSrc: '/projects/nnppss-card.svg',
					imageAlt: 'Illustrated project preview for NNPPSS with a desktop interface, download list and progress bars.',
					href: 'https://github.com/allyssonmoscoso/NNPPSS',
					cta: 'Open on GitHub',
				},
			],
		},
		contact: {
			id: 'contact',
			label: 'Contact',
			title: 'Build more reliable systems together',
			intro:
				'If you need support across reliability, automation or backend engineering, I can join technical conversations, focused reviews or hands-on delivery.',
			availability:
				'Open to collaboration, technical reviews and opportunities where system stability and execution quality genuinely matter.',
			panelTitle: 'Direct channels',
			note:
				'You can also review my pinned repositories and public GitHub activity to understand my technical focus and working style in more detail.',
			actions: [
				{
					label: 'Open LinkedIn',
					href: 'https://linkedin.com/in/AllyssonJesusMoscoso',
					variant: 'primary',
					external: true,
				},
				{
					label: 'View GitHub',
					href: 'https://github.com/allyssonmoscoso',
					variant: 'secondary',
					external: true,
				},
			],
			links: [
				{
					label: 'LinkedIn',
					value: 'linkedin.com/in/AllyssonJesusMoscoso',
					href: 'https://linkedin.com/in/AllyssonJesusMoscoso',
				},
				{
					label: 'GitHub',
					value: 'github.com/allyssonmoscoso',
					href: 'https://github.com/allyssonmoscoso',
				},
			],
		},
		footer: {
			copy: 'Personal portfolio.',
			githubLabel: 'GitHub',
			builtWith: 'Built with Astro.',
			githubHref: 'https://github.com/allyssonmoscoso',
		},
	},
};