import { Module } from "@nestjs/common";
import { DbModule } from "src/db/db.module";
import { TechnologyController } from "./technology.controller";
import { TechnologyPrisma } from "./technology.prisma";

@Module({
	controllers: [TechnologyController],
	providers: [TechnologyPrisma],
	imports: [DbModule],
})
export class TechnologyModule {}
