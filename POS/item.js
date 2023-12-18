function addItemTile(Class, No, Name, Tab = "A", Amount = 0, Price = 0, Img_URL = "") {
    // エリア準備
    var Item = document.createElement('div');
    Item.className = `Item_${Class}`;
    var div_1st = document.createElement('div');
    var div_2nd = document.createElement('div');
    if (["Menu"].includes(Class)) {
        div_1st.className = "upper_div";
        div_2nd.className = "lower_div";
    } else {
        div_1st.className = "sidehalf_div";
        div_2nd.className = "sidehalf_div";
    }

    // 画像表示(&増加処理)
    var Img = document.createElement('div');
    Img.className = `Menu_Img FullSize Menu_Img${Class}`;
    Img.style.backgroundImage = `url("${Img_URL}")`;
    if (["Menu", "Confirm"].includes(Class)) {
        Img.setAttribute("onclick", `add(${No},["Menu_Value","Confirm_Value"]);`);
    }
    div_1st.appendChild(Img);

    // タイトル表示
    var Menu_Title = document.createElement('div');
    Menu_Title.className = "Menu_Title";
    Menu_Title.innerHTML = Name;
    div_2nd.appendChild(Menu_Title);

    // 数量表示
    var value = document.createElement('div');
    value.className = `${Class}_Value middle_text Menu${No}`;
    value.innerHTML = Amount;
    div_2nd.appendChild(value);

    // 操作ボタン
    if (["Menu", "Confirm"].includes(Class)) {
        var Menu_Operate = document.createElement('div');
        Menu_Operate.className = "Menu_Operate";

        var subBtn = document.createElement('button');
        subBtn.innerHTML = '-';
        subBtn.className = "pmBtn Btn default_text small_text";
        subBtn.id = `sub${No}`;
        subBtn.setAttribute("onclick", `sub(${No},["Menu_Value","Confirm_Value"]);`);

        var addBtn = document.createElement('button');
        addBtn.innerHTML = '+';
        addBtn.className = "pmBtn Btn default_text small_text";
        addBtn.id = `add${No}`;
        addBtn.setAttribute("onclick", `add(${No},["Menu_Value","Confirm_Value"]);`);

        Menu_Operate.appendChild(subBtn);
        Menu_Operate.appendChild(addBtn);
        div_2nd.appendChild(Menu_Operate);
    }

    // 状態監視
    if (["Menu"].includes(Class)) {
        var observer = new MutationObserver(function (mutationsList, observer) {
            for (var mutation of mutationsList) {
                var length = document.querySelectorAll(`.Confirm_Value.Menu${No}`).length;
                if (mutation.type === 'childList' && length === 0 && value.innerHTML === "1") {
                    addItemTile(Class = "Confirm", No, Name, Tab = "", 1, Price, Img_URL);
                }
            }
        });
        // MutationObserver を value 要素に対して設定
        observer.observe(value, { childList: true, subtree: true });
    }

    // 金額
    // 追加時刻
    // 完了・削除ボタン(場所・×・スワイプ)
    if (["ShowD"].includes(Class)) {
        var cmpBtn = document.createElement('button');
        cmpBtn.innerHTML = '✓';
        cmpBtn.className = "pmBtn Btn default_text small_text";
        cmpBtn.id = `cmp${No}`;
        cmpBtn.setAttribute("onclick", `cmp(${No},["Menu_Value","Confirm_Value"]);`);

        div_2nd.appendChild(cmpBtn);
    }

    // エリアに追加
    Item.appendChild(div_1st);
    Item.appendChild(div_2nd);
    document.getElementById(`Area_${Class}${Tab}`).appendChild(Item);
}