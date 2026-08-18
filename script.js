// 当前页面
let currentPage = 'home';
let currentCategory = '';

// 切换底部导航页面
function switchPage(page) {
    // 隐藏所有页面
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    // 显示目标页面
    document.getElementById(page + '-page').classList.add('active');
    
    // 更新导航高亮
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    event.currentTarget.classList.add('active');
    
    currentPage = page;
    
    // 如果切到科普页，显示全部植物
    if (page === 'science') {
        renderPlants(PLANTS_DATA);
    }
}

// 显示某个分类的植物
function showCategory(category) {
    currentCategory = category;
    // 切到科普页
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('science-page').classList.add('active');
    
    // 更新导航高亮
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    document.querySelectorAll('.nav-item')[1].classList.add('active');
    
    // 筛选该分类植物
    const filtered = PLANTS_DATA.filter(p => p.category === category);
    renderPlants(filtered);
    
    // 滚动到顶部
    window.scrollTo(0, 0);
}

// 渲染植物列表
function renderPlants(plants) {
    const container = document.getElementById('plant-list');
    
    if (plants.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:#999; padding:40px;">没有找到相关植物～</p>';
        return;
    }
    
    container.innerHTML = plants.map(plant => `
        <div class="plant-card" onclick="showPlantDetail(${plant.id})">
            <img src="${plant.image}" alt="${plant.name}" onerror="this.src='https://via.placeholder.com/300x200/52b788/ffffff?text=${plant.name}'">
            <div class="plant-info">
                <div class="plant-name">${plant.name}</div>
                <div class="plant-category">${plant.category}</div>
            </div>
        </div>
    `).join('');
}

// 搜索植物
function searchPlants() {
    const keyword = document.getElementById('searchInput').value.trim();
    
    if (!keyword) {
        alert('请输入要搜索的植物名称～');
        return;
    }
    
    // 切到科普页
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('science-page').classList.add('active');
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    document.querySelectorAll('.nav-item')[1].classList.add('active');
    
    // 搜索匹配（名称、别名、学名都能搜）
    const results = PLANTS_DATA.filter(plant => 
        plant.name.includes(keyword) ||
        (plant.alias && plant.alias.includes(keyword)) ||
        (plant.latinName && plant.latinName.toLowerCase().includes(keyword.toLowerCase()))
    );
    
    renderPlants(results);
}

// 回车搜索
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchPlants();
    }
});

// 显示植物详情
function showPlantDetail(id) {
    const plant = PLANTS_DATA.find(p => p.id === id);
    if (!plant) return;
    
    const detailContent = document.getElementById('detail-content');
    detailContent.innerHTML = `
        <img class="detail-image" src="${plant.image}" alt="${plant.name}" onerror="this.src='https://via.placeholder.com/500x300/52b788/ffffff?text=${plant.name}'">
        <h2 class="detail-name">${plant.name}</h2>
        <p class="detail-latin">${plant.latinName || ''} ${plant.alias ? '（别名：' + plant.alias + '）' : ''}</p>
        
        <div class="detail-section">
            <h4>📋 基本信息</h4>
            <p>分类：${plant.category}</p>
            <p>科属：${plant.family || '暂无资料'}</p>
        </div>
        
        <div class="detail-section">
            <h4>📝 植物介绍</h4>
            <p>${plant.description || '暂无详细介绍'}</p>
        </div>
        
        <div class="detail-section">
            <h4>🌿 生长习性</h4>
            <p>${plant.habits || '暂无资料'}</p>
        </div>
        
        <div class="detail-section">
            <h4>💡 养护要点</h4>
            <p>${plant.care || '暂无资料'}</p>
        </div>
        
        <div class="detail-section">
            <h4>🌍 分布范围</h4>
            <p>${plant.distribution || '暂无资料'}</p>
        </div>
    `;
    
    document.getElementById('plant-detail').classList.add('show');
}

// 关闭弹窗
function closeModal(event) {
    if (!event || event.target.id === 'plant-detail') {
        document.getElementById('plant-detail').classList.remove('show');
    }
}

// 页面加载完成后
document.addEventListener('DOMContentLoaded', function() {
    console.log('绿植百科网站加载成功！共 ' + PLANTS_DATA.length + ' 种植物');
});