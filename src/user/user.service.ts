import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto) {
    return await new this.userModel({
      idfirebase: createUserDto.idfirebase,
      coin: 0,
      ...createUserDto,
      createdAt: new Date(),
    }).save();
  }

  async findAll() {
    return this.userModel.find();
  }

  async findOne(id: string): Promise<User> {
    return await this.userModel.findById(id).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
  }

  async addCoin(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UpdateUserDto> {
    const user = await this.findOne(id);
    console.log(user);
    const { coin } = user;
    console.log(coin);

    if (user && coin > 0) {
      const updatedCoin = coin + updateUserDto.coin;
      console.log(updatedCoin);
      return this.userModel.findByIdAndUpdate(
        id,
        {
          coin: updatedCoin,
        },
        { new: true },
      );
    }

    return this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });
  }
}
