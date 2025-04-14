import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInputDto } from './dto/create-user-input.dto';
import { User } from './model/user.model';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInputDto
  ) {
    return this.usersService.createUser(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  getUsers() {
    return this.usersService.getUsers();
  }
}
