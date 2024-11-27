const schedule = require("node-schedule");
const path = require("path");
const baseDir = require("../file-system-root.cjs");
const generateFileTree = require("./generateFileTree.cjs");

const outputPath = path.join(__dirname, "scanFileTask", "fileTree.json"); // 输出 JSON 文件

// 定时任务 Job 实例
let job;

// 启动任务
const startTask = () => {
  if (!job) {
    job = schedule.scheduleJob("*/1 * * * *", () => {
      // 每隔5分钟执行
      console.log("开始生成文件树...");
      generateFileTree(baseDir, outputPath);
      console.log("文件树生成完成！");
    });
    console.log("定时任务已启动！");
  } else {
    console.log("定时任务已在运行！");
  }
};

// 停止任务
const stopTask = () => {
  if (job) {
    job.cancel();
    job = null;
    console.log("定时任务已停止！");
  } else {
    console.log("没有正在运行的定时任务！");
  }
};

// 根据命令行参数执行对应的逻辑
const action = process.env.TASK_ACTION;

if (action === "start") {
  startTask();
} else if (action === "stop") {
  stopTask();
} else {
  console.log("无效的操作，请使用 TASK_ACTION=start 或 TASK_ACTION=stop");
}
