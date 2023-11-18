import axios from 'axios'

export function checkApollo() {
  return axios.get('xxxx').then(() => {
    console.log('apollo配置正常');
  }).catch((err) => {
    const resStatus = err.response && err.response.status;
    if (resStatus === 401) {
      console.log('apollo没有权限');
    }
  })
}
