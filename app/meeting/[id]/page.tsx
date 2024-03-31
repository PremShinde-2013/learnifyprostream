/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Loader from "@/components/Loader";
// import Loader from "@/components/Loader";
import MeetingRoom from "@/components/ui/MeetingRoom";
import MeetingSetup from "@/components/ui/MeetingSetup";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

type Props = {};

const page = ({ params: { id } }: { params: { id: string } }) => {
	const { isLoaded, user } = useUser();
	const [isSetupComplete, setIsSetupComplete] = useState(false);

	const { call, isCallLoading } = useGetCallById(id);
	if (!isLoaded || isCallLoading) return;
	<Loader />;

	if (!call)
		return (
			<p className='text-center text-3xl font-bold text-white'>
				Call Not Found
			</p>
		);
	const notAllowed =
		call.type === "invited" &&
		(!user || !call.state.members.find((m) => m.user.id === user.id));
	return (
		<div className='h-screen w-full'>
			<StreamCall call={call}>
				<StreamTheme>
					{!isSetupComplete ? (
						<MeetingSetup setIsSetupComplete={setIsSetupComplete} />
					) : (
						<MeetingRoom />
					)}
				</StreamTheme>
			</StreamCall>
		</div>
	);
};

export default page;
