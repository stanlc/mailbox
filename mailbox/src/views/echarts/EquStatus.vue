<template>
    <div>
        <div id="main" style="width: 460px;height:240px;"></div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    mounted(){
        this.drawLine()
    },
    methods:{
        drawLine(){
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('main'))
            // 绘制图表
            //遍历Data
            var data = [{
                name: '正常',
                value: 54
            }, {
                name: '在线',
                value: 44
            }, {
                name: '故障',
                value: 35
            }, {
                name: '离线',
                value: 30
            }
            ]

        var titleArr = [],
            seriesArr = [];
        var colors = [
            ['#389af4', '#dfeaff'],
            ['#ff8c37', '#ffdcc3'],
            ['#ffc257', '#ffedcc'],
            ['#fd6f97', '#fed4e0'],
            ['#a181fc', '#e3d9fe']
        ]
        data.forEach(function(item, index) {
            titleArr.push({
                text: item.name,
                left: index * 20 + 10 + '%',
                top: '65%',
                textAlign: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: '16',
                    color: colors[index][0],
                    textAlign: 'center',
                },
            });
            seriesArr.push({
                name: item.name,
                type: 'pie',
                clockWise: false,
                radius: [60, 70],
                itemStyle: {
                    normal: {
                        color: colors[index][0],
                        shadowColor: colors[index][0],
                        shadowBlur: 0,
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                    }
                },
                hoverAnimation: false,
                center: [index * 20 + 10 + '%', '50%'],
                data: [{
                    value: item.value,
                    label: {
                        normal: {
                            formatter: function(params) {
                                return params.value;
                            },
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'bold',
                                color: colors[index][0]
                            }
                        }
                    },
                }, {
                    value: 100 - item.value,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: colors[index][1]
                        },
                        emphasis: {
                            color: colors[index][1]
                        }
                    }
                }]
            })
        });


    
            //填入Option
            var option = {
               
                title: titleArr,
                series: seriesArr
            }
            myChart.setOption(option);
            }
    }
}
</script>

<style scoped>
   
</style>