import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Card, Chip, Image } from "@nextui-org/react";
import MeetingTypeList from "@/components/ui/MeetingTypeList";

export default function Home() {
	const now = new Date();

	const time = now.toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
	});
	const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
		now
	);

	return (
		<section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
			<Card className='rounded-3xl'>
				<div className='flex'>
					<Image
						className='h-[303px]  w-screen rounded-[20px] m-4 '
						isZoomed
						isBlurred
						alt='banner'
						src='https://img.freepik.com/free-photo/high-angle-keyboard-desk_23-2149680258.jpg?w=996&t=st=1711858689~exp=1711859289~hmac=ee35b8ff4353585d0fd4d172d8659d1716adc2956188dd6a722b0935420a8665'
					/>
				</div>
				<div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11    '>
					<Chip
						className=' max-w-[273px] text-center text-base 
						font-normal  rounded-md
						'
						color='primary'
					>
						Upcoming Meeting at: 12:30 PM
					</Chip>
					<div className='flex flex-col gap-2'>
						<h1 className='text-2xl font-extrabold lg:text-4xl'>{time}</h1>
						<p className='text-lg font-medium text-sky-1 lg:text-2xl'>{date}</p>
					</div>
				</div>
			</Card>

			<MeetingTypeList />
		</section>
	);
}
