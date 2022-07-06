import prisma from "../prisma";

interface NewUser {
  name: string;
  email: string;
}

export async function createUser(user: NewUser) {
  if (user.name) {
    return await prisma.user.create({
      data: user,
    });
  } else {
    throw new Error("User must have a name");
  }
}
