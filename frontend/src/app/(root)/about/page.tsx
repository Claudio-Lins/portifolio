import { Contacts } from "@/components/about/contacts";
import { Education } from "@/components/about/education";
import { Name } from "@/components/about/name";
import { Role } from "@/components/about/role";
import { Container } from "@/components/shared/Container";
import { getEducations } from "@/functions/education";
import { getUsers } from "@/functions/user";
import { cn } from "@/lib/utils";

export default async function About() {
	const { users } = await getUsers();
	const { educations } = await getEducations();
	return (
		<div className={cn("flex flex-col pt-24 bg-zinc-950 w-full min-h-dvh")}>
			<Container className="w-full flex flex-col p-4 gap-8 border-2 border-zinc-500 rounded-lg">
				<Name
					picture={false}
					pictureUrl={users[0]?.imageUrl || ""}
					firstName={users[0]?.name || ""}
					lastName={users[0]?.lastName || ""}
				/>
				<div className="w-full h-px bg-gradient-to-r from-zinc-300/10 via-zinc-500 to-zinc-400/10" />
				<Role />
				<div className="w-full h-px bg-gradient-to-r from-zinc-300/10 via-zinc-500 to-zinc-400/10" />
				<div className="grid sm:grid-cols-12 w-full my-8 px-8">
					<div className="sm:col-span-3 w-full flex flex-col space-y-10 print:border-r print:border-0.5">
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
						{/* {educations.length > 0 && ( */}
						<>
							<Education educations={educations || []} />
							<div className="w-full h-px bg-gradient-to-r from-zinc-300/10 via-zinc-500 to-zinc-400/10" />
						</>
						{/* )} */}
					</div>
				</div>
				{/* <pre className="text-zinc-100">{JSON.stringify(users, null, 2)}</pre> */}
			</Container>
		</div>
	);
}
