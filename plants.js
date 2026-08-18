// 植物数据库 - 这就是你的"数据库"
// 每一个 {} 包裹的就是一种植物的数据
const PLANTS_DATA = [
    // ===== 乔木类 =====
    {
        id: 1,
        name: "银杏树",
        latinName: "Ginkgo biloba",
        alias: "白果树、公孙树",
        category: "乔木",
        family: "银杏科银杏属",
        image: "images/yinxingshu.png",
        description: "银杏树是现存最古老的裸子植物，被誉为植物界的'活化石'，已存在2.7亿年。落叶大乔木，高可达40米。叶扇形，秋季变为金黄色，非常美丽。",
        habits: "喜光，耐寒，适应性强，对土壤要求不严。生长较慢，寿命极长。",
        care: "选择阳光充足的地方种植，浇水见干见湿。秋季落叶后可适当修剪。",
        distribution: "原产中国，现广泛栽培于世界各地。"
    },
    {
        id: 2,
        name: "梧桐树",
        latinName: "Firmiana simplex",
        alias: "青桐、桐麻",
        category: "乔木",
        family: "梧桐科梧桐属",
        image: "images/wutonshu.png",
        description: "梧桐树是中国传统名木，树干挺直，树皮绿色光滑。叶大如掌，夏季开淡黄绿色小花。传说凤凰'非梧桐不栖'。",
        habits: "喜光，喜温暖湿润气候，耐寒性不强。生长较快。",
        care: "适合种植在阳光充足、排水良好的地方。不耐水涝，注意排水。",
        distribution: "原产中国和日本。"
    },
    {
        id: 3,
        name: "樟树",
        latinName: "Cinnamomum camphora",
        alias: "香樟、乌樟",
        category: "乔木",
        family: "樟科樟属",
        image: "images/zhangshu.png",
        description: "樟树是常绿大乔木，全株有樟脑香气。树冠广卵形，是优良的行道树和庭荫树。木材可制作家具和提取樟脑。",
        habits: "喜光，稍耐阴。喜温暖湿润气候，耐寒性不强。对土壤要求不严。",
        care: "喜欢温暖湿润环境，定期浇水保持土壤湿润。注意防治病虫害。",
        distribution: "分布于中国南方及东南亚各国。"
    },
    
    // ===== 灌木类 =====
    {
        id: 4,
        name: "月季花",
        latinName: "Rosa chinensis",
        alias: "月月红、长春花",
        category: "灌木",
        family: "蔷薇科蔷薇属",
        image: "images/yuejihua.png",
        description: "月季花被称为'花中皇后'，四季开花，花色丰富，有红、粉、黄、白等多种颜色。是中国十大名花之一。",
        habits: "喜光，耐寒，适应性强。喜肥沃疏松的土壤。",
        care: "保证每天6小时以上光照。生长期勤浇水，花后及时修剪。",
        distribution: "原产中国，现世界各地广泛栽培。"
    },
    {
        id: 5,
        name: "杜鹃花",
        latinName: "Rhododendron simsii",
        alias: "映山红、山石榴",
        category: "灌木",
        family: "杜鹃花科杜鹃花属",
        image: "images/dujuanhua.png",
        description: "杜鹃花是中国十大名花之一，春季开花，花色艳丽，有红、粉、白等色。满山盛开时非常壮观，故名'映山红'。",
        habits: "喜半阴，忌烈日暴晒。喜酸性土壤，是酸性土壤的指示植物。",
        care: "放在散射光处养护，用酸性土种植。空气干燥时向叶面喷水。",
        distribution: "分布于中国长江流域以南各省。"
    },
    
    // ===== 草本植物类 =====
    {
        id: 6,
        name: "薄荷",
        latinName: "Mentha haplocalyx",
        alias: "银丹草、夜息香",
        category: "草本植物",
        family: "唇形科薄荷属",
        image: "images/bohe.png",
        description: "薄荷是常见的香草植物，全株有清凉香气。叶片可泡茶、做菜、做甜品。有提神醒脑、清热解暑的功效。",
        habits: "喜湿润环境，耐寒，生长迅速。适应性很强。",
        care: "保持土壤湿润，阳光充足或半阴均可。定期修剪促进分枝。",
        distribution: "广泛分布于北半球温带地区。"
    },
    {
        id: 7,
        name: "薰衣草",
        latinName: "Lavandula angustifolia",
        alias: "香水植物",
        category: "草本植物",
        family: "唇形科薰衣草属",
        image: "images/xunyicao.png",
        description: "薰衣草是著名的香草植物，花蓝紫色，有浓郁的芳香。可制作香包、精油，有助眠、舒缓的功效。普罗旺斯薰衣草田世界闻名。",
        habits: "喜阳光，耐旱，耐寒。喜排水良好的沙质土壤。",
        care: "放在阳光充足的地方，少浇水，宁干勿湿。注意排水防涝。",
        distribution: "原产地中海地区，现世界各地均有栽培。"
    },
    
    // ===== 藤本植物类 =====
    {
        id: 8,
        name: "牵牛花",
        latinName: "Pharbitis nil",
        alias: "喇叭花、朝颜",
        category: "藤本植物",
        family: "旋花科牵牛属",
        image: "images/qianniuhua.jpg",
        description: "牵牛花是常见的一年生缠绕草本，花形似喇叭，清晨开放，中午闭合。花色丰富，有蓝、紫、粉、白等色。",
        habits: "喜光，喜温暖湿润环境。适应性强，耐干旱。",
        care: "种植在阳光充足处，提供支架供其攀爬。定期浇水施肥。",
        distribution: "原产热带美洲，现广泛分布于热带和亚热带地区。"
    },
    {
        id: 9,
        name: "绿萝",
        latinName: "Epipremnum aureum",
        alias: "黄金葛、魔鬼藤",
        category: "藤本植物",
        family: "天南星科麒麟叶属",
        image: "images/lvluo.jpg",
        description: "绿萝是最常见的室内观叶植物，叶片翠绿有光泽，可水培可土培。有很强的空气净化能力，能吸收甲醛。",
        habits: "喜温暖湿润半阴环境，忌阳光直射。生命力顽强，遇水即活。",
        care: "放在散射光处，保持土壤湿润。水培的话定期换水。",
        distribution: "原产所罗门群岛，现广泛栽培于世界各地。"
    },
    
    // ===== 多肉植物类 =====
    {
        id: 10,
        name: "仙人掌",
        latinName: "Opuntia dillenii",
        alias: "仙巴掌、霸王树",
        category: "多肉植物",
        family: "仙人掌科仙人掌属",
        image: "images/xianrenzhng.jpg",
        description: "仙人掌是典型的多肉植物，茎肉质化储存水分，叶退化为刺以减少蒸发。生命力极强，耐干旱。",
        habits: "喜阳光，耐干旱，不耐寒。喜排水良好的沙质土壤。",
        care: "放在阳光最好的地方，少浇水，冬天基本不用浇水。",
        distribution: "原产美洲热带、亚热带沙漠地区。"
    }
    
    // ===== 继续往这里加植物，目标200种！=====
    // 复制上面的格式，改 id、名字、分类、介绍...
    // 注意：每一种植物后面加逗号（最后一种不用加）
    
];