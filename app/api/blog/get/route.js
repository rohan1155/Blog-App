import ConnectDB from "@/utils/db";
import { NextResponse } from "next/server";
import Blog from "@/models/blog";

export async function GET(req) {
  try {
    await ConnectDB();
    const id = req.nextUrl.searchParams.get("id");
    const blog = await Blog.findById(id);
    return NextResponse.json(blog);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message });
  }
}
