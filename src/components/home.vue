<template lang="html">
    <div id="home">
      <ul>
        <li class="goods-item">
          <div class="icon">
            <div class="tag"><p>促销<br>热卖</p></div>
            <div class="sale-time"><p>2017年05月09日24:00出售</p></div>
            <img src="../assets/goods.png" >
          </div>
          <div class="content">
            <h2 class="name">阳澄湖大闸蟹阳澄湖大闸蟹</h2>
            <p class="desc">肉鲜肥美 苏州直供</p>
            <p class="old-price"><span class="old-attach">&yen;</span>30.5<span class="old-attach">/只</span></p>
            <p class="price"><span class="attach">&yen;</span>25.5<span class="attach">/只</span></p>
            <a class="toCart"></a>
          </div>
        </li>
        <li class="goods-item">
          <div class="icon">
            <img src="../assets/goods.png" >
          </div>
          <div class="content">
            <h2 class="name">阳澄湖大闸蟹阳澄湖大闸蟹</h2>
            <p class="desc">肉鲜肥美 苏州直供</p>
            <p class="old-price"><span class="old-attach">&yen;</span>30.5<span class="old-attach">/只</span></p>
            <p class="price"><span class="attach">&yen;</span>25.5<span class="attach">/只</span></p>
            <a class="toCart"></a>
          </div>
        </li>
        <li class="goods-item">
          <div class="icon">
            <img src="../assets/goods.png" >
          </div>
          <div class="content">
            <h2 class="name">阳澄湖大闸蟹阳澄湖大闸蟹</h2>
            <p class="desc">肉鲜肥美 苏州直供</p>
            <p class="old-price"><span class="old-attach">&yen;</span>30.5<span class="old-attach">/只</span></p>
            <p class="price"><span class="attach">&yen;</span>25.5<span class="attach">/只</span></p>
            <a class="toCart"></a>
          </div>
        </li>
        <li class="goods-item">
          <div class="icon">
            <img src="../assets/goods.png" >
          </div>
          <div class="content">
            <h2 class="name">阳澄湖大闸蟹阳澄湖大闸蟹</h2>
            <p class="desc">肉鲜肥美 苏州直供</p>
            <p class="old-price"><span class="old-attach">&yen;</span>30.5<span class="old-attach">/只</span></p>
            <p class="price"><span class="attach">&yen;</span>25.5<span class="attach">/只</span></p>
            <a class="toCart"></a>
          </div>
        </li>
      </ul>
    </div>
</template>
<script>
    export default{}
</script>
<style>
  #home{
    margin-top: 36.5px;
    margin-bottom: 59.5px;
  }
  .goods-item{
    width: 100%;
    height: 168.5px;
    border-bottom: 1px solid #c0d4d5;
  }
  .icon{
    display: inline-block;
    float: left;
    position: relative;
    width: 59.3%;
    height: 147.5px;
    margin:10.5px 4.26666% 10.5px 5.6% ;
  }
  .icon img{
    width: 100%;
    height: 100%;
  }
  .icon .tag{
    display: table;
    position: absolute;
    top: -5px;
    left: -8.5px;
    width: 45.5px;
    height: 45.5px;
    background-image: url("../assets/tag.png");
    background-size: cover;
    color: #fff;
  }
  .icon .tag p{
    display: table-cell;
    vertical-align: middle;
    font-size: 11px;
  }
  .icon .sale-time{
    width: 88.54%;
    height: 20px;
    position: absolute;
    right: 4.5px;
    bottom: 13px;
    background-image: url("../assets/sale-time.png");
    background-size: 100% 100%;
    color: #fff;
  }
  .icon .sale-time p{
    font-size: 12px;
    line-height: 20px;
  }
  .content{
    position: relative;
    width: 29%;
    height: 147.5px;
    margin-top: 10.5px;
    display: inline-block;
    float: left;
    font-size: 0;
  }
  .content .name{
    font-size: 16.5px;
    line-height: 23.5px;
    color: #000;
    margin-bottom: 7.5px;
  }
  .content .desc{
    font-size: 8.5px;
    color: rgba(0,0,0,0.6);
    margin-bottom: 14px;
  }
  .old-price{
    text-decoration: line-through;
    font-size: 11.5px;
    color: rgba(0,0,0,0.6);
    margin-bottom: 6px;
  }
  .old-price .old-attach{
    /*font-size: 9px;*/
    /*color: rgba(0,0,0,0.6);*/
  }
  .price{
    font-size: 14.5px;
    font-weight: bold;
    color: #32ab42;
  }
  .price .attach{
    font-size: 12px;
    color: #32ab42;
  }
  .toCart{
    display: block;
    margin: 0 auto;
    position: absolute;
    left: 50%;
    bottom: 2px;
    transform: translate(-50%,0);
    width: 73.2%;
    height: 24px;
    background: url("../assets/sale.png") no-repeat ;
    background-size: 100% 100%;
  }
  @media screen and (max-width: 320px) {
    .content .name{
      font-size: 14.5px;
      line-height: 18.5px;
      margin-bottom: 5.5px;
    }
  }
</style>
