import fs from "fs";
import path from "path";
import { lookup } from "mime-types";
import { baseDir } from "@/file-system-root.cjs";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ filePath: string[] }> }
) {
  const { filePath } = await params;
  const rootPath = path.join(baseDir, ...filePath);
  console.log("path=====>", rootPath);
  if (!fs.existsSync(rootPath)) {
    return new Response("Not Found", { status: 404 });
  }
  // 创建文件流并返回文件内容
  const fileStream = fs.createReadStream(rootPath);
  const mimeType = lookup(path.extname(rootPath)) || "application/octet-stream";

  return new Response(fileStream, {
    status: 200,
    headers: {
      "Content-Type": mimeType, // 根据文件类型设置 Content-Type
      "Content-Disposition": `inline; filename="${path.basename(rootPath)}"`, // 可选，指定下载文件的文件名
      "Cache-Control": "public, max-age=31536000, immutable", // 可选，设置缓存控制
    },
  });
}
