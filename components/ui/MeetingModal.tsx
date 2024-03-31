import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
} from "@nextui-org/react";
import React from "react";

type Props = {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	className?: string;
	// children?: ReactNode;
	handleClick?: () => void;
	buttonText?: string;
	instantMeeting?: boolean;
	image?: string;
	buttonClassName?: string;
	buttonIcon?: string;
};

const MeetingModal = ({
	isOpen,
	onClose,
	title,
	className,
	// children,
	handleClick,
	buttonText,
	instantMeeting,
	image,
	buttonClassName,
	buttonIcon,
}: Props) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} backdrop='opaque'>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className='flex flex-col gap-1'>{title}</ModalHeader>

						<ModalFooter className='flex'>
							<Button color='primary' className='w-full' onClick={handleClick}>
								{buttonText}
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
};

export default MeetingModal;
