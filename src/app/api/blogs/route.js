import { dbCreateBlog, dbListBlog } from "@/services/blog-service";

export async function GET(request) {
    return Response.json(await dbListBlog());
}

export async function POST(request) {
    const blog = await request.json();
    const createdBlog = await dbCreateBlog(blog);
    return Response.json(createdBlog);
}