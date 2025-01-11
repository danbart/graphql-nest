import { Field, InputType } from "@nestjs/graphql";
import { IsBoolean, IsNotEmpty, IsOptional, IsString, MaxLength, Min } from "class-validator";

@InputType()
export class UpdateTodoInput {

    @Field(() => Number, { description: 'Id of the todo to update' })
    @IsNotEmpty()
    @Min(1)
    id: number;

    @Field(() => String, { description: 'Description of the todo', nullable: true })
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    @IsOptional()
    description?: string;

    @Field(() => Boolean, { description: 'Indicates if the todo is done', nullable: true })
    @IsOptional()
    @IsBoolean()
    done?: boolean;
}