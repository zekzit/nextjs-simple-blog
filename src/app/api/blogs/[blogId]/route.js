import { dbGetBlog } from "@/services/blog-service";

export async function GET(request, {params}) {
    const blog = await dbGetBlog(params.blogId);
    return Response.json(blog);
}