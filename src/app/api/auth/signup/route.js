// src/app/api/auth/signup/route.js
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {connectDB} from '@/lib/dbConnect'; 
import { NextResponse } from 'next/server';
import User from '@/models/User';

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();
    await connectDB(); 
    const existUser = await User.findOne({ email });
    if (existUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser =new  User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    return NextResponse.json({ token, user: { name, email } }, { status: 201 });
  } catch (error) {
    console.error('Error during signup:', error); // Log the error for debugging
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
