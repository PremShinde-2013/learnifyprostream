"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import { Chip } from "@nextui-org/react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import HomeCard from "./HomeCard";
import MeetingModal from "./MeetingModal";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import toast from "react-hot-toast";

type Props = {};

const MeetingTypeList = (props: Props) => {
	const router = useRouter();

	const [meetingState, setMeetingState] = useState<
		"isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
	>();

	const { user } = useUser();
	const client = useStreamVideoClient();
	const [values, setValues] = useState({
		dateTime: new Date(),
		description: "",
		link: "",
	});
	const [callDetails, setCallDetails] = useState<Call>();

	const createMeeting = async () => {
		if (!client || !user) return;

		try {
			if (!values.dateTime) {
				toast.error("Please select a date and time");
				return;
			}
			const id = crypto.randomUUID();

			const call = client.call("default", id);
			if (!call) throw new Error("Failed to create call");
			const startAt =
				values.dateTime.toISOString() || new Date(Date.now()).toISOString();
			const description = values.description || "Instant meeting";

			await call.getOrCreate({
				data: {
					starts_at: startAt,
					custom: {
						description,
					},
				},
			});
			setCallDetails(call);

			if (!values.description) {
				toast.success("Meeting created successfully");
				router.push(`/meeting/${call.id}`);
			}
		} catch (error) {
			console.log(error);
			toast.error("Failed to create  meeting");
		}
	};

	return (
		<section
			className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2
     '
		>
			<HomeCard
				className='bg-orange-600'
				title='New Meeting'
				description='Start an instant meeting'
				handleClick={() => setMeetingState("isInstantMeeting")}
			/>
			<HomeCard
				className='bg-blue-600'
				title='Schedule Meeting'
				description='Plan your meeting'
				handleClick={() => setMeetingState("isScheduleMeeting")}
			/>
			<HomeCard
				className='bg-purple-600'
				title='View Recordings'
				description='Check out your recording'
				handleClick={() => setMeetingState("isJoiningMeeting")}
			/>
			<HomeCard
				className='bg-green-600'
				title='Join Meeting'
				description='Via invatation link'
				handleClick={() => setMeetingState("isJoiningMeeting")}
			/>

			<MeetingModal
				isOpen={meetingState === "isInstantMeeting"}
				onClose={() => setMeetingState(undefined)}
				title='Start an instant meeting'
				className='text-center'
				buttonText='Start Meeting'
				handleClick={createMeeting}
			/>
		</section>
	);
};

export default MeetingTypeList;
