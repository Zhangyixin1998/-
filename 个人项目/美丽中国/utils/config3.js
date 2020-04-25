const cultures=[
  {
    id:"9",
    name: "中山陵",
    eng: "The Sun Yat-sen Mausoleum",
    show: "/image/zhongshanling.png",
    intro: "中国近代伟大的民主革命先行者孙中山先生的陵寝及其附属纪念建筑群。",
    history: "于1926年春动工，至1929年夏建成",
    location:"中国南京市玄武区紫金山南麓钟山风景名胜区",
    introduction:"中山陵前临平川，背拥青嶂，东毗灵谷寺，西邻明孝陵，整个建筑群依山势而建，由南往北沿中轴线逐渐升高，主要建筑有博爱坊、墓道、陵门、石阶、碑亭、祭堂和墓室等，排列在一条中轴线上，体现了中国传统建筑的风格，从空中往下看，像一座平卧在绿绒毯上的“自由钟”。中山陵建筑融汇中国古代与西方建筑之精华，庄严简朴，别创新格。"
  },
  {
    id:"10",
    name: "兵马俑",
    eng: "Terracotta Army",
    show: "/image/bingmayong.jpg",
    intro: "即秦始皇兵马俑，并被誉为“世界第八大奇迹”。",
    history:"始建于秦代，历时39年",
    location:"中国陕西省西安市临潼区秦始皇陵",
    introduction:"秦始皇陵由丞相李斯依惯例开始主持规划设计，大将章邯监工，修筑时间长达39年之久，兵马俑是修筑秦陵的同时制作并埋入随葬坑内。1974年03月，临潼县骊山镇西杨村农民，在陵东1.5千米的地方打井时，发现几个破碎的用泥土烧制的与真人一样大小的陶俑，经陕西省考古队勘探和试掘，兵马俑重见天日。"
  },
  {
    id:"11",
    name: "布达拉宫",
    eng: "Potala Palace",
    show: "/image/布达拉宫1.jpg",
    intro: "坐落于西藏，是集宫殿、城堡和寺院于一体的宏伟建筑。",
    history:"始建于公元7世纪吐蕃王朝藏王松赞干布时期",
    location:"中国西藏自治区的首府拉萨市区西北玛布日山",
    introduction:"布达拉宫最初为吐蕃王朝赞普松赞干布为迎娶尺尊公主和文成公主而兴建。1645年（清顺治二年）清朝属国和硕特汗国时期护法王固始汗和格鲁派摄政者索南群培重建布达拉宫之后，成为历代达赖喇嘛冬宫居所，以及重大宗教和政治仪式举办地，也是供奉历世达赖喇嘛灵塔之地，旧时与驻藏大臣衙门共为统治中心。1988—1994年再次大规模修缮。"
  },
  {
    id:"12",
    name: "颐和园",
    eng: "The Summer Palace",
    show: "/image/yiheyuan.jpg",
    intro: "坐落在北京西郊，是中国清朝时期皇家园林，被誉为“皇家园林博物馆”。",
    history: "始建于乾隆十五年（1750年）",
    location: "中国北京市海淀区",
    introduction: "清朝乾隆皇帝继位以前，在北京西郊一带，建起了四座大型皇家园林。乾隆十五年（1750年），乾隆皇帝为孝敬其母崇庆皇太后动用448万两白银在这里改建为清漪园，形成了从现清华园到香山长达二十公里的皇家园林区。咸丰十年（1860年），清漪园被英法联军焚毁。光绪十四年（1888年）重建，改称颐和园，作消夏游乐地。光绪二十六年（1900年），颐和园又遭“八国联军”的破坏，珍宝被劫掠一空。清朝灭亡后，颐和园在军阀混战和国民党统治时期，又遭破坏。"
  },
  {
    id:"13",
    name: "莫高窟",
    eng: "Mogao Caves",
    show: "/image/mogaoku.jpg",
    intro: "位于河西走廊西端的敦煌，是世界上现存规模最大、内容最丰富的佛教艺术地。",
    history: "始建于十六国的前秦时期",
    location: "中国甘肃省敦煌",
    introduction: "莫高窟始建于十六国时期，据唐《李克让重修莫高窟佛龛碑》一书的记载，前秦建元二年（366年），僧人乐尊路经此山，忽见金光闪耀，如现万佛，于是便在岩壁上开凿了第一个洞窟。此后法良禅师等又继续在此建洞修禅，称为“漠高窟”，意为“沙漠的高处”。后世因“漠”与“莫”通用，便改称为“莫高窟”。另有一说为：佛家有言，修建佛洞功德无量，莫者，不可能、没有也，莫高窟的意思，就是说没有比修建佛窟更高的修为了。"
  },
  {
    id:"14",
    name: "拙政园",
    eng: "Humble Administrator Garden",
    show: "/image/zhuozhengyuan1.jpg",
    intro: "位于江苏省苏州市,是江南古典园林的代表作品，也是中国四大名园之一。",
    history: "始建于明正德初年（16世纪初）",
    location: "中国江苏省苏州市城东北隅",
    introduction: "拙政园是苏州存在的最大的古典园林，占地78亩（约合5.2公顷）。全园以水为中心，山水萦绕，厅榭精美，花木繁茂，具有浓郁的江南水乡特色。花园分为东、中、西三部分，东花园开阔疏朗，中花园是全园精华所在，西花园建筑精美，各具特色。园南为住宅区，体现典型江南地区传统民居多进的格局。园南还建有苏州园林博物馆，是一座园林专题博物馆。"
  },
  {
    id:"15",
    name: "都江堰",
    eng: "Dujiangyan irrigation system",
    show: "/image/dujiangyan.jpg",
    intro: "位于四川成都，是蜀郡太守李冰父子组织修建的大型水利工程。",
    history: "始建于秦昭王末年（约公元前256～前251）",
    location: "中国四川省成都市都江堰市",
    introduction: "都江堰是蜀郡太守李冰父子在前人鳖灵开凿的基础上组织修建的大型水利工程，由分水鱼嘴、飞沙堰、宝瓶口等部分组成，两千多年来一直发挥着防洪灌溉的作用，使成都平原成为水旱从人、沃野千里的“天府之国”，至今灌区已达30余县市、面积近千万亩，是全世界迄今为止，年代最久、唯一留存、仍在一直使用、以无坝引水为特征的宏大水利工程，凝聚着中国古代劳动人民勤劳、勇敢、智慧的结晶。"
  }
]

//获取景点列表
function getCultureList() {
  let list = [];
  for (var i = 0; i < cultures.length; i++) {
    let obj = {};
    obj.id = cultures[i].id;
    obj.eng = cultures[i].eng;
    obj.name = cultures[i].name;
    obj.show = cultures[i].show;
    obj.intro = cultures[i].intro;
    obj.location = cultures[i].location;
    obj.history = cultures[i].history;
    obj.introduction = cultures[i].introduction;
    list.push(obj);
  }
  return list;
}

//获取景点信息
function getCultureDetail(cultureID) {
  let message = {
    code: '404',
    cultures: {}
  }
  for (var i = 0; i < cultures.length; i++) {
    if (cultureID == cultures[i].id) {
      message.code = '200',
        message.cultures = cultures[i];
      break;
    }
  }
  return message;
}

module.exports = {
  getCultureList: getCultureList,
  getCultureDetail: getCultureDetail
}