const fs = require("fs");
const path = require("path");

const scanDirectory = (dir) => {
  const result = [];
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      result.push({
        name: file,
        type: 0, // 文件夹
        children: scanDirectory(fullPath),
      });
    } else {
      result.push({
        name: file,
        type: 1, // 文件
      });
    }
  });

  return result;
};

const generateFileTree = (targetDir, outputPath) => {
  const fileTree = scanDirectory(targetDir);
  fs.writeFileSync(outputPath, JSON.stringify(fileTree, null, 2), "utf-8");
};

module.exports = generateFileTree;
