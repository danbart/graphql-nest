import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType({ description: 'Todo quick aggregations' })
export class AggregationsType {

  @Field(() => Number, { description: 'Total number of todos' })
  total: number;

  @Field(() => Number, { description: 'Number of pending todos' })
  pending: number;

  @Field(() => Number, { description: 'Number of completed todos' })
  completed: number;

  @Field(() => Number, { description: 'Number of completed todos', deprecationReason: 'Use `completed` field instead' })
  totalTodosCompleted: number;

}