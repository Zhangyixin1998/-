

  const cities = [
    {
      id: "1", thumb: "/image/beijing1.jpg", adthumb: "/image/beijing2.jpg", show: "/image/beijing4.jpg", name: "北京 Beijing", intro: "北京，简称“京”，古称燕京、北平，是中华人民共和国首都、省级行政区、直辖市、国家中心城市、超大城市，国务院批复确定的中国政治中心、文化中心、国际交往中心、科技创新中心北京的气候为典型的暖温带半湿润大陆性季风气候，夏季高温多雨，冬季寒冷干燥，春、秋短促。", location: "中国北京市，东经116°20′、北纬39°56′。", spots: "天安门广场、故宫、圆明园、明十三陵、八达岭长城等。"
    },
    {
      id:"2", thumb: "/image/chengdu1.jpg", adthumb: "/image/chengdu2.jpg", show: "/image/chengdu4.jpg", name: "成都 Chengdu", intro: "成都是国家历史文化名城，古蜀文明发祥地。境内金沙遗址有3000年历史，周太王以“一年成邑，二年成都”，故名成都；先后有7个割据政权在此建都；一直是各朝代的州、郡治所；汉为全国五大都会之一；唐为中国最发达的工商业城市之一，史称“扬一益二”；北宋是汴京以外的第二大都会，发明了世界上第一种纸币交子。", location: "中国四川省，东经102°54′~104°53′、北纬30°05′~31°26′。", spots: "都江堰、青城山、武侯祠、杜甫草堂、宽窄巷子、文殊院等。"
    },
    {
      id:"3", thumb: "/image/xizang1.png", adthumb: "/image/xizang3.jpg", show: "/image/xizang2.jpg", name: "拉萨 Lhasa", intro: "拉萨地处中国西南地区、西藏高原中部、喜马拉雅山脉北侧,是西藏的政治、经济、文化和科教中心，也是藏传佛教圣地。海拔3650米，全年多晴朗天气，降雨稀少，冬无严寒，夏无酷暑，气候宜人。全年日照时间在3000小时以上，素有“日光城”的美誉。", location: "中国西藏自治区，东经91°06′，北纬29°36′。", spots: "布达拉宫、大昭寺、小昭寺、罗布林卡、药王山等。"
    },
    {
      id: "4", thumb: "/image/nanjing3.jpg", name: "南京 Nanjing", show: "/image/nanjing4.jpg", intro: "南京是首批国家历史文化名城，中华文明的重要发祥地，长期是中国南方的政治、经济、文化中心，历史上曾数次庇佑华夏之正朔，在中国历史上具有特殊地位和价值。南京有着7000多年文明史、近2600年建城史和近500年的建都史，有“六朝古都”、“十朝都会”之称。", location: "中国江苏省，北纬31°14'~32°37'，东经118°22'~119°14'。", spots: "玄武湖、中山陵、明孝陵、紫金山、夫子庙、鸡鸣湖等。"
    },
    {
      id: "5", "thumb": "/image/guilin2.jpg", name: "桂林 Guilin", show: "/image/guilin3.jpg", intro: "桂林，简称桂，是世界著名风景游览城市、万年智慧圣地，自古以来就有山水甲天下美誉，拥有世界自然遗产桂林山水、世界灌溉遗产灵渠，甑皮岩是桂林向世界展现中华民族“万年智慧”的历史文化名片。", location: "中国广西壮族自治区，东经109°36′50″~111°29′30″，北纬24°15′23″~6°23′30″。", spots: "象鼻山、漓江、灵渠、靖江王城、会仙湿地等。"
    },
    {
      id: "6", thumb: "/image/suzhou1.png", name: "苏州 Suzhou", show: "/image/suzhou3.jpg", intro: "苏州是首批国家历史文化名城之一，有近2500年历史，是吴文化的发祥地之一、清代“天下四聚”之一，有“人间天堂”的美誉。中国私家园林的代表——苏州古典园林和中国大运河苏州段被联合国教科文组织列为世界文化遗产。", location: "中国江苏省，东经119°55′～121°20′，北纬30°47′～32°02′。", spots: "狮子林、拙政园、沧浪亭、周庄、金鸡湖、寒山寺等。"
    },
    {
      id: "7", thumb: "/image/xian1.jpg", name: "西安 Xi'an", show: "/image/xian3.jpg", intro: "西安地处中国西北地区、关中平原中部、北濒渭河、南依秦岭，八水润长安，是中华文明和中华民族重要发祥地之一，丝绸之路的起点，历史上先后有十多个王朝在此建都，地处联合国教科文组织于1981年确定的“世界历史名城”。", location: "中国陕西省，东经107°40'～109°49'，北纬33°42'～34°45'。", spots: "兵马俑、钟鼓楼、大雁塔、大明宫、未央宫等。"
    },
    {
      id: "8", thumb: "/image/shanghai2.jpg", name: "上海 Shanghai", show: "/image/shanghai1.jpg", intro: "上海地处中国东部、长江入海口、东临东海，北、西与江苏、浙江两省相接，是国家物流枢纽。四、五世纪晋朝时期，因渔民创造捕鱼工具“扈”，江流入海处称“渎”，因此松江下游一带称为“扈渎”，以后又改“沪”，故上海简称“沪”。", location: "中国上海市，东经120°52′-122°12′，北纬30°40′-31°53′。", spots: "静安寺、城隍庙、宋庆龄故居，鲁迅故居，迪士尼乐园等。"
    }
  ]

  //获取城市列表
  function getCityList() {
    let list = [];
    for (var i = 0; i < cities.length; i++) {
      let obj = {};
      obj.id = cities[i].id;
      obj.thumb = cities[i].thumb;
      obj.name = cities[i].name;
      obj.show = cities[i].show;
      obj.intro = cities[i].intro;
      obj.location = cities[i].location;
      obj.spots = cities[i].spots;
      list.push(obj);
    }
    return list;
  }

  //获取城市信息
  function getCityDetail(cityID) {
    let message = {
      code: '404',
      cities: {}
    }
    for (var i = 0; i < cities.length; i++) {
      if (cityID == cities[i].id) {
        message.code = '200',
          message.cities = cities[i];
        break;
      }
    }
    return message;
  }

  module.exports = {
    getCityList: getCityList,
    getCityDetail: getCityDetail
  }