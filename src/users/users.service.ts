import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    // Hash the password before saving
    if (createUserDto.password) {
      const salt = await bcrypt.genSalt();
      createUserDto.password = await bcrypt.hash(createUserDto.password, salt);
    }
    
    const newUser = new this.userModel(createUserDto);
    return newUser.save();
  }

  async findAll(query: any = {}): Promise<User[]> {
    return this.userModel.find(query).select('-password').exec();
  }

  async findOne(id: string): Promise<User | null> {
    return this.userModel.findById(id).select('-password').exec();
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User | null> {
    // Hash the password if it's being updated
    if (updateUserDto.password) {
      const salt = await bcrypt.genSalt();
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, salt);
    }
    
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).select('-password').exec();
  }

  async remove(id: string): Promise<User | null> {
    return this.userModel.findByIdAndDelete(id).select('-password').exec();
  }

  async testConnection(): Promise<{ status: string; timestamp: Date }> {
    try {
      await this.userModel.findOne().exec();
      return { 
        status: 'Database connection successful!', 
        timestamp: new Date() 
      };
    } catch (error) {
      return { 
        status: `Database connection failed: ${error.message}`, 
        timestamp: new Date() 
      };
    }
  }
}