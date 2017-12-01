<template>
  <div class='neihan articles t-item content'>
    <div class='neihan-wrapper'>
      <ul>
        <li v-for='(item,index) in neihanList' class='d-list'>
          <article>
            <section class='avatar'>
              <div class='ui-avatar'>
                <img :src='item.group.user.avatar_url' alt='头像'>
              </div>
              <div class='avatar-name'>
                <h4 v-html='item.group.user.name'></h4>
              </div>
              <div class='info'>
                <div class='index-info'>{{index}}</div>
              </div>
            </section>
            <section class='desc'>
              <p>{{item.group.content}}</p>
            </section>
            <div class='icon-wrapper'>
              <span class='icon-thumbs-up'>&nbsp;{{item.group.digg_count}}</span>
              <span class='icon-thumbs-down'>&nbsp;{{item.group.bury_count}}</span>
              <span class='icon-bubbles'>&nbsp;{{item.group.comment_count}}</span>
              <span class='icon-content_copy' @click="copy(item.group.content)">&nbsp;复制</span>
            </div>
          </article>
          <div @click='more' v-if='index===neihanList.length-1' class='more'>加载更多。。。</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
  import {getNeihan} from 'api/neihan';
  import {MESSAGE} from 'api/config';

  //  const minDigg_count = 10000;
  export default {
    data() {
      return {
        neihanList: []
      };
    },
    created() {
      this.getNeihan();
    },
    methods: {
      getNeihan() {
        getNeihan().then((data) => {
          if (data.message === MESSAGE) {
            let originList = data.data.data;
            this.neihanList = this.neihanList.concat(originList.filter((item, index) => {
              return item.group.comment_count > 100;
            }));
            let filterList = [];
            originList.forEach(function (item) {
              filterList.push(item.group.content);
            });
            console.log(filterList);
          }
          console.log(data);
          console.log(this.neihanList);
        })
        ;
      },
      more() {
        this.getNeihan();
      },
      copy(item) {
        console.log(item);
        item.select();
        document.execCommand('Copy');
        alert('已复制好，可贴粘。');
      }
    }
  }
  ;
</script>

<style lang='stylus' type='text/stylus' scoped>
  @import '~common/stylus/variable';
  .content
    margin: 0 auto;
    overflow: hidden;
    color #262829
    background #fff
    font-size $font-size-large-x
    .d-list
      border-bottom: 10px solid #ececec
      position relative
      article
        padding: 0 10px;
        height: 100%;
        margin: 0;
        outline: 0;
        .avatar
          display: -webkit-box;
          width 100%
          float left
          .ui-avatar
            touch-action: pan-y;
            user-select: none;
            -webkit-user-drag: none;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            line-height: 40px;
            overflow: hidden;
            -webkit-border-radius: 200px;
            margin: 5px 8px 5px 5px;
            width: 32px;
            height: 32px;
            img
              width 100%
              height 100%
          .avatar-name
            -webkit-box-flex: 1;
            box-flex: 1;
            padding-right: 20px;
            display: box;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-box-pack: center;
            h4
              text-overflow: ellipsis;
              overflow: hidden;
              max-width: 100%;
              white-space: nowrap;
              font-size: 13px;
              color: #898989;
              line-height: 22px
          .info
            height 100%
            padding 5px
            .index-info
              font-size 14px
              line-height 100%
        .desc
          width: 100%;
          padding: 8px 0;
          p
            text-indent 2em
            font-size: 16px;
            line-height: 140%;
            color: #262829
        .icon-wrapper
          color #262829
          width: 100%;
          height: 44px;
          line-height: 44px;
          display flex
          span
            text-align center
            line-height 44px
            font-size 14px
            flex 1
      .more
        font-size 14px
        color #262829
        text-align center
        width 100%
</style>