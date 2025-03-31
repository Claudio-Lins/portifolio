import { Contacts } from "@/components/about/contacts";
import { Education } from "@/components/about/education";
import { Name } from "@/components/about/name";
import { ProfessionalAbout } from "@/components/about/professional-about";
import { Role } from "@/components/about/role";
import { Skills } from "@/components/about/skills";
import { WorkExperience } from "@/components/about/work-experiense";
import { Container } from "@/components/shared/Container";
import { ContentMD } from "@/components/shared/ContentMD";
import { getEducations } from "@/functions/education";
import { getTechnologies } from "@/functions/technologies";
import { getUsers } from "@/functions/user";
import { getWorkExperiences } from "@/functions/work-experiences";
import { cn } from "@/lib/utils";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default async function About() {
	const { users } = await getUsers();
	const { educations } = await getEducations();
	const { all: technologies } = await getTechnologies();
	const workExperiences = await getWorkExperiences();
	return (
		<div
			className={cn(
				"flex flex-col pt-24 bg-zinc-950 w-full min-h-dvh print:pt-0",
			)}
		>
			<Container>
				<div className="w-full flex flex-col p-4 gap-8 border-2 border-zinc-500 rounded-lg max-w-5xl mx-auto print:border-none print:p-0 print:gap-0">
					<Name
						picture={false}
						pictureUrl={users[0]?.imageUrl || ""}
						firstName={users[0]?.name || ""}
						lastName={users[0]?.lastName || ""}
					/>
					<div className="w-full h-px bg-gradient-to-r from-zinc-300/10 via-zinc-500 to-zinc-400/10" />
					<Role />
					<div className="w-full h-px bg-gradient-to-r from-zinc-300/10 via-zinc-500 to-zinc-400/10" />
					<div className="grid sm:grid-cols-12 w-full my-8 px-4 sm:px-4">
						<div className="sm:col-span-4 w-full flex flex-col space-y-10">
							<Contacts
								phone={users[0]?.phone || ""}
								email={users[0]?.email || ""}
								street={users[0]?.street || ""}
								city={users[0]?.city || ""}
								state={users[0]?.state || ""}
								country={users[0]?.country || ""}
								zip={users[0]?.zip || ""}
								// socialNetworks={users[0]?.socialNetworks || []}
							/>
							<div className="w-full h-px bg-gradient-to-r from-zinc-300/10 via-zinc-500 to-zinc-400/10 print:hidden" />
							{educations.length > 0 && (
								<>
									<Education educations={educations || []} />
									<div className="w-full h-px bg-gradient-to-r from-zinc-300/10 via-zinc-500 to-zinc-400/10" />
								</>
							)}
							<Skills technologies={technologies || []} />
							<div className="w-full h-px bg-gradient-to-r from-zinc-300/10 via-zinc-500 to-zinc-400/10" />
						</div>
						<div className="w-px sm:col-span-1 min-h-full bg-gradient-to-b from-zinc-300/10 via-zinc-500 to-zinc-100/10 ml-6" />
						<div className="sm:col-span-7 w-full flex flex-col space-y-10 print:space-y-4">
							<div className="w-full">
								<h3 className="uppercase font-light text-3xl text-zinc-100">
									About
								</h3>
								<div className="text-zinc-100 text-sm leading-relaxed mt-6 pb-2 w-full prose prose-zinc prose-invert">
									<Markdown remarkPlugins={[remarkGfm]}>
										{users?.[0]?.professionalAbout || ""}
									</Markdown>
								</div>
								<div className="w-full h-px bg-gradient-to-r from-zinc-300/10 via-zinc-500 to-zinc-400/10 mt-10" />
							</div>
							{workExperiences.length > 0 && (
								<div className="w-full flex flex-col space-y-10 text-zinc-100 prose prose-zinc prose-invert">
									<WorkExperience workExperiences={workExperiences} />
									<div className="w-full h-px bg-gradient-to-r from-zinc-300/10 via-zinc-500 to-zinc-400/10" />
								</div>
							)}
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}
