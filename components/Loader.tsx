import { Spinner } from "@nextui-org/react";
import React from "react";

type Props = {};

const Loader = (props: Props) => {
	return (
		<div className='flex justify-center items-center'>
			<Spinner color='success' size='lg' />
		</div>
	);
};

export default Loader;
