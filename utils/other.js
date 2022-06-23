/**
 * 获取类型
 * @param {any} data
 * @returns type
 */
export const type = (data) => {
  return Object.prototype.toString.call(data).replace(/\[object (.*)\]/, "$1");
};

var _debounceTimeout = null;
/**
 * 防抖
 * @param {function} fn
 * @param {number} delay
 */
export const debounce = (fn, delay = 500) => {
  clearTimeout(_debounceTimeout);
  _debounceTimeout = setTimeout(() => {
    fn();
  }, delay);
};

var _throttleRunning = false;
/**
 * 节流
 * @param {function} fn
 * @param {number} delay
 */
export const throttle = (fn, delay = 500) => {
  if (_throttleRunning) {
    return;
  }
  _throttleRunning = true;
  fn();
  setTimeout(() => {
    _throttleRunning = false;
  }, delay);
};

/**
 * 打开新页面
 * @param {string} path
 * @param {array||object} data
 * @returns router
 */
export const open = (path, data) => {
  let url = path;
  if (path[path.length - 1] === "/") {
    url = url.slice(0, url.length - 1);
  }
  if (type(data) === "Object") {
    var queryStr = "";
    for (let key in data) {
      queryStr = queryStr + "&" + key + "=" + data[key];
    }
    return window.open(
      url + "?" + queryStr.replace(/.{1}(.*)/, "$1"),
      "_blank"
    );
  }
  if (type(data) === "Array") {
    var parmaStr = "";
    data.forEach((element) => {
      parmaStr = parmaStr + "/" + element;
    });
    return window.open(url + parmaStr, "_blank");
  }
  return window.open(url, "_blank");
};