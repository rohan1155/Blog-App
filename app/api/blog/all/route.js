import { NextResponse } from "next/server";
import Blog from "@/models/blog";
import ConnectDB from "@/utils/db";

export async function GET(req) {
  try {
    await ConnectDB();
    const blogs = await Blog.find();
    return NextResponse.json(blogs);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message });
  }
}
