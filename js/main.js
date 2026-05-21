let currentCategory = 'aerobic';
let currentGender = 'male';
let currentEquipment = 'bodyweight';
let currentPart = null;
let currentAerobicType = 'running';
let currentFunctionalType = 'jump';

function getVideoUrl(bvid) {
    return `https://player.bilibili.com/player.html?bvid=${bvid}&page=1&autoplay=0&high_quality=1`;
}

function switchCategory(category) {
    currentCategory = category;
    
    document.querySelectorAll('.category-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    
    document.querySelectorAll('.category-section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(`${category}-section`).style.display = 'block';
}

function switchGender(gender) {
    currentGender = gender;
    
    document.getElementById('gender-text').textContent = gender === 'male' ? '男性' : '女性';
    document.getElementById('tag-gender').textContent = gender === 'male' ? '男性' : '女性';
    
    const maleBody = document.getElementById('male-body');
    const femaleBody = document.getElementById('female-body');
    
    if (gender === 'male') {
        maleBody.style.display = 'block';
        femaleBody.style.display = 'none';
    } else {
        maleBody.style.display = 'none';
        femaleBody.style.display = 'block';
    }
    
    if (currentPart) {
        updateAnaerobicVideo();
    }
}

function switchEquipment(equipment) {
    currentEquipment = equipment;
    document.getElementById('tag-equipment').textContent = equipmentNames[equipment];
    
    if (currentPart) {
        updateAnaerobicVideo();
    }
}

function showAnaerobicVideo(part) {
    currentPart = part;
    
    document.getElementById('tag-part').textContent = partNames[part];
    
    document.getElementById('video-placeholder').style.display = 'none';
    const videoContent = document.getElementById('video-content');
    videoContent.style.display = 'block';
    videoContent.classList.remove('fade-in');
    void videoContent.offsetWidth;
    videoContent.classList.add('fade-in');
    
    updateAnaerobicVideo();
}

function updateAnaerobicVideo() {
    if (!currentPart) return;
    
    try {
        const data = videoData[currentGender][currentEquipment][currentPart];
        
        document.getElementById('part-title').textContent = data.name;
        document.getElementById('video-frame').src = getVideoUrl(data.bvid);
        
        const tipsList = document.getElementById('tips-list');
        tipsList.innerHTML = data.tips.map(tip => `<li>${tip}</li>`).join('');
    } catch (e) {
        console.error('Video data not found', e);
    }
}

function switchAerobicType(type) {
    currentAerobicType = type;
    
    document.getElementById('aerobic-tag-type').textContent = aerobicNames[type];
    
    document.getElementById('aerobic-placeholder').style.display = 'none';
    const content = document.getElementById('aerobic-content');
    content.style.display = 'block';
    content.classList.remove('fade-in');
    void content.offsetWidth;
    content.classList.add('fade-in');
    
    updateAerobicVideo();
}

function updateAerobicVideo() {
    try {
        const data = aerobicData[currentAerobicType];
        
        document.getElementById('aerobic-title').textContent = data.name;
        document.getElementById('aerobic-frame').src = getVideoUrl(data.bvid);
        
        const tipsList = document.getElementById('aerobic-tips-list');
        tipsList.innerHTML = data.tips.map(tip => `<li>${tip}</li>`).join('');
    } catch (e) {
        console.error('Aerobic video data not found', e);
    }
}

function switchFunctionalType(type) {
    currentFunctionalType = type;
    
    document.getElementById('functional-tag-type').textContent = functionalNames[type];
    
    document.getElementById('functional-placeholder').style.display = 'none';
    const content = document.getElementById('functional-content');
    content.style.display = 'block';
    content.classList.remove('fade-in');
    void content.offsetWidth;
    content.classList.add('fade-in');
    
    updateFunctionalVideo();
}

function updateFunctionalVideo() {
    try {
        const data = functionalData[currentFunctionalType];
        
        document.getElementById('functional-title').textContent = data.name;
        document.getElementById('functional-frame').src = getVideoUrl(data.bvid);
        
        const tipsList = document.getElementById('functional-tips-list');
        tipsList.innerHTML = data.tips.map(tip => `<li>${tip}</li>`).join('');
    } catch (e) {
        console.error('Functional video data not found', e);
    }
}

function setupBodyPartClicks() {
    document.querySelectorAll('.body-part').forEach(part => {
        part.addEventListener('click', function() {
            document.querySelectorAll('.body-part').forEach(p => p.classList.remove('active'));
            
            const partName = this.dataset.part;
            document.querySelectorAll(`[data-part="${partName}"]`).forEach(p => p.classList.add('active'));
            
            showAnaerobicVideo(partName);
        });
    });
}

function initEventListeners() {
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            switchCategory(this.dataset.category);
        });
    });

    document.querySelectorAll('.gender-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.gender-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            switchGender(this.dataset.gender);
        });
    });

    document.querySelectorAll('.equipment-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.equipment-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            switchEquipment(this.dataset.equipment);
        });
    });

    document.querySelectorAll('.aerobic-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.aerobic-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            switchAerobicType(this.dataset.type);
        });
    });

    document.querySelectorAll('.functional-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.functional-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            switchFunctionalType(this.dataset.type);
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    setupBodyPartClicks();
    initEventListeners();
});
