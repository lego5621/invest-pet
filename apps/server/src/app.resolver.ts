import { Query, Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { AppData } from './app.model';

@Resolver(() => AppData)
export class AppResolver {
  @Query(() => AppData)
  helloGraphQl() {
    return {
      name: 'Tom',
      age: 12,
    };
  }

  @ResolveField()
  payload(@Parent() appData: AppData) {
    appData;
    return {
      isCat: true,
    };
  }
}
