// 【ここを編集】不具合データを自由に追加してください
const bugListData = [
    {
        status: "未解決",
        title: "予想スコアが不安定",
        description: "すべてのバージョンで予想スコアがノーツを判定した際に1の位が行き来する。",
        solution: "現在調査中です。原因判明次第修正いたします。"
    },
    {
        status: "修正済",
        title: "譜面のロードが出来ない",
        description: "va1.0.0.27で特定の条件を満たした場合、難易度 LUNATIC や ULTIMATE などの譜面が、誤って BASIC 譜面としてロードされてしまう。",
        solution: "va1.0.0.27A1アップデートで修正しました。"
    },
    {
        status: "修正済",
        title: "オートモードでMISSが判定される",
        description: "v12.0 & 12.1でオートモード時に、判定がすり抜ける。",
        solution: "va1.0.0.24アップデートで修正しました。"
    }
];

function filterBugs(type) {
    const container = document.getElementById('bug-container');
    container.innerHTML = "";

    // ボタンの見た目更新
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.innerText === type);
    });

    const filtered = type === "すべて" ? bugListData : bugListData.filter(b => b.status === type);

    filtered.forEach(bug => {
        const html = `
            <div class="bug-card status-${bug.status}">
                <div class="bug-header">
                    <span class="bug-title">${bug.title}</span>
                    <span class="status-tag">${bug.status}</span>
                </div>
                <div class="bug-desc"><strong>問題点:</strong> ${bug.description}</div>
                <div class="bug-sol"><strong>解決策:</strong> ${bug.solution}</div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', html);
    });
}

// 初期表示

window.onload = () => filterBugs('すべて');
