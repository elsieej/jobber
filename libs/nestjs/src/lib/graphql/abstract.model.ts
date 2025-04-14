import { Field, ID, ObjectType } from '@nestjs/graphql';
@ObjectType({ isAbstract: true })
export class AbstractModel {
  @Field(() => ID)
  id: number;

  @Field(() => Date, { nullable: false })
  createdAt: Date;

  @Field(() => Date, { nullable: false })
  updatedAt: Date;
}
