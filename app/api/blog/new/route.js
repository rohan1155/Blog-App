import ConnectDB from "@/utils/db";
import { NextResponse } from "next/server";
import Blog from "@/models/blog";

export async function POST(req) {
  try {
    await ConnectDB();
    const data = await req.json();
    const newBlog = await Blog.create(data);
    return NextResponse.json({ message: "Blog created successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message });
  }
}
