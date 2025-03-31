import type { WorkExperienceProps } from "@/functions/work-experiences";
import { cn } from "@/lib/utils";
import { calculateDuration } from "@/utils/calculate-duration-data";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import DOMPurify from "dompurify";
import { Globe } from "lucide-react";
import { ContentMD } from "../shared/ContentMD";

dayjs.extend(duration);
dayjs.extend(relativeTime);

interface WorkExperienceType {
	workExperiences: WorkExperienceProps[];
}

export function WorkExperience({ workExperiences }: WorkExperienceType) {
	const formatDate = (date: string | Date | null) => {
		if (!date) return "Atual";

		try {
			const dateObj = dayjs(date);
			if (!dateObj.isValid()) return "Data inválida";

			return dateObj.format("MMM YYYY");
		} catch (error) {
			console.log(JSON.stringify(error, null, 2));
			return "Data inválida";
		}
	};

	return (
		<div className="font-light text-zinc-600 tracking-widest">
			<h3 className="uppercase font-light text-3xl myPrintingSubTitle">
				Work Experience
			</h3>
			{workExperiences?.map((workExperience) => (
				<div
					className="flex flex-col mt-6 space-y-4 w-full relative print:mt-0"
					key={workExperience?.id}
				>
					<div className="absolute size-3 bg-zinc-100 rounded-full top-5 -left-[60px]" />
					<div className="flex flex-col text-zinc-100 text-sm print:text-xs">
						<h4 className="uppercase font-semibold print:text-xs">
							{workExperience?.title}
						</h4>
						<small className="print:text-[10px]">
							{workExperience?.company}
						</small>
						<div className="flex items-center justify-start gap-2">
							{workExperience?.isCurrent ? (
								<>
									<small className="print:text-[10px]">
										{formatDate(workExperience.startDate)}
									</small>
									<small className="text-gray-100 print:text-[10px]">|</small>
									<small className="text-gray-100 text-xs print:text-[10px]">
										{calculateDuration(
											workExperience.startDate?.toString(),
											undefined,
										)}
									</small>
									<small className="text-gray-100 print:text-[10px]">|</small>
									<small className="text-gray-100 print:text-[10px]">
										Current
									</small>
								</>
							) : (
								<>
									<small className="print:text-[10px]">
										{formatDate(workExperience.startDate)}
									</small>
									<small className="text-gray-100 print:text-[10px]">|</small>
									<small className="print:text-[10px]">
										{formatDate(workExperience.endDate)}
									</small>
									<small className="text-gray-100 print:text-[10px]">|</small>
									<small className="text-gray-100 print:text-[10px]">
										<small className="text-gray-100 text-xs print:text-[10px]">
											{calculateDuration(
												workExperience.startDate?.toString(),
												workExperience.endDate?.toString(),
											)}
										</small>
									</small>
								</>
							)}
						</div>
						<small>{workExperience?.location}</small>
					</div>
					<div className="text-sm leading-relaxed text-balance prose prose-zinc prose-invert">
						<ContentMD markdown={workExperience?.description} />
					</div>
					{workExperience?.link && (
						<div className="mt-4 flex items-center space-x-2">
							<Globe size={14} />
							<a
								href={workExperience?.link}
								target="_blank"
								rel="noopener noreferrer"
							>
								<small className="print:text-[10px]">Visit Website</small>
								<small className="hidden print:flex print:text-[10px]">
									{workExperience?.link}
								</small>
							</a>
						</div>
					)}
					<div className="w-3/4 mx-auto h-px bg-gradient-to-r from-zinc-300/10 via-zinc-500 to-zinc-400/10" />
				</div>
			))}
		</div>
	);
}
