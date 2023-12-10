
//現在時刻を取得
function getNowTime() {
    nowTime = new Date().getTime();
    return nowTime;
}

//経過時間を計算
function calcElapsedTime(start, end) {
    const elapsedMilliseconds = end - start;
    const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
    const elapsedMinutes = Math.floor(elapsedSeconds / 60);
    const remainingSeconds = elapsedSeconds % 60;
    return `経過時間: ${elapsedMinutes}分 ${remainingSeconds}秒`;
}