# highcharts bug

## 1.删除 chart，导致 Highcharts.charts[i] undefined

![](img/highcharts%E5%88%A0%E9%99%A4undefined.png)
文档中写到
![](img/highcharts%E5%88%A0%E9%99%A4-%E6%96%87%E6%A1%A3.png)

## 2.使用 highcharts 的下载功能需要引入两个外部 js 文件

![](img/%E5%BC%95%E5%85%A5%E6%96%87%E4%BB%B6.png)

引入文件之后，图标上会自动显示导出功能的菜单，如果不想要需要在每个图标数据中添加
![](img/%E4%B8%8D%E8%A6%81%E5%AF%BC%E5%87%BA%E6%8C%89%E9%92%AE.png)

## 3.从后端拿到的小数点的数据要将其转换成数字，否则就是字符串格式的数据，会报错
