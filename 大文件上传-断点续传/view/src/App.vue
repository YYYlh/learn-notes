<template>
  <div>
    <input type="file" @change="fileChange">
    <button @click="upload">上传</button>
  </div>
</template>

<script>
import 'spark-md5'
import { readFile } from './assets/utils'
function uploadFileModule() {
  const spark = new SparkMD5.ArrayBuffer()
  let file = null
  function fileChange(e) {
    file = e.target.files[0]
  }
  async function upload() {
    const buffer = await readFile(file)
    spark.append(buffer)
    let hash = spark.end()
    console.log(hash);
  }
  return {
    fileChange,
    upload
  }
}
export default {
  name: 'App',
  setup() {
    return {
      ...uploadFileModule()
    }
  }
}
</script>
