async function queryList(body) {
  const data = {
    code: 0,
    message: "ok",
    data: {
      pageNumber: 1,
      total: 156230,
      rows: [
        {
          id: 206055,
          userId: 29465,
          userName: "我不困！我不累！我还能学！",
          content: "什么都别想！考完了再说！！！",
          createTime: "2020-09-17 18:33:07",
        },
        {
          id: 206054,
          userId: 336124,
          userName: "云朵有点甜🍓",
          content: "09月17日学习日记 连麦学习 15分钟",
          createTime: "2020-09-17 18:32:12",
        },
        {
          id: 206053,
          userId: 248441,
          userName: "希晓.要逆袭",
          content: "09月17日学习日记 学习 8小时0分钟",
          createTime: "2020-09-17 18:26:02",
        },
        {
          id: 206052,
          userId: 336712,
          userName: "加油",
          content: "09月17日学习日记 专注计时 7分钟",
          createTime: "2020-09-17 18:21:40",
        },
        {
          id: 206051,
          userId: 336684,
          userName: "喵UU",
          content: "连麦计时：09月17日：3小时38分钟",
          createTime: "2020-09-17 18:14:10",
        },
        {
          id: 206050,
          userId: 299057,
          userName: "向着清华努力",
          content: "我宁愿做一个平凡的人陪在你身旁 学了那么久，累死了 连麦学习 1小时14分钟",
          createTime: "2020-09-17 18:11:34",
        },
        {
          id: 206049,
          userId: 175594,
          userName: " 季夏二七",
          content: "09月17日学习日记 专注计时 4小时10分钟",
          createTime: "2020-09-17 18:06:59",
        },
        {
          id: 206048,
          userId: 280609,
          userName: "不知道取啥名字",
          content: "学而思网校真的是太棒了😏",
          createTime: "2020-09-17 18:06:01",
        },
        {
          id: 206047,
          userId: 226628,   
          userName: "一心考研的小天才",
          content: "09月17日学习日记 连麦学习 3小时26分钟",
          createTime: "2020-09-17 18:05:28",
        },
        {
          id: 206046,
          userId: 2393,
          userName: "卿凡要考第一名",
          content: "09月17日学习日记 连麦学习 1小时47分钟",
          createTime: "2020-09-17 18:04:23",
        }
      ]
    }
  }
  return new Promise((resolve, reject) => {
    resolve(data);
  })
}

export {
  queryList,
}
