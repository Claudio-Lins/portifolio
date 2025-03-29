import { Module } from "@nestjs/common";
import { DbModule } from "src/db/db.module";
import { WorkExperienceController } from "./work-experience.controller";
import { WorkExperiencePrisma } from "./work-experience.prisma";

@Module({
	providers: [WorkExperiencePrisma],
	controllers: [WorkExperienceController],
	imports: [DbModule],
})
export class WorkExperienceModule {}
