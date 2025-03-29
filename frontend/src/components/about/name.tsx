import { cn } from "@/lib/utils";
import Image from "next/image";

interface NameProps {
	firstName: string;
	lastName: string;
	picture: boolean;
	pictureUrl?: string;
}

export function Name({ firstName, lastName, picture, pictureUrl }: NameProps) {
	return (
		<div className="flex w-full items-center py-20 justify-between print:pb-10 print:pt-0">
			<div
				className={cn(
					"w-full flex items-center justify-center space-x-2 text-7xl print:text-5xl tracking-[1rem] uppercase text-zinc-100",
				)}
			>
				<span className="font-semibold">{firstName}</span>
				<span className="font-light">{lastName}</span>
			</div>
			{picture && (
				<div className=" rounded-full overflow-hidden">
					<Image
						src={pictureUrl || ""}
						alt="Picture"
						width={200}
						height={200}
						className="object-contain object-center w-28"
					/>
				</div>
			)}
		</div>
	);
}
