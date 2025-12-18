// 【ここを編集】不具合データを自由に追加してください
const bugListData = [
    {
        status: "未解決",
        title: "ブラウザバックで進行不能になる",
        description: "プレイ中にブラウザの「戻る」ボタンを押すと、画面が暗転したままになる現象。",
        solution: "【解決策】ページを再読み込み（F5）してください。現在対策プログラムを作成中です。"
    },
    {
        status: "修正済",
        title: "音量設定が保存されない",
        description: "一度設定したBGMの音量が、次回起動時にデフォルトに戻ってしまう。",
        solution: "Ver.1.0.5アップデートで修正しました。現在はブラウザに保存されるようになっています。"
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