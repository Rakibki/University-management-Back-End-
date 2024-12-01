import config from "../../app/config";
import TStudent from "../student/student.interface";
import { studentModel } from "../student/student.model";
import Tuser from "./user.interface";
import UserModel from "./user.model";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  const userData: Partial<Tuser> = {};

  userData.password = password || (config.default_password as string);
  userData.role = "student";
  userData.id = "2030100001";
  const newUser = await UserModel.create(userData);

  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id; //reference _id

    const newStudent = await studentModel.create(studentData);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};