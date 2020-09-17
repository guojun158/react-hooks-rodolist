/**
 * 深拷贝
 * @param {目标对象} target 
 */
function deepClone(target) {
  if (typeof target === 'object') {
    var cloneTarget = Array.isArray(target) ? [] : {};
    for (const key in target) {
      cloneTarget[key] = deepClone(target[key])
    }
    return cloneTarget
  } else {
    return target
  }
}

function deleteSpace(str) {
  return str.replace(/^\s+|\s+$/gi, '')
}

function getDate() {
  let now = new Date()
  let y = now.getFullYear()
  let m = now.getMonth() + 1
  let d = now.getDate()
  let h = now.getHours()
  let f = now.getMinutes()
  let s = now.getSeconds()
  m = m < 10 ? '0' + m : m
  d = d < 10 ? '0' + d : d
  h = h < 10 ? '0' + h : h
  f = f < 10 ? '0' + f : f
  s = s < 10 ? '0' + s : s
  return y + m + d + h + f + s
}

Date.prototype.getNow = getDate;

export {
  deepClone,
  deleteSpace,
  getDate,
}