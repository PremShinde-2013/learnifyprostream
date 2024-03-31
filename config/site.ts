export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			imgURL: "<VideoCameraBackRoundedIcon/>",
			label: "Home",
			href: "/",
		},
		{
			imgURL: "/icons/upcoming.svg",

			label: "Upcoming",
			href: "/upcoming",
		},
		{
			imgURL: "/icons/previous.svg",

			label: "Previous",
			href: "/previous",
		},
		{
			imgURL: "/icons/Video.svg",

			label: "Recordings",
			href: "/recordings",
		},
		{
			imgURL: "/icons/add-personal.svg",

			label: "Personal Room",
			href: "/personal-room",
		},
	],
	navMenuItems: [
		{
			imgURL: "/icons/Home.svg",
			label: "Home",
			href: "/",
		},
		{
			imgURL: "/icons/upcoming.svg",

			label: "Upcoming",
			href: "/upcoming",
		},
		{
			imgURL: "/icons/previous.svg",

			label: "Previous",
			href: "/previous",
		},
		{
			imgURL: "/icons/Video.svg",

			label: "Recordings",
			href: "/recordings",
		},
		{
			imgURL: "/icons/add-personal.svg",

			label: "Personal Room",
			href: "/personal-room",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
		sponsor: "https://patreon.com/jrgarciadev",
	},
};

export const avatarImages = [
	"/images/avatar-1.jpeg",
	"/images/avatar-2.jpeg",
	"/images/avatar-3.png",
	"/images/avatar-4.png",
	"/images/avatar-5.png",
];

export const sidebarLinks = [
	{
		imgURL: "/icons/Home.svg",
		route: "/",
		label: "Home",
	},

	{
		imgURL: "/icons/upcoming.svg",
		route: "/upcoming",
		label: "Upcoming",
	},
	{
		imgURL: "/icons/previous.svg",
		route: "/previous",
		label: "Previous",
	},
	{
		imgURL: "/icons/Video.svg",
		route: "/recordings",
		label: "Recordings",
	},
	{
		imgURL: "/icons/add-personal.svg",
		route: "/personal-room",
		label: "Personal Room",
	},
];
