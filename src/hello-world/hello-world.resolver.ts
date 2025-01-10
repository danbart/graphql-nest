import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
    @Query(() => String, { description: 'Returns "Hello World!"', name: `hello` })
    helloWorld(): string {
        return 'Hello World!';
    }

    @Query(() => Float, { name: 'randomNumber' })
    randomNumber(): number {
        return Math.random() * 100;
    }

    @Query(() => Int, { name: 'randomFromZeroTo', description: 'Returns a random integer from 0 to the specified number, default 6' })
    randomFromZeroTo(
        @Args('to', { nullable: true, type: () => Int }) to: number = 6
    ): number {
        return Math.floor(Math.random() * to);
    }
}
