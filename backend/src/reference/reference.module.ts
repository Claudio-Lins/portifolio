import { Module } from "@nestjs/common";
import { DbModule } from "src/db/db.module";
import { ReferenceController } from "./reference.controller";
import { ReferencePrisma } from "./reference.prisma";

@Module({
	providers: [ReferencePrisma],
	controllers: [ReferenceController],
	imports: [DbModule],
})
export class ReferenceModule {}
