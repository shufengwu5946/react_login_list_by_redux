/**
 * 登陆接口，用户点击 LoginIn 按钮时调用
 * @param {string} userName 用户名
 * @param {string} password 密码
 * @return {Object} 返回信息，包括：
 *  type 请求状态，
 *  username 用户名，用于 dashboard 显示用户信息
 *  userId 用户的id，用于查询用户的 todos 列表
 */

const fetchLogin = (userName, password) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (userName === 'admin' && password === 'admin') {
      resolve({
        type: 'SUCCESS',
        username: userName,
        userId: 1,
      });
    } else {
      reject({
        type: 'FAIL',
        error: 'Uh oh, some error happened!',
      });
    }
  }, 2000);
});

export default fetchLogin;
