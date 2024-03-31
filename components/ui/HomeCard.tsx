"use client";
import React from "react";

import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import { Chip } from "@nextui-org/react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { cn } from "@/utils/cn";
interface HomeCardProps {
	className?: string;

	title: string;
	description: string;
	handleClick?: () => void;
}

const HomeCard = ({
	className,

	title,
	description,
	handleClick,
}: HomeCardProps) => {
	return (
		<section onClick={handleClick}>
			<CardContainer className='inter-var'>
				<CardBody
					className={cn(
						"bg-orange-600 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] lg:min-h-[200px]  min-h-[120px] rounded-xl p-6 border cursor-pointer ",
						className
					)}
				>
					<CardItem
						translateZ='50'
						className='text-xl font-bold text-neutral-600 dark:text-white'
					>
						<Chip className='rounded-md py-5 cursor-pointer opacity-30'>
							<AddRoundedIcon />
						</Chip>
					</CardItem>

					<div className='flex flex-col justify-between items-start mt-48'>
						<CardItem
							translateZ={20}
							as='h6'
							href='https://twitter.com/mannupaaji'
							target='__blank'
							className='px-4 py-2 rounded-xl text-2xl font-normal dark:text-white'
						>
							{title}
						</CardItem>
						<CardItem
							translateZ={20}
							as='h1'
							className='px-4 py-2  text-white text-xs font-bold'
						>
							{description}
						</CardItem>
					</div>
				</CardBody>
			</CardContainer>
		</section>
	);
};

export default HomeCard;
