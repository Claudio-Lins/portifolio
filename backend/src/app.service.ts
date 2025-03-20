import { Id } from "@/core";
import { Injectable } from "@nestjs/common";
@Injectable()
export class AppService {
	getHello(): string {
		return `${Id.generate()}`;
	}
}
