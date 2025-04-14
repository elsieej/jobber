import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma-clients/jobber-auth';
import { hash } from 'bcryptjs';
@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(createUserInput: Prisma.UserCreateInput) {
    const hashedPassword = await hash(createUserInput.password, 10);
    return this.prismaService.user.create({
      data: {
        email: createUserInput.email,
        password: hashedPassword,
      },
    });
  }

  getUsers() {
    return this.prismaService.user.findMany();
  }
}
