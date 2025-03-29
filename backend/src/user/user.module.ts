import { Module } from "@nestjs/common";
import { DbModule } from "src/db/db.module";
import { UserController } from "./user.controller";
import { UserPrisma } from "./user.prisma";

@Module({
	providers: [UserPrisma],
	controllers: [UserController],
	imports: [DbModule],
})
export class UserModule {}
