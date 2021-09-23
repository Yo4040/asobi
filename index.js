//同ディレクトリ内のindex.htmlのためのjsファイル
console.log("ok");

let message = "あなたの端末はウィルスに感染しました。\nNMに毎月¥1,253をを支払いなさい";

const kure = () => {
    if (confirm(message)) {
        alert("電話番号から銀行口座を参照し、\n引き落としを開始します。");
    } else {
        kure();
    }
}
kure();