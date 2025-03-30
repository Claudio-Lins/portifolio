"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import DOMPurify from "dompurify";
import { useEffect, useState } from "react";
import { ContentMD } from "../shared/ContentMD";

interface ProfessionalAboutProps {
	content: string;
}

export function ProfessionalAbout({ content }: ProfessionalAboutProps) {
	return (
		<div
			className={cn(
				" font-light text-zinc-100 tracking-widest print:border-b print:pb-0",
			)}
		>
			<div className="mt-6 pb-2 h-48 text-zinc-100 text-sm leading-relaxed text-balance print:leading-relaxed print:h-full print:mt-2 prose prose-zinc prose-invert">
				<ContentMD markdown={content} />
				<div className="w-full h-px bg-gradient-to-r from-zinc-300/10 via-zinc-500 to-zinc-400/10" />
			</div>
		</div>
	);
}
