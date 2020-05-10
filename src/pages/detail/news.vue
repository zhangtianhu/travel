<template>
<div>
<el-row>
  <el-col :span="20" v-for="(o, index) in len" :key="o" :offset="index > 0 ? 2 : 2">
    <el-card :body-style="{ padding: '0px'}">
      <img :src="news[index].picUrl" class="image">
      <div style="padding: 14px;">
        <span>{{news[index].title}}</span>
        <div class="bottom clearfix">
          <span class="time">{{news[index].ctime}}</span>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
<home-tab></home-tab>
</div>
</template>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .image {
    width: 100%;
    display: block;
  }
  .time{
      color: cadetblue;
      float: right;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>

<script>
    import HomeTab from './components/Tab'
    import axios from 'axios'
    export default {
        components: {
            HomeTab,
        },
        data () {
		  return {
            news:[],
            len:null
		  }
        },
        methods:{
            getNewsInfo: function() {
		    axios.get('http://api.tianapi.com/travel/index?key=36d389a9e18f3fbcee8d0230059c0e92')
		      .then((res)=>{
                  console.log(res.data.newslist)
                  for(let i =0 ;i<res.data.newslist.length;i++){
                        res.data.newslist.splice(res.data.newslist.findIndex(item=>item.picUrl ===""),1)
                  }
                  
                  this.news=res.data.newslist;
                  this.len=res.data.newslist.length;
              })
          },
          
        },
        mounted () {
		  this.getNewsInfo()
		},
    }
</script>