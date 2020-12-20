<template>
  <div>
    <input type="file" @change="fileChange">
    <button @click="upload">上传</button>
    {{ progress }}
    <button @click="btnHanlde">{{ abort ? '开始': '暂停' }}</button>
    <video controls="controls" preload="auto" :src="viderSrc" height="400"></video>
  </div>
</template>

<script>
import { ref, reactive, computed, watch } from 'vue'
import SparkMD5 from 'spark-md5'
import { readFile, postData, getData } from './assets/utils'


function uploadFileModule() {
  const spark = new SparkMD5.ArrayBuffer()
  const MB = 1024 * 1024
  let hash = ''
  let file = null

  let count = ref(0)
  let total = ref(0)
  let abort = ref(false)
  let viderSrc = ref('')

  let chunkList = reactive([])

  const progress = computed(() => total.value === 0 ? '0%' : `${~~((count.value / total.value) * 100)}%`)
  
  async function fileChange(e) {
    count.value = 0
    total.value = 0
    file = e.target.files[0]
    const buffer = await readFile(file)
    spark.append(buffer)
    hash = spark.end()
    let suffix = /\.([0-9a-zA-Z]+)$/i.exec(file.name)[1]
    chunkList.value = getFileSliceArr(file, suffix)
  }
  // 进行切片
  function getFileSliceArr(file, suffix) {
    let result = []
    const size = 1 * MB
    total.value = Math.ceil(file.size / size)
    let start = 0
    for (let i = 0; i < total.value; i++) {
      let end = start + size
      let o = {
        chunk: file.slice(start, end),
        filename: `${hash}_${i}.${suffix}`
      }
      result.push(o)
      start = end
    }
    return result
  }
  async function upload() {
    let requestList = []
    chunkList.value.map((item, index) => {
      let fn = () => {
        const formData = new FormData()
        formData.append('chunk', item.chunk)
        formData.append('filename', item.filename)
        return postData('http://localhost:8848/upload', formData).then(res => {
          if (res.data.success) {
            count.value++
            chunkList.value[index] = ''
          }
        })
      }
      if (chunkList.value[index]) {
        requestList.push(fn)
      }
    })
    let i = 0
    async function send() {
      if (abort.value) {
        return
      }
      if (i >= requestList.length) {
        margeRequest()
        return
      }
      await requestList[i]()
      i++
      send()
    }
    send()
  }
  function margeRequest() {
    getData(`http://localhost:8848/merge?hash=${hash}`).then(res => {
      if (res.data.success) {
        viderSrc.value = res.data.path
      }
    })
  }
  function btnHanlde() {
    if (abort.value) {
      abort.value = false
      upload()
    } else {
      abort.value = true
    }
  }
  return {
    abort,
    count,
    total,
    progress,
    fileChange,
    upload,
    btnHanlde,
    viderSrc
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
