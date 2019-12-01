/**
* @api {POST} https://域名/api/question 问问涨哥
* @apiVersion 1.0.0
* @apiGroup BSZEDU
*
* @apiParam {String} name 用户名字，没有可不填
* @apiParam {String} headerimg 用户头像，没有可不填
* @apiParam {String} province 用户省份，没有可不填
* @apiParam {String} city 用户城市，没有可不填
* @apiParam {String} phone 用户手机号，没有可不填
* @apiParam {String} openid 微信用户唯一标识ID，没有可不填
* @apiParam {String} problem 用户问题
*
* @apiSuccess {String} respCode 返回码。 0000 成功，其他，失败
*
*
* @apiSuccessExample {json} Success-Response:
* HTTP/1.1 200 OK
* {
* "respCode":"0000",
* "respMsg":"成功"
* }
*/

/**
* @api {POST} https://域名/api/question/answer 股市解答
* @apiVersion 1.0.0
* @apiGroup BSZEDU
*
* @apiParam {String} need_name 不用传，暂不需参数
*
* @apiSuccess {String} respCode 响应码, 如： 0000, 0001，……
* @apiSuccess {String} respMsg 响应信息, 如： 成功
* @apiSuccess {Object} data 数据对象数组
* @apiSuccess {String} data.r_name 提问者名字, 如： 巴菲特
* @apiSuccess {String} data.r_headerimg 提问者头像，如： https://bszedu.com/static/public/images/qq.png
* @apiSuccess {String} data.province 提问者省份，如： 湖南
* @apiSuccess {String} data.city 提问者城市，如： 长沙
* @apiSuccess {String} data.r_date 提问者日期，如： 10/22
* @apiSuccess {String} data.r_time 提问者时间，如： 13:22
* @apiSuccess {String} data.question 提问者问题，如：今日大盘涨了吗？
* @apiSuccess {String} data.a_name 解答者名字, 如： 涨哥
* @apiSuccess {String} data.a_headerimg 解答者头像, 如： https://bszedu.com/static/public/images/qq.png
* @apiSuccess {String} data.a_date 解答者日期, 如： 10/22
* @apiSuccess {String} data.a_time 解答者时间, 如： 13:22
* @apiSuccess {String} data.answer 解答者内容, 如： 大盘又绿了！
*
*
* @apiSuccessExample {json} Success-Response:
* HTTP/1.1 200 OK
* {
* "respCode":"0000",
* "respMsg":"成功",
* "data":[
* {
* "r_name":"巴菲特",
* "r_headerimg":"https://bszedu.com/static/public/images/qq.png",
* "province":"湖南",
* "city":"长沙",
* "r_date":"10/22",
* "r_time":"13:22",
* "question":"今日大盘涨了吗？",
* "a_name":"涨哥",
* "a_headerimg":"https://bszedu.com/static/public/images/qq.png",
* "a_date":"10/22",
* "a_time":"13:22",
* "answer":"大盘又绿了！"
* }
* ]
* }
*/

/**
* @api {POST} https://域名/api/question/answer3 股市解答2
* @apiVersion 1.0.0
* @apiGroup BSZEDU
*
* @apiParam {String} need_name 不用传，暂不需参数
*
* @apiSuccess {String} respCode 响应码, 如： 0000, 0001，……
* @apiSuccess {String} respMsg 响应信息, 如： 成功
* @apiSuccess {Object} data 数据对象数组
* @apiSuccess {String} data.r_name 提问者名字, 如： 巴菲特
* @apiSuccess {String} data.r_headerimg 提问者头像，如： https://bszedu.com/static/public/images/qq.png
* @apiSuccess {String} data.province 提问者省份，如： 湖南
* @apiSuccess {String} data.city 提问者城市，如： 长沙
* @apiSuccess {String} data.r_date 提问者日期，如： 10/22
* @apiSuccess {String} data.r_time 提问者时间，如： 13:22
* @apiSuccess {String} data.question 提问者问题，如：今日大盘涨了吗？
* @apiSuccess {String} data.a_name 解答者名字, 如： 涨哥
* @apiSuccess {String} data.a_headerimg 解答者头像, 如： https://bszedu.com/static/public/images/qq.png
* @apiSuccess {String} data.a_date 解答者日期, 如： 10/22
* @apiSuccess {String} data.a_time 解答者时间, 如： 13:22
* @apiSuccess {String} data.answer 解答者内容, 如： 大盘又绿了！
*
*
* @apiSuccessExample {json} Success-Response:
* HTTP/1.1 200 OK
* {
* "respCode":"0000",
* "respMsg":"成功",
* "data":[
* {
* "r_name":"巴菲特",
* "r_headerimg":"https://bszedu.com/static/public/images/qq.png",
* "province":"湖南",
* "city":"长沙",
* "r_date":"10/22",
* "r_time":"13:22",
* "question":"今日大盘涨了吗？",
* "a_name":"涨哥",
* "a_headerimg":"https://bszedu.com/static/public/images/qq.png",
* "a_date":"10/22",
* "a_time":"13:22",
* "answer":"大盘又绿了！"
* }
* ]
* }
*/
