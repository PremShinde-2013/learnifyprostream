import { Toaster } from "react-hot-toast";

export default function PreviousLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
			<div className='inline-block max-w-lg text-center justify-center'>
				{children}
			</div>
			<Toaster position='top-center' reverseOrder={false} />
		</section>
	);
}
