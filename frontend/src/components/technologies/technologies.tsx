import type { Technology } from "@core/technology";
import Image from "next/image";

export interface TechnologiesProps {
	list: Technology[];
	smaller?: boolean;
}

export function Technologies({ list, smaller }: TechnologiesProps) {
	return list ? (
		<div className="flex justify-center gap-4 flex-wrap w-4/5">
			{list.map((technology) => (
				<div key={technology.id} className="flex flex-col items-center gap-1">
					<span
						className={`
							relative h-11 w-11 rounded-xl overflow-hidden
							${!smaller && "sm:h-16 sm:w-16"}
						`}
					>
						<Image
							src={technology.imageUrl}
							alt={technology.name}
							fill
							className="object-contain"
						/>
					</span>
					<span className="text-[10px] text-zinc-400">{technology.name}</span>
				</div>
			))}
		</div>
	) : null;
}
