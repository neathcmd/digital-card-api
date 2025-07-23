// export const meService = async (req: Request) => {
//   const userId = req.user?.user_id;

//   const userRepo = AppDataSource.getRepository(User);

//   const data = await userRepo
//     .createQueryBuilder('user')
//     .leftJoinAndSelect('user.idCard', 'idCard')
//     .leftJoinAndSelect(
//       'idCard.socialLinks',
//       'socialLinks',
//       'socialLinks.is_deleted = false',
//     )
//     .where('user.id = :userId', { userId })
//     .getOne();

//   return {
//     message: 'get profile successfully',
//     data,
//   };
// };
