import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { DbModule } from "./db/db.module";
import { EducationModule } from "./education/education.module";
import { ProjectModule } from "./project/project.module";
import { ReferenceModule } from "./reference/reference.module";
import { SocialNetworkModule } from "./social-network/social-network.module";
import { TechnologyModule } from "./technology/technology.module";
import { UserModule } from "./user/user.module";
import { WorkExperienceModule } from "./work-experience/work-experience.module";

@Module({
	imports: [
		DbModule,
		ProjectModule,
		TechnologyModule,
		UserModule,
		EducationModule,
		SocialNetworkModule,
		WorkExperienceModule,
		ReferenceModule,
	],
	controllers: [AppController],
})
export class AppModule {}
