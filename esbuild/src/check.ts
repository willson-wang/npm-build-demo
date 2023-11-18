import { checkApollo } from "./util";


export async function checkRun() {
  try {
    await checkApollo()
  } catch (error) {
    console.log('error 检查脚本运行失败');
  }
}

checkRun()
