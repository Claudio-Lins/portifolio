import { Module } from "@nestjs/common";
import { DbModule } from "src/db/db.module";
import { EducationController } from "./education.controller";
import { EducationPrisma } from "./education.prisma";

@Module({
	providers: [EducationPrisma],
	controllers: [EducationController],
	imports: [DbModule],
})
export class EducationModule {}
