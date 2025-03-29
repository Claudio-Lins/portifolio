import { Module } from "@nestjs/common";
import { DbModule } from "src/db/db.module";
import { SocialNetworkController } from "./social-network.controller";
import { SocialNetworkPrisma } from "./social-network.prisma";

@Module({
	providers: [SocialNetworkPrisma],
	controllers: [SocialNetworkController],
	imports: [DbModule],
})
export class SocialNetworkModule {}
