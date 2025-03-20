import { Module } from "@nestjs/common";
import { DbModule } from "src/db/db.module";
import { ProjectController } from "./project.controller";
import { ProjectsPrisma } from "./projects.prisma";

@Module({
	providers: [ProjectsPrisma],
	controllers: [ProjectController],
	imports: [DbModule],
})
export class ProjectModule {}
