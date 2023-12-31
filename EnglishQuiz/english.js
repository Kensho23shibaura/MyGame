const questions = [
    { word: 'anyway', type: '(副)', meanings: ['とにかく'] ,},
    { word: 'following', type: '(前)', meanings: ['～に続いて'] },
    { word: 'following', type: '(形)', meanings: ['次の','以下の'] },
    { word: 'refer', type: '(動)', meanings: ['参照する','言及する','紹介する'] },
    { word: 'available', type: '(形)', meanings: ['入手できる','利用できる'] },
    { word: 'department', type: '(名)', meanings: ['部門','売り場'] },
    { word: 'conference', type: '(名)', meanings: ['会議'] },
    { word: 'according to', type: '(前)', meanings: ['～によると','～に従って'] },
    { word: 'likely', type: '(副)', meanings: ['おそらく'] },
    { word: 'likely', type: '(形)', meanings: ['～しそうだ'] },
    { word: 'offer', type: '(動)', meanings: ['申し出る','提供する'] },
    { word: 'offer', type: '(名)', meanings: ['オファー','申し出'] },
    { word: 'equipment', type: '(名)', meanings: ['機器','装備'] },
    { word: 'provide', type: '(動)', meanings: ['提供する'] },
    { word: 'local', type: '(形)', meanings: ['地元の'] },
    { word: 'purchase', type: '(動)', meanings: ['購入する'] },
    { word: 'purchase', type: '(名)', meanings: ['購入品'] },
    { word: 'opening', type: '(名)', meanings: ['空き','開店'] },
    { word: 'construction', type: '(名)', meanings: ['建設'] },
    { word: 'tour', type: '(動)', meanings: ['見学する','旅行する'] },
    { word: 'tour', type: '(名)', meanings: ['見学','旅行'] },
    { word: 'research', type: '(名)', meanings: ['研究','調査'] },
    { word: 'research', type: '(動)', meanings: ['研究する','調査する'] },
    { word: 'attend', type: '(動)', meanings: ['出席する','参加する'] },
    { word: 'delivery', type: '(名)', meanings: ['配達','配達物'] },
    { word: 'recently', type: '(副)', meanings: ['最近'] },
    { word: 'indicate', type: '(動)', meanings: ['示す'] },
    { word: 'employee', type: '(名)', meanings: ['社員','従業員'] },
    { word: 'additional', type: '(形)', meanings: ['追加の'] },
    { word: 'survey', type: '(名)', meanings: ['アンケート調査'] },
    { word: 'survey', type: '(動)', meanings: ['アンケート調査を行う'] },
    { word: 'review', type: '(動)', meanings: ['検討する','論評する'] },
    { word: 'review', type: '(名)', meanings: ['検討','論評'] },
    { word: 'production', type: '(名)', meanings: ['生産','作品'] },
    { word: 'located', type: '(形)', meanings: ['位置して'] },
    { word: 'location', type: '(形)', meanings: ['場所','立地'] },
    { word: 'detail', type: '(名)', meanings: ['詳細'] },
    { word: 'detail', type: '(動)', meanings: ['詳しく述べる'] },
    { word: 'announce', type: '(動)', meanings: ['発表する'] },
    { word: 'repair', type: '(名)', meanings: ['修理'] },
    { word: 'repair', type: '(動)', meanings: ['修理する'] },
    { word: 'increase', type: '(名)', meanings: ['増加'] },
    { word: 'increase', type: '(動)', meanings: ['増える','増やす'] },
    { word: 'include', type: '(動)', meanings: ['含む'] },
    { word: 'currently', type: '(副)', meanings: ['現在'] },
    { word: 'advertising', type: '(名)', meanings: ['広告','広告業','宣伝'] },
    { word: 'adverte', type: '(動)', meanings: ['宣伝する'] },
    { word: 'charge', type: '(動)', meanings: ['請求する'] },
    { word: 'charge', type: '(名)', meanings: ['料金','責任'] },
    { word: 'expect', type: '(動)', meanings: ['予期する','予定する'] },
    { word: 'firm', type: '(名)', meanings: ['会社'] },
    { word: 'client', type: '(名)', meanings: ['顧客','クライアント'] },
    { word: 'financial', type: '(形)', meanings: ['お金の','財務の','金融の'] },
    { word: 'finance', type: '(名)', meanings: ['財務'] },
    { word: 'annual', type: '(形)', meanings: ['年に一度の','毎年恒例の','年間の'] },
    { word: 'payment', type: '(名)', meanings: ['支払い'] },
    { word: 'budget', type: '(名)', meanings: ['予算'] },
    { word: 'budget', type: '(動)', meanings: ['予算に計上する'] },
    { word: 'application', type: '(名)', meanings: ['応募書類','応募','申請'] },
    { word: 'contract', type: '(名)', meanings: ['契約','契約書'] },
    { word: 'management', type: '(名)', meanings: ['経営','経営陣','管理'] },
    { word: 'performance', type: '(名)', meanings: ['業績','仕事ぶり','性能','公演'] },
    { word: 'pleased', type: '(形)', meanings: ['喜んで','満足して'] },
    { word: 'confirm', type: '(動)', meanings: ['確認する'] },
    { word: 'award', type: '(名)', meanings: ['賞'] },
    { word: 'award', type: '(動)', meanings: ['授与する'] },
    { word: 'clothing', type: '(名)', meanings: ['衣類'] },
    { word: 'display', type: '(名)', meanings: ['展示'] },
    { word: 'display', type: '(動)', meanings: ['展示する'] },
    { word: 'candidate', type: '(名)', meanings: ['候補者'] },
    { word: 'state', type: '(動)', meanings: ['述べる'] },
    { word: 'exhibit', type: '(名)', meanings: ['展示物','展示会'] },
    { word: 'exhibit', type: '(動)', meanings: ['展示する'] },
    { word: 'session', type: '(名)', meanings: ['時間','集まり'] },
    { word: 'note', type: '(動)', meanings: ['注意する','述べる'] },
    { word: 'note', type: '(名)', meanings: ['メモ'] },
    { word: 'process', type: '(動)', meanings: ['処理する'] },
    { word: 'process', type: '(名)', meanings: ['プロセス','過程','処理'] },
    { word: 'instruction', type: '(名)', meanings: ['説明書','説明','指示'] },
    { word: 'membership', type: '(名)', meanings: ['会員','会員資格','会員数'] },
    { word: 'agency', type: '(名)', meanings: ['代理店','期間'] },
    { word: 'based', type: '(形)', meanings: ['拠点のある','基づく'] },
    { word: 'facility', type: '(名)', meanings: ['施設'] },
    { word: 'advance', type: '(形)', meanings: ['先行した','事前の'] },
    { word: 'advance', type: '(名)', meanings: ['進歩','前進'] },
    { word: 'committee', type: '(名)', meanings: ['委員会'] },
    { word: 'successful', type: '(形)', meanings: ['成功した','上手くいく'] },
    { word: 'excellent', type: '(形)', meanings: ['素晴らしい'] },
    { word: 'industry', type: '(名)', meanings: ['産業','業界'] },
    { word: 'fee', type: '(名)', meanings: ['料金'] },
    { word: 'accept', type: '(動)', meanings: ['受け入れる'] },
    { word: 'upcoming', type: '(形)', meanings: ['今度の'] },
    { word: 'latest', type: '(形)', meanings: ['最新の'] },
    { word: 'submit', type: '(動)', meanings: ['提出する'] },
    { word: 'transportation', type: '(名)', meanings: ['輸送手段'] },
    { word: 'resume', type: '(名)', meanings: ['履歴書'] },
    { word: 'executive', type: '(名)', meanings: ['重役'] },
    { word: 'executive', type: '(形)', meanings: ['重役の','高級な'] },
    { word: 'introduce', type: '(動)', meanings: ['導入する','紹介する'] },
    { word: 'introduction', type: '(名)', meanings: ['導入','紹介'] },
    { word: 'previous', type: '(形)', meanings: ['前の','以前の'] },
    { word: 'proposal', type: '(名)', meanings: ['提案','提案書'] },
    { word: 'supply', type: '(名)', meanings: ['必需品'] },
    { word: 'supply', type: '(動)', meanings: ['供給する'] },
    { word: 'enclose', type: '(動)', meanings: ['同封する','囲む'] },
    { word: 'policy', type: '(名)', meanings: ['規定','方針'] },
    { word: 'register', type: '(動)', meanings: ['登録する'] },
    { word: 'register', type: '(名)', meanings: ['レジ'] },
    { word: 'arrange', type: '(動)', meanings: ['手配する','並べる'] },
    { word: 'bill', type: '(名)', meanings: ['請求書'] },
    { word: 'bill', type: '(動)', meanings: ['請求書を送る'] },
    { word: 'hire', type: '(動)', meanings: ['雇う'] },
    { word: 'approve', type: '(動)', meanings: ['承認する','賛成する'] },
    { word: 'conduct', type: '(動)', meanings: ['実行する','実施する'] },
    { word: 'opportunity', type: '(名)', meanings: ['機会','チャンス'] },
    { word: 'deadline', type: '(名)', meanings: ['締め切り','期限'] },
    { word: 'corporate', type: '(形)', meanings: ['企業の','法人の'] },
    { word: 'warranty', type: '(名)', meanings: ['保証','保証書'] },
    { word: 'necessary', type: '(形)', meanings: ['必要な'] },
    { word: 'reserve', type: '(動)', meanings: ['予約する','確保する'] },
    { word: 'reserve', type: '(名)', meanings: ['蓄え'] },
    { word: 'resident', type: '(名)', meanings: ['住民','住人'] },
    { word: 'create', type: '(動)', meanings: ['創造する','作り出す'] },
    { word: 'inform', type: '(動)', meanings: ['知らせる','影響を与える'] },
    { word: 'allow', type: '(動)', meanings: ['許す','可能にする'] },
    { word: 'mention', type: '(動)', meanings: ['述べる','言及する'] },
    { word: 'mention', type: '(名)', meanings: ['言及'] },
    { word: 'appreciate', type: '(動)', meanings: ['感謝する'] },
    { word: 'replacement', type: '(名)', meanings: ['交換','交換品','後任'] },
    { word: 'update', type: '(名)', meanings: ['最新情報'] },
    { word: 'update', type: '(動)', meanings: ['更新する'] },
    { word: 'branch', type: '(名)', meanings: ['支店'] },
    { word: 'paid', type: '(形)', meanings: ['有給の','支払い済みの'] },
    { word: 'unfortunately', type: '(副)', meanings: ['残念なことに','残念ながら'] },
    { word: 'original', type: '(形)', meanings: ['元の','最初の'] },
    { word: 'original', type: '(名)', meanings: ['オリジナル','原本'] },
    { word: 'rent', type: '(名)', meanings: ['家賃'] },
    { word: 'rent', type: '(動)', meanings: ['賃貸借する'] },
    { word: 'memo', type: '(名)', meanings: ['社内文書'] },
    { word: 'luggage', type: '(名)', meanings: ['旅行かばん','手荷物'] },
    { word: 'editor', type: '(名)', meanings: ['編集者'] },
    { word: 'exhibition', type: '(名)', meanings: ['展示会','展示物','展示'] },
    { word: 'leading', type: '(形)', meanings: ['首位の','一流の'] },
    { word: 'organization', type: '(名)', meanings: ['団体','会社','組織'] },
    { word: 'release', type: '(動)', meanings: ['発売する','公表する'] },
    { word: 'release', type: '(名)', meanings: ['発売'] },
    { word: 'limited', type: '(形)', meanings: ['限られた'] },
    { word: 'procedure', type: '(名)', meanings: ['手続き','手順'] },
    { word: 'experienced', type: '(形)', meanings: ['経験豊富な'] },
    { word: 'personnel', type: '(名)', meanings: ['社員','人事部'] },
    { word: 'author', type: '(名)', meanings: ['著者','作者'] },
    { word: 'author', type: '(動)', meanings: ['書く','本を書く'] },
    { word: 'benefit', type: '(名)', meanings: ['特典','福利厚生'] },
    { word: 'benefit', type: '(動)', meanings: ['～のためになる'] },
    { word: 'focus', type: '(動)', meanings: ['～に集中させる','重点を置く'] },
    { word: 'focus', type: '(名)', meanings: ['焦点','集中'] },
    { word: 'participate', type: '(動)', meanings: ['参加する'] },
    { word: 'cause', type: '(名)', meanings: ['原因','大義'] },
    { word: 'cause', type: '(動)', meanings: ['引き起こす'] },
    { word: 'degree', type: '(名)', meanings: ['学位','程度','度'] },
    { word: 'directly', type: '(副)', meanings: ['直接'] },
    { word: 'host', type: '(名)', meanings: ['司会者'] },
    { word: 'host', type: '(動)', meanings: ['主催する'] },
    { word: 'expert', type: '(名)', meanings: ['専門家'] },
    { word: 'expert', type: '(形)', meanings: ['専門的な'] },
    { word: 'impress', type: '(動)', meanings: ['感心させる','好印象を与える'] },
    { word: 'mainly', type: '(副)', meanings: ['主に'] },
    { word: 'suggestion', type: '(名)', meanings: ['提案'] },
    { word: 'supplier', type: '(名)', meanings: ['納入業者','供給業者'] },
    { word: 'document', type: '(名)', meanings: ['書類'] },
    { word: 'document', type: '(動)', meanings: ['記録する'] },
    { word: 'remind', type: '(動)', meanings: ['再確認する','念押しする'] },
    { word: 'require', type: '(動)', meanings: ['求める','要求する'] },
    { word: 'representative', type: '(名)', meanings: ['担当者','代表者'] },
    { word: 'packaging', type: '(名)', meanings: ['梱包','パッケージ'] },
    { word: 'description', type: '(名)', meanings: ['説明','記述','描写'] },
    { word: 'property', type: '(名)', meanings: ['不動産','資産'] },
    { word: 'extension', type: '(名)', meanings: ['内線','延長'] },
    { word: 'inquire', type: '(動)', meanings: ['尋ねる','問い合わせる'] },
    { word: 'merchandise', type: '(名)', meanings: ['商品'] },
    { word: 'highly', type: '(副)', meanings: ['非常に'] },
    { word: 'result', type: '(動)', meanings: ['生じる','終わる'] },
    { word: 'result', type: '(名)', meanings: ['結果'] },
    { word: 'assistance', type: '(名)', meanings: ['支援','援助'] },
    { word: 'encourage', type: '(動)', meanings: ['奨励する','促す'] },
    { word: 'individual', type: '(名)', meanings: ['個人'] },
    { word: 'individual', type: '(形)', meanings: ['個人の','個別の'] },
    { word: 'laboratory', type: '(名)', meanings: ['研究所','実験室'] },
    { word: 'consider', type: '(動)', meanings: ['考える','検討する'] },
    { word: 'headquarters', type: '(名)', meanings: ['本社'] },
    { word: 'ship', type: '(動)', meanings: ['出荷する'] },
    { word: 'ship', type: '(名)', meanings: ['船'] },
    { word: 'commercial', type: '(形)', meanings: ['商業用の','商業の','商業的な'] },
    { word: 'device', type: '(名)', meanings: ['機器','装置'] },
    { word: 'intended', type: '(形)', meanings: ['意図された','向けられた'] },
    { word: 'brochure', type: '(名)', meanings: ['パンフレット'] },
    { word: 'mail', type: '(名)', meanings: ['郵便物','郵便配達'] },
    { word: 'mail', type: '(動)', meanings: ['郵送する'] },
    { word: 'prefer', type: '(動)', meanings: ['～を好む'] },
    { word: 'response', type: '(名)', meanings: ['返答','返事'] },
    { word: 'region', type: '(名)', meanings: ['地域'] },
    { word: 'donation', type: '(名)', meanings: ['寄付'] },
    { word: 'quarter', type: '(名)', meanings: ['四半期'] },
    { word: 'agreement', type: '(名)', meanings: ['契約','契約書','同意','同意書','合意'] },
    { word: 'journal', type: '(名)', meanings: ['専門誌'] },
    { word: 'distribute', type: '(動)', meanings: ['配布する','流通させる'] },
    { word: 'potential', type: '(形)', meanings: ['見込みがある','潜在的な'] },
    { word: 'potential', type: '(名)', meanings: ['可能性'] },
    { word: 'reschedule', type: '(動)', meanings: ['スケジュール変更する'] },
    { word: 'renew', type: '(動)', meanings: ['更新する'] },
    { word: 'warehouse', type: '(名)', meanings: ['倉庫'] },
    { word: 'refund', type: '(名)', meanings: ['返金'] },
    { word: 'refund', type: '(動)', meanings: ['返金する'] },
    { word: 'advise', type: '(動)', meanings: ['勧める','忠告する','助言する'] },
    { word: 'immediately', type: '(副)', meanings: ['すぐに','即座に'] },
    { word: 'council', type: '(名)', meanings: ['議会'] },
    { word: 'broadcast', type: '(動)', meanings: ['放送する'] },
    { word: 'broadcast', type: '(名)', meanings: ['放送'] },
    { word: 'responsible', type: '(形)', meanings: ['担当している','責任がある'] },
    { word: 'avoid', type: '(動)', meanings: ['避ける'] },
    { word: 'effective', type: '(形)', meanings: ['効果的な'] },
    { word: 'invitation', type: '(名)', meanings: ['招待','招待状'] },
    { word: 'reduce', type: '(動)', meanings: ['下げる','減らす'] },
    { word: 'vehicle', type: '(名)', meanings: ['乗り物','車両','車'] },
    { word: 'efficient', type: '(形)', meanings: ['効率的な'] },
    { word: 'manufacturer', type: '(名)', meanings: ['メーカー','製造業者'] },
    { word: 'comfortable', type: '(形)', meanings: ['快適な','楽な','自信がある'] },
    { word: 'correct', type: '(形)', meanings: ['正確な','正しい'] },
    { word: 'correct', type: '(動)', meanings: ['修正する'] },
    { word: 'downtown', type: '(形)', meanings: ['中心街の'] },
    { word: 'downtown', type: '(副)', meanings: ['中心街で'] },
    { word: 'downtown', type: '(名)', meanings: ['中心街'] },
    { word: 'method', type: '(名)', meanings: ['方法'] },
    { word: 'entire', type: '(形)', meanings: ['全体の'] },
    { word: 'range', type: '(名)', meanings: ['範囲'] },
    { word: 'setting', type: '(名)', meanings: ['環境'] },
    { word: 'apologize', type: '(動)', meanings: ['おわびする'] },
    { word: 'frequent', type: '(形)', meanings: ['頻繁な'] },
    { word: 'promotion', type: '(名)', meanings: ['昇進','販売促進'] },
    { word: 'regarding', type: '(前)', meanings: ['～に関する'] },
    { word: 'temporary', type: '(形)', meanings: ['一時的な','臨時の'] },
    { word: 'traditional', type: '(形)', meanings: ['伝統的な','従来の'] },
    { word: 'admission', type: '(名)', meanings: ['入場','入場料','入場許可'] },
    { word: 'fit', type: '(動)', meanings: ['合う','入る'] },
    { word: 'reference', type: '(名)', meanings: ['照会先','照会','参照'] },
    { word: 'status', type: '(名)', meanings: ['状況','地位'] },
    { word: 'fuel', type: '(名)', meanings: ['燃料'] },
    { word: 'nearly', type: '(副)', meanings: ['ほとんど','もう少しで'] },
    { word: 'cafeteria', type: '(名)', meanings: ['社員食堂'] },
    { word: 'determine', type: '(動)', meanings: ['決定する','判断する','決心する'] },
    { word: 'expense', type: '(名)', meanings: ['費用','経費'] },
    { word: 'overseas', type: '(形)', meanings: ['海外の'] },
    { word: 'overseas', type: '(副)', meanings: ['海外で'] },
    { word: 'satisfied', type: '(形)', meanings: ['満足した'] },
    { word: 'appear', type: '(動)', meanings: ['現れる','掲載される','～のように見える'] },
    { word: 'develop', type: '(動)', meanings: ['作り出す','開発する','高める'] },
    { word: 'improve', type: '(動)', meanings: ['改善する','改良する'] },
    { word: 'reasonable', type: '(形)', meanings: ['手頃な','妥当な'] },
    { word: 'unable', type: '(形)', meanings: ['～できない'] },
    { word: 'delay', type: '(動)', meanings: ['遅らせる'] },
    { word: 'delay', type: '(名)', meanings: ['遅れ'] },
    { word: 'legal', type: '(形)', meanings: ['法律に関する','合法の'] },
    { word: 'regulation', type: '(名)', meanings: ['規制','規則'] },
    { word: 'expand', type: '(動)', meanings: ['拡大する','進出する'] },
    { word: 'launch', type: '(名)', meanings: ['開始','発売'] },
    { word: 'launch', type: '(動)', meanings: ['開始する','発売する'] },
    { word: 'recommendation', type: '(名)', meanings: ['推薦'] },
    { word: 'direct', type: '(動)', meanings: ['向ける','管理する'] },
    { word: 'direct', type: '(形)', meanings: ['直接の'] },
    { word: 'profit', type: '(名)', meanings: ['利益'] },
    { word: 'profit', type: '(動)', meanings: ['利益を与える'] },
    { word: 'seek', type: '(動)', meanings: ['探し求める'] },
    { word: 'entry', type: '(名)', meanings: ['エントリー','入場'] },
    { word: 'claim', type: '(名)', meanings: ['申し立て','主張','所有権'] },
    { word: 'claim', type: '(動)', meanings: ['主張する','所有権を主張する'] },
    { word: 'crew', type: '(名)', meanings: ['グループ','班','乗員'] },


    // { word: '', type: '()', meanings: [''] },
    // { word: '', type: '()', meanings: [''] },
    // { word: '', type: '()', meanings: [''] },
    // { word: '', type: '()', meanings: [''] },
    // { word: '', type: '()', meanings: [''] },
    // { word: '', type: '()', meanings: [''] },
    // { word: '', type: '()', meanings: [''] },
    // { word: '', type: '()', meanings: [''] },
    // { word: '', type: '()', meanings: [''] },
    // { word: '', type: '()', meanings: [''] },
    // { word: '', type: '()', meanings: [''] },
    // { word: '', type: '()', meanings: [''] },
    // { word: '', type: '()', meanings: [''] },
    // { word: '', type: '()', meanings: [''] },
    // { word: '', type: '()', meanings: [''] },
    // { word: '', type: '()', meanings: [''] },
    // { word: '', type: '()', meanings: [''] },
    // { word: '', type: '()', meanings: [''] },
    // { word: '', type: '()', meanings: [''] },
    // { word: '', type: '()', meanings: [''] },
    // { word: '', type: '()', meanings: ['','',''] },
];
