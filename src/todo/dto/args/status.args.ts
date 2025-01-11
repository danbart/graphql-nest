import { ArgsType, Field } from "@nestjs/graphql";
import { IsBoolean, IsOptional } from "class-validator";


@ArgsType()
export class StatusArgs {

    @Field(() => Boolean, { description: 'Indicates if the todo is done', nullable: true })
    @IsOptional()
    @IsBoolean()
    status?: boolean;
}