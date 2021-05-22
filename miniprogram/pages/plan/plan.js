// pages/plan/plan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    plan: {
      "title": "3日2晚 「开封包公祠开封府开封府」开封府龙亭公园龙亭公园",
      "charge": 12.0,
      "labels": ["经济游", "身临其境", "自然美景", "古风古韵", "历史文化"],
      "planItems": [{
        "id": 0,
        "time": "morning",
        "attractions": [{
          "id": 6,
          "name": "开封府",
          "type": "古建筑",
          "level": "国家AAAA级旅游景区",
          "phone": "0371-23963159;0371-23983319",
          "images": "",
          "rating": 2,
          "website": "",
          "latitude": "34.78981",
          "playtime": "2-3小时",
          "longitude": "114.34703",
          "priceInfo": "成人票价65元，学生票价32元",
          "introduction": "·开封府又称南衙，是北宋京都官吏行政、司法的衙署，被誉为天下首府。\n·历代的官府中，规模最为宏大，相当于今天的北京市政府。\n·建筑气势恢弘，与三池湖水相衬，形成“东府西祠，楼阁碧水”的景观。\n·除大批珍贵史料和陈展外，还可欣赏“开衙仪式”、“包公断案”、“喷火变脸”等表演。",
          "opentimeInfo": "全年（春、夏、秋） 07:30-19:00；全年（冬） 07:30-17:30",
          "locationDetail": "河南省开封市包公东湖北岸"
        }, {
          "id": 37,
          "name": "开封东大寺",
          "type": "历史文化景观",
          "level": "",
          "phone": "0371-23810013",
          "images": "",
          "rating": 33,
          "website": "http://www.kfu.edu.cn/",
          "latitude": "34.793991",
          "playtime": "3小时以上",
          "longitude": "114.36466",
          "priceInfo": "免费",
          "introduction": "河南规模较大的清真寺，俗称东大寺。始建于明代，清道光二十六年（1846年）重修。明代规模宏大，至清末衰落。今寺朝东，三进院落。大门面阔五间，三明二暗，门楣悬挂“回族东大寺”匾，左右为廊房。右廊房内现存明代阿拉伯文《可兰经》石碑及清康熙年重修寺碑。",
          "opentimeInfo": "全天",
          "locationDetail": "河南省开封市顺河回族区东大寺门路南"
        }]
      }, {
        "id": 1,
        "time": "afternoon",
        "attractions": [{
          "id": 8,
          "name": "龙亭公园",
          "type": "主题公园",
          "level": "AAAA级",
          "phone": "0371—25660142",
          "images": "",
          "rating": 4,
          "website": "http://longting.kf.cn/",
          "latitude": "34.806352",
          "playtime": "1-2小时",
          "longitude": "114.352206",
          "priceInfo": "50.00元（每年10月菊花会55.00元）",
          "introduction": "·位于开封市中山路北端，按清万寿宫布局而建的古建筑群体\n·曾是北宋皇城所在地，可在石栏前眺望开封古城景色，入殿可观看殿内陈列的文物。\n·是闻名中外的赏菊胜地，每年金秋时节会举行菊花会，届时公园气势辉煌，上千种菊花在这里争奇斗艳。",
          "opentimeInfo": "夏令：8:30-18:30、冬令：9:00-1600",
          "locationDetail": "河南省开封市鼓楼区中山路北段"
        }, {
          "id": 42,
          "name": "黄河湾风景区",
          "type": "自然景观",
          "level": "",
          "phone": "",
          "images": "",
          "rating": 38,
          "website": "",
          "latitude": "34.92087",
          "playtime": "2-3小时",
          "longitude": "114.783446",
          "priceInfo": "免费",
          "introduction": "黄河湾风景区位于河南省直辖县兰考县西北部的东坝头乡，距县城10公里。这里是九曲黄河最后一弯。历史上黄河多次在黄河湾决口，在黄河大堤内形成了多处沙丘沙岗、滩涂湿地、岛屿沙湾。因毛主席曾到此视察，受到当地政府重视，开始大规模建设，昔日荒滩变绿洲，现已建成风景区，修建有毛主席视察黄河纪念亭。",
          "opentimeInfo": "",
          "locationDetail": "河南省开封市兰考县东坝头黄河湾风景区"
        }]
      }, {
        "id": 2,
        "time": "morning",
        "attractions": [{
          "id": 9,
          "name": "铁塔公园",
          "type": "主题公园",
          "level": "AAAA级",
          "phone": "0371-22826629;0371-22826659",
          "images": "",
          "rating": 5,
          "website": "",
          "latitude": "34.816331",
          "playtime": "2-3小时",
          "longitude": "114.37032",
          "priceInfo": "50元/人，学生和现役军人凭有效证件25元",
          "introduction": "铁塔公园是以现存的铁塔（开宝寺塔）而命名的名胜古迹公园，占地面积51.24公顷，是中国100家名园之一、国家AAAA级旅游景区。\n铁塔素有“天下第一塔”的美称，建于公元1049年，塔高55.88米，八角十三层，因遍体通彻褐色琉璃砖，混似铁铸，称铁塔。\n铁塔建成九百多年来，历经战火、水患、地震等灾害，至今巍然屹立，实为游人和建筑专家叹为观止。\n铁塔公园内遍布数十个景点，其中新开的铁塔光影秀，吸引了众多游客驻足观赏。",
          "opentimeInfo": "冬春 8:00-18:00，夏秋 7:30-18:30",
          "locationDetail": "河南省开封市顺河回族区北门大街210号"
        }]
      }, {
        "id": 3,
        "time": "afternoon",
        "attractions": [{
          "id": 11,
          "name": "开封包公祠",
          "type": "古建筑",
          "level": "AAAA级",
          "phone": "0371-23931595",
          "images": "",
          "rating": 7,
          "website": "",
          "latitude": "34.792945",
          "playtime": "1-2小时",
          "longitude": "114.339121",
          "priceInfo": "30.00元",
          "introduction": "包公祠是为纪念中国古代著名清官、政治改革家包拯而恢复重建的，其座落在河南省开封市包公湖西畔，是国家旅游局开发建设的中原旅游区的重要景点之一。\n包公祠由大殿、二殿、东西配殿、半壁廊、碑亭组成，风格古朴，庄严肃穆。东侧为灵石苑，由石雕、水榭构成，典雅别致。祠内陈展有包公铜像，龙、虎、狗铜铡，包公断案蜡像、《开封府题名记碑》、包公正史演义、包公的出仕明志诗、开封府题名记碑、包公家训、包公书法手迹、墓志铭等文物史料。",
          "opentimeInfo": "4月1日-10月31日 07:00-19:00(最晚入园18:30)；11月1日-次年3月31日 07:30-18:30(最晚入园18:00)",
          "locationDetail": "中国河南省开封市向阳路1号"
        }]
      }, {
        "id": 4,
        "time": "morning",
        "attractions": [{
          "id": 16,
          "name": "山陕甘会馆",
          "type": "古建筑",
          "level": "第五批全国重点文物保护单位",
          "phone": "0371-25957411",
          "images": "",
          "rating": 12,
          "website": "",
          "latitude": "34.797408",
          "playtime": "1-2小时",
          "longitude": "114.3533",
          "priceInfo": "25元",
          "introduction": "山陕甘会馆位于开封市中心偏北，坐落在明代中山王徐达后裔的府第旧址上，以砖、石、木雕艺术的“三绝”誉冠中原，是河南省明清时期建筑艺术的代表作。山陕甘会馆距今已有200多年的历史，旧称山陕会馆，清光绪末年改今名。进入会馆，迎面是戏楼。戏楼又称歌楼，旧时每逢节日、祭祀、还愿、祝寿等活动，这里均有精彩演出。 最值得一提的就是馆内的雕刻和丹青，馆内遍布各种各样的木雕、石雕、砖雕等，将佛教故事、传奇人物雕制得惟妙惟肖，生动逼真，是我国雕刻艺术中的珍品，而各色的丹青彩绘极具民族特色，艺术价值不菲。",
          "opentimeInfo": "1月1日-12月31日 09:00-16:00",
          "locationDetail": "河南省开封市龙亭区徐府街85号"
        }]
      }, {
        "id": 5,
        "time": "afternoon",
        "attractions": [{
          "id": 23,
          "name": "禹王台",
          "type": "主题公园",
          "level": "第二批河南省文物保护单位",
          "phone": "0371-22231255",
          "images": "",
          "rating": 19,
          "website": "http://www.kfyuwangtai.com/",
          "latitude": "34.769444",
          "playtime": "1-3小时",
          "longitude": "114.369515",
          "priceInfo": "10元",
          "introduction": "禹王台又叫 “古吹台”，相传春秋时期，晋国大音乐家师旷曾在此吹奏乐曲，故后人称此台为“吹台”。明初，为怀念大禹治水的功绩，在台上建禹王庙，吹台被改称为禹王台。如今这里已被辟为公园，除了文物古迹，公园内还有辛亥革命烈士纪念园、牡丹园、中日友好樱花园、芳春园等游览区。禹王台公园西门出可直接到达参观繁塔。",
          "opentimeInfo": "06:30-17:00(夏季),07:00-17:30(冬季) (1月1日-12月31日 周一-周日)",
          "locationDetail": "河南省开封市禹王台区繁塔东路东一街38号"
        }]
      }],
      "snackList": [{
        "id": 14,
        "name": "袁记串串香",
        "label": "串串香",
        "rating": 14,
        "latitude": 34.8015,
        "position": "龙亭区黄河大街中段66号",
        "longitude": 114.329,
        "seasonSale": 1021,
        "averageSpend": 35
      }, {
        "id": 5,
        "name": "围辣串串香",
        "label": "串串香",
        "rating": 5,
        "latitude": 32.6855,
        "position": "龙亭区星光天地（B馆负一楼永辉超市北门入口蜜雪冰城南隔壁",
        "longitude": 112.128,
        "seasonSale": 1421,
        "averageSpend": 15
      }, {
        "id": 2,
        "name": "贵妃嘻糖",
        "label": "老北京小吃",
        "rating": 2,
        "latitude": 34.5533,
        "position": "龙亭区郑开大道万达广场四楼（巴奴对面",
        "longitude": 105.902,
        "seasonSale": 2126,
        "averageSpend": 15
      }, {
        "id": 3,
        "name": "柳螺鲜",
        "label": "螺狮粉",
        "rating": 3,
        "latitude": 22.8756,
        "position": "鼓楼区中山路中段92号寺后街与中山路交叉口向南50米路东",
        "longitude": 108.368,
        "seasonSale": 1878,
        "averageSpend": 15
      }, {
        "id": 17,
        "name": "胡涂串串老火锅",
        "label": "串串香",
        "rating": 17,
        "latitude": 34.8021,
        "position": "龙亭区晋安路18号",
        "longitude": 114.333,
        "seasonSale": 952,
        "averageSpend": 41
      }, {
        "id": 14,
        "name": "袁记串串香",
        "label": "串串香",
        "rating": 14,
        "latitude": 34.8015,
        "position": "龙亭区黄河大街中段66号",
        "longitude": 114.329,
        "seasonSale": 1021,
        "averageSpend": 35
      }],
      "finalHotel": {
        "$ref": "$.candidateHotels[0]"
      },
      "timeConsuming": 3.0,
      "candidateHotels": [{
        "id": 9,
        "name": "Tl酒店式民宿",
        "sale": "5000+",
        "type": "经济型",
        "rating": 5.0,
        "latitude": 34.7967,
        "position": "徐府街鼓楼新天地12号楼3层",
        "longitude": 114.354,
        "doubleRoomPrice": 95,
        "familyRoomPrice": 0,
        "standardRoomPrice": 105
      }, {
        "id": 11,
        "name": "贝壳酒店",
        "sale": "5000+",
        "type": "经济型",
        "rating": 5.0,
        "latitude": 34.7938,
        "position": "鼓楼街综合楼68号",
        "longitude": 114.359,
        "doubleRoomPrice": 159,
        "familyRoomPrice": 199,
        "standardRoomPrice": 167
      }, {
        "id": 35,
        "name": "开封开元名都大酒店",
        "sale": "5000+",
        "type": "五星级",
        "rating": 4.8,
        "latitude": 34.8017,
        "position": "郑开大道东1号",
        "longitude": 114.299,
        "doubleRoomPrice": 658,
        "familyRoomPrice": 0,
        "standardRoomPrice": 726
      }, {
        "id": 36,
        "name": "开封中州国际饭店",
        "sale": "5000+",
        "type": "五星级",
        "rating": 4.7,
        "latitude": 34.8006,
        "position": "大梁路121号",
        "longitude": 114.31,
        "doubleRoomPrice": 405,
        "familyRoomPrice": 0,
        "standardRoomPrice": 507
      }]
    },
    steps: [],
    stepActive: 0,
    attractionsImg: [],
    hotelImg: [],
    snackImg: [],
    hotelIndex: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取plan

    // 获取plan之后对plan进行操作，提取steps
    var tmpStep = new Array()
    var stepItem = {
      text: "",
      desc: ""
    }
    for (let index = 0; index < this.data.plan.planItems.length; index++) {
      const planItem = this.data.plan.planItems[index];
      stepItem = {}
      // 生成当前小计划的标题
      stepItem.text = '第' + (index + 1) + '晌'
      const attractions = planItem.attractions
      // 生成当前小计划的说明性文字
      stepItem.desc = ""
      for (let _index = 0; _index < attractions.length; _index++) {
        const attraction = attractions[_index];
        stepItem.desc = stepItem.desc + attraction.name + " "
      }
      stepItem.desc += this.data.plan.snackList[index].name
      tmpStep[index] = stepItem
    }
    this.setData({
      steps: tmpStep
    })
    // 生成景点的图片信息
    var attractionImg = []
    for (let index = 0; index < this.data.plan.planItems.length; index++) {
      const planItem = this.data.plan.planItems[index];
      var attractionImgItem = []
      for (let _idnex = 0; _idnex < planItem.attractions.length; _idnex++) {
        const attraction = planItem.attractions[_idnex];
        attractionImgItem[_idnex] = this.transforImgUrl(attraction.name, "attraction")
      }
      attractionImg[index] = attractionImgItem
    }
    this.setData({
      attractionsImg: attractionImg
    })
    // 生成酒店的图片信息
    var hotelImg = []
    var element = this.data.plan.candidateHotels[this.data.hotelIndex];
    for (let index = 0; index < 2; index++) {
      var url = this.transforImgUrl(element.name, "hotel")
      url = url.replace(/1.jpg/i, (index+1) + ".jpg")
      hotelImg[index] = url
    }
    this.setData({
      hotelImg: hotelImg
    })
    console.log(this.data.hotelImg)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  test: function (para) {
    console.log(para.target.dataset);
    var latitude = para.target.dataset.latitude
    var longitude = para.target.dataset.longitude
    var name = para.target.dataset.name
    let plugin = requirePlugin('routePlan');
    let key = '57CBZ-JHVRS-LDNO6-6KI3P-JV25O-EDBCB'; //使用在腾讯位置服务申请的key
    let referer = 'travel'; //调用插件的app的名称
    let endPoint = JSON.stringify({ //终点
      'name': name,
      'latitude': latitude,
      'longitude': longitude
    });
    wx.navigateTo({
      url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint + '&mode=transit'
    });
  },
  next() {
    var num = this.data.stepActive
    // console.log(num)
    if (num == this.data.plan.planItems.length - 1) {

    } else {
      num++;
      this.setData({
        stepActive: num
      })
    }
  },
  pre() {
    var num = this.data.stepActive
    if (num == 0) {
      // 如果当前激活状态是第一个，点击上一步就什么也不做
    } else {
      num--;
      this.setData({
        stepActive: num
      })
    }
  },
  /**
   * 获取酒店、景点或小吃的图片地址
   * @param {String} name 酒店或景点或小吃的名字
   * @param {String} type name的类型，取值为：hotel/attraction/snack
   */
  transforImgUrl(name, type) {
    // 获取景点或酒店或小吃的景点信息
    var content = ''
    switch (type) {
      case "hotel":
        content = "hotel-" + name + "1.jpg"
        break;
      case "attraction":
        content = name + "1.jpg"
        break;
      case "snack":
        content = "snack-" + name + "1.jpg";
        break;
      default:
        break;
    }
    return 'http://localhost:80/travel/images/' + content;
  },
  goback() {
    wx.switchTab({
      url: '/pages/index/index'
    })
  }
})