"use client";
import { useState } from "react";
import {
	CallControls,
	CallParticipantsList,
	CallStatsButton,
	CallingState,
	PaginatedGridLayout,
	SpeakerLayout,
	useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { useRouter, useSearchParams } from "next/navigation";
// import { Users, LayoutList } from "lucide-react";

import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Button,
} from "@nextui-org/react";

// import EndCallButton from "./EndCallButton";
import { cn } from "@/utils/cn";
import ViewQuiltRoundedIcon from "@mui/icons-material/ViewQuiltRounded";
import FaceRoundedIcon from "@mui/icons-material/FaceRounded";

type CallLayoutType = "grid" | "speaker-left" | "speaker-right";

const MeetingRoom = () => {
	const searchParams = useSearchParams();
	const isPersonalRoom = !!searchParams.get("personal");
	const router = useRouter();
	const [layout, setLayout] = useState<CallLayoutType>("speaker-left");
	const [showParticipants, setShowParticipants] = useState(false);
	const { useCallCallingState } = useCallStateHooks();

	// for more detail about types of CallingState see: https://getstream.io/video/docs/react/ui-cookbook/ringing-call/#incoming-call-panel
	const callingState = useCallCallingState();

	// if (callingState !== CallingState.JOINED) return <Loader />;

	const CallLayout = () => {
		switch (layout) {
			case "grid":
				return <PaginatedGridLayout />;
			case "speaker-right":
				return <SpeakerLayout participantsBarPosition='left' />;
			default:
				return <SpeakerLayout participantsBarPosition='right' />;
		}
	};

	return (
		<section className='relative h-screen w-full  pt-4 text-white'>
			<div className='relative flex size-full items-center justify-center'>
				<div className=' flex size-full  md:max-w-[400px]  min-w-[380px] items-center'>
					<CallLayout />
				</div>
				<div
					className={cn("h-[calc(100vh-86px)] hidden ml-2", {
						"show-block": showParticipants,
					})}
				>
					<CallParticipantsList onClose={() => setShowParticipants(false)} />
				</div>
			</div>
			{/* video layout and call controls */}

			<div className='fixed bottom-0 flex w-full items-center justify-center gap-5  '>
				<CallControls onLeave={() => router.push(`/`)} />

				<Dropdown>
					<DropdownTrigger>
						<Button isIconOnly color='default'>
							<ViewQuiltRoundedIcon />
						</Button>
					</DropdownTrigger>
					<DropdownMenu aria-label='Static Actions'>
						{["Grid", "Speaker-Left", "Speaker-Right"].map((item, index) => (
							<DropdownItem
								key={index}
								onClick={() => setLayout(item.toLowerCase() as CallLayoutType)}
							>
								{item}
							</DropdownItem>
						))}
					</DropdownMenu>
				</Dropdown>

				<CallStatsButton />

				<Button isIconOnly onClick={() => setShowParticipants((prev) => !prev)}>
					<div>
						<FaceRoundedIcon className='text-white' />
					</div>
				</Button>
			</div>
		</section>
	);
};

export default MeetingRoom;
