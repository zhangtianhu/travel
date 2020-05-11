<template>
<div>
<el-row>
<div @click="back" style="height:36px;background-color:rgb(0,188,212);padding-top:6px"><svg t="1589205322820" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2140" width="24" height="24"><path d="M340.154182 535.272727l421.050182-421.050182c9.076364-9.076364 9.076364-23.831273 0-32.907636-9.076364-9.076364-23.831273-9.076364-32.907636 0l-437.480727 437.480727c-9.076364 9.076364-9.076364 23.831273 0 32.907636l437.480727 437.480727c9.076364 9.076364 23.831273 9.076364 32.907636 0 9.076364-9.076364 9.076364-23.831273 0-32.907636L340.154182 535.272727z" p-id="2141" fill="#ffffff"></path></svg></div> 
  <el-col :span="20" v-for="(o, index) in len" :key="o" :offset="index > 0 ? 2 : 2">
    <el-card :body-style="{ padding: '0px'}">
    <div class="bangdan-card-body">
      <img :src="news[index].sysPicurl" class="bangdan-image">
      <div style="padding: 14px;">
        <div class="bangdan-title">{{news[index].sysTitle}}</div>
        <div class="bangdan-fen"><span class="fen-num">4.8</span>分</div>
        <p>{{news[index].sysText}}</p>
        <div class="bottom clearfix">
          <div class="bottom-text">土著最爱</div>
          <div class="bangdan-time">¥{{news[index].sysPrice}}起</div>
        </div>
      </div>
    </div>
    </el-card>
  </el-col>
</el-row>
<home-tab></home-tab>
</div>
</template>

<style>
.bangdan-card-body{
    display: flex;
}
  .bangdan-title{
      font-size: 18px;
      text-overflow: ellipsis;
      display: block;
      white-space: nowrap;
      /* overflow: hidden; */
      width: 80px;
      height: 20px;
      color: black;
      font-weight: bolder;
  }
  .bangdan-fen{
      color: rgb(90, 230, 183);
      font-size: 12px;
  }
  .fen-num{
      font-weight: bolder;
  }
  
  .bottom {
    display: flex;
    margin-top: 13px;
    line-height: 12px;
  }
  .bottom-text{
    width: 51px;
    height: 14px;
    font-size: 11px;
    border: 1px solid;
    background-color: #d6fff1;
    color: #166f5c;
  }

  .bangdan-image {
    width: 30%;
    height: 120px;
    display: block;
  }
  .bangdan-time{
      color: rgb(245, 194, 29);
      margin-left: 60px;
      font-size: 14px;
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
    import HomeTab from './Tab'
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
		    axios.post('http://localhost:10000/user/user/message')
		      .then((res)=>{
                  console.log(res.data)
                   
                  this.len=res.data.data.length;
                  this.news = res.data.data;
              })
          },
            back:function(){
                this.$router.push({path:'/'})
            }
        },
        mounted () {
		  this.getNewsInfo()
		},
    }
</script>