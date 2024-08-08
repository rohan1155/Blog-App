import Blog from "@/models/blog";
import ConnectDB from "@/utils/db";
import { NextResponse } from "next/server";
export async function DELETE(req) {
  try {
    await ConnectDB();
    const id = req.nextUrl.searchParams.get("id");
    console.log(id);
    await Blog.findByIdAndDelete(id);
    return NextResponse.json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message });
  }
}
