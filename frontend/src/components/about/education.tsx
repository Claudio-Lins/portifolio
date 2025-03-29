import { cn } from "@/lib/utils";
import { calculateDuration } from "@/utils/calculate-duration-data";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(duration);
dayjs.extend(relativeTime);

interface EducationProps {
	educations: {
		id: string;
		school: string;
		field: string;
		startDate: string | Date;
		endDate: string | Date | null;
	}[];
}

export function Education({ educations }: EducationProps) {
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
		<div
			className={cn(
				"font-light text-zinc-600 tracking-widest print:tracking-wider",
			)}
		>
			<h3 className="uppercase font-light myPrintingSubTitle text-zinc-100">
				Education
			</h3>
			<div className="flex flex-col mt-6 space-y-4 print:space-y-4">
				{educations?.map((edu) => (
					<div className="flex flex-col space-y-1 print:space-y-0" key={edu.id}>
						<h4 className="uppercase text-zinc-100 text-sm font-semibold print:text-[10px] print:leading-snug text-zinc-100">
							{edu?.field}
						</h4>
						<small className="print:text-[8px] text-xs text-zinc-100">
							{edu?.school}
						</small>
						<div className="flex items-center justify-start gap-2">
							<small className="print:text-[8px] text-xs text-zinc-100">
								{formatDate(edu.startDate)}
							</small>
							<span className="print:text-[8px] text-xs text-zinc-100">|</span>
							<small className="print:text-[8px] text-xs text-zinc-100">
								{edu.endDate ? formatDate(edu.endDate) : "Atual"}
							</small>
							<small className="text-zinc-100 print:hidden text-xs">
								{calculateDuration(
									edu.startDate.toString(),
									edu?.endDate?.toString(),
								)}
							</small>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
