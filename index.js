//同ディレクトリ内のindex.htmlのためのjsファイル
console.log("ok");
let i = 0;
while (i < 1) {
    alert("あなたのPCはウィルスに感染しました。即座にNMまで¥500支払え");
    i++;
}

let message = "NMに毎月¥1,253をを支払うように。";

const kure = () => {
    if (confirm(message)) {
        alert("電話番号から銀行口座を参照し、\n引き落としを開始します。");
    } else {
        kure();
    }
}
kure();