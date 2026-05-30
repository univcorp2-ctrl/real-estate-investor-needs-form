/**
 * 不動産投資家向け 買いニーズ Googleフォーム自動生成
 *
 * 使い方:
 * 1. Google Apps Script の新規プロジェクトを開く
 * 2. このファイルの内容を貼り付ける
 * 3. createInvestorNeedsForm を実行する
 * 4. 初回のみ権限を許可する
 * 5. ログに表示されるフォームURLと回答シートURLを開く
 */
function createInvestorNeedsForm() {
  const form = FormApp.create('不動産投資家向け 買いニーズヒアリングフォーム');
  form.setDescription(
    '不動産投資用物件のご紹介精度を高めるため、購入希望条件をお聞かせください。\n' +
    'ご回答内容に合う物件が出た場合のみ、優先的にご案内いたします。\n' +
    '未確定の項目は「相談したい」「未定」を選択してください。'
  );
  form.setCollectEmail(false);
  form.setConfirmationMessage('ご回答ありがとうございました。条件に合う物件が出ましたら、優先的にご連絡いたします。');

  const ss = SpreadsheetApp.create('不動産投資家 買いニーズ回答一覧');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());

  addSection(form, '1. 基本情報');
  addText(form, 'お名前', true);
  addText(form, '会社名・屋号', false);
  addText(form, 'メールアドレス', true);
  addText(form, '電話番号', false);
  addText(form, 'LINE IDまたは連絡しやすい連絡手段', false);
  addMultipleChoice(form, '投資家区分', [
    '個人投資家',
    '法人投資家',
    '不動産会社',
    '宅建業者',
    '資産管理会社',
    '初めての不動産投資',
    'その他'
  ], true);

  addSection(form, '2. 購入経験・購入目的');
  addMultipleChoice(form, '不動産投資の購入経験', [
    'まだ購入経験なし',
    '1件',
    '2〜3件',
    '4〜10件',
    '11件以上',
    '法人・事業として継続購入している'
  ], true);
  addMultipleChoice(form, '現在の保有物件数', [
    '0件',
    '1件',
    '2〜3件',
    '4〜10件',
    '11件以上',
    '非公開'
  ], true);
  addCheckbox(form, '今回の購入目的', [
    '毎月のキャッシュフロー',
    '長期保有による資産形成',
    '節税',
    '相続対策',
    '法人資産運用',
    '売却益・転売',
    'インフレ対策',
    '融資拡大',
    'その他'
  ], true);
  addMultipleChoice(form, '購入希望時期', [
    '良い物件があればすぐ',
    '1か月以内',
    '3か月以内',
    '半年以内',
    '1年以内',
    '情報収集中'
  ], true);
  addMultipleChoice(form, '購入意思決定のスピード感', [
    '条件が合えば当日判断できる',
    '3日以内に判断できる',
    '1週間以内に判断できる',
    '融資確認後に判断したい',
    '家族・役員・税理士等に確認が必要'
  ], true);

  addSection(form, '3. 希望物件種別');
  addCheckbox(form, '希望する物件種別', [
    '区分マンション',
    '一棟アパート',
    '一棟マンション',
    '戸建て',
    '店舗・事務所',
    '店舗付き住宅',
    '土地',
    '再建築不可',
    '借地権付き物件',
    '任意売却・訳あり案件',
    'その他'
  ], true);
  addCheckbox(form, '希望する構造', [
    '木造',
    '軽量鉄骨造',
    '重量鉄骨造',
    'RC造',
    'SRC造',
    '構造は問わない'
  ], true);
  addMultipleChoice(form, '許容できる築年数', [
    '新築〜築5年',
    '築10年以内',
    '築20年以内',
    '築30年以内',
    '築40年以内',
    '築40年以上も可',
    '築年数は問わないが状態重視'
  ], true);
  addMultipleChoice(form, '新耐震・旧耐震の許容', [
    '新耐震のみ',
    '旧耐震も検討可',
    '旧耐震でも価格・利回り次第',
    'わからないので相談したい'
  ], true);
  addCheckbox(form, '希望する入居状況', [
    '満室のみ',
    '稼働率80%以上',
    '空室ありでも可',
    '空室再生案件も可',
    'オーナーチェンジのみ',
    '自主管理物件も可',
    '滞納・トラブルありでも条件次第'
  ], true);
  addText(form, '最低希望戸数・規模', false);

  addSection(form, '4. 希望エリア');
  addParagraph(form, '第一希望エリア', true);
  addParagraph(form, '第二希望エリア', false);
  addCheckbox(form, '検討可能な広域エリア', [
    '東京都',
    '神奈川県',
    '千葉県',
    '埼玉県',
    '関西圏',
    '東海圏',
    '福岡県',
    '札幌・仙台・広島など地方中核都市',
    '全国検討可',
    'その他'
  ], true);
  addMultipleChoice(form, '駅徒歩の希望', [
    '徒歩5分以内',
    '徒歩10分以内',
    '徒歩15分以内',
    'バス便も可',
    '車社会エリアなら駅距離は問わない',
    '物件次第'
  ], true);
  addMultipleChoice(form, '車社会エリアの許容', [
    '可',
    '不可',
    '駐車場があれば可',
    '利回り次第で可'
  ], true);
  addMultipleChoice(form, 'ハザードエリアの許容', [
    '不可',
    '軽微なら可',
    '価格・利回り次第で可',
    '保険加入できれば可',
    '判断に迷うので相談したい'
  ], true);
  addCheckbox(form, 'エリアで重視するポイント', [
    '人口増加・人口維持',
    '駅近',
    '大学・病院・工場など賃貸需要',
    '法人需要',
    'ファミリー需要',
    '生活利便性',
    '再開発エリア',
    '地価上昇',
    '高利回り',
    '出口戦略の取りやすさ'
  ], true);

  addSection(form, '5. 価格・予算・資金計画');
  addMultipleChoice(form, '希望購入価格帯', [
    '〜1,000万円',
    '1,000万円〜3,000万円',
    '3,000万円〜5,000万円',
    '5,000万円〜1億円',
    '1億円〜3億円',
    '3億円〜5億円',
    '5億円〜10億円',
    '10億円以上',
    '案件次第'
  ], true);
  addMultipleChoice(form, '自己資金の目安', [
    '〜300万円',
    '300万円〜1,000万円',
    '1,000万円〜3,000万円',
    '3,000万円〜5,000万円',
    '5,000万円〜1億円',
    '1億円以上',
    '非公開',
    '相談したい'
  ], true);
  addMultipleChoice(form, '購入方法', [
    '現金購入',
    '融資利用',
    '現金・融資どちらも可',
    '共同購入・出資も検討',
    '未定'
  ], true);
  addMultipleChoice(form, '融資の事前相談状況', [
    'すでに金融機関と相談済み',
    '取引金融機関あり',
    'これから相談予定',
    '融資先の紹介を希望',
    '現金購入のため不要',
    '未定'
  ], true);
  addParagraph(form, '希望する融資条件があれば記入してください', false);
  addMultipleChoice(form, '法人・個人どちらで購入予定ですか？', [
    '個人',
    '法人',
    '資産管理法人',
    '案件により判断',
    '未定'
  ], true);

  addSection(form, '6. 利回り・収益条件');
  addMultipleChoice(form, '最低希望表面利回り', [
    '4%以上',
    '5%以上',
    '6%以上',
    '7%以上',
    '8%以上',
    '9%以上',
    '10%以上',
    '12%以上',
    'エリア・築年数次第',
    '利回りより資産性重視'
  ], true);
  addMultipleChoice(form, '希望する実質利回り', [
    '3%以上',
    '4%以上',
    '5%以上',
    '6%以上',
    '7%以上',
    '8%以上',
    '未定',
    '表面利回りで判断したい'
  ], false);
  addMultipleChoice(form, '月間キャッシュフローの希望', [
    'プラスなら可',
    '月5万円以上',
    '月10万円以上',
    '月30万円以上',
    '月50万円以上',
    '月100万円以上',
    'キャッシュフローより資産性重視',
    '融資条件次第'
  ], true);
  addCheckbox(form, '利回り以外に重視する条件', [
    '資産性',
    '土地値',
    '積算評価',
    '融資評価',
    '出口戦略',
    '修繕履歴',
    '管理状態',
    '入居率',
    '賃貸需要',
    '節税効果',
    '将来の売却しやすさ'
  ], true);
  addParagraph(form, '利回り条件について補足があれば記入してください', false);

  addSection(form, '7. 許容リスク・NG条件');
  addCheckbox(form, '許容できるリスク・特殊条件', [
    '空室あり',
    '修繕必要',
    '築古',
    '旧耐震',
    '再建築不可',
    '借地権',
    '違法建築・既存不適格',
    '境界非明示',
    '自主管理',
    '滞納あり',
    '心理的瑕疵あり',
    '地方物件',
    '特になし',
    '条件次第で相談可'
  ], true);
  addCheckbox(form, '絶対に避けたいNG条件', [
    '空室率が高い',
    '修繕費が大きい',
    '旧耐震',
    '再建築不可',
    '借地権',
    '違法建築',
    'ハザードリスク',
    '駅遠',
    '地方',
    '管理状態が悪い',
    '入居者トラブル',
    '融資が付きにくい',
    '特になし'
  ], true);
  addMultipleChoice(form, '大規模修繕・リフォーム予算', [
    'できれば不要',
    '〜100万円',
    '100万円〜300万円',
    '300万円〜500万円',
    '500万円〜1,000万円',
    '1,000万円以上も可',
    '案件次第'
  ], true);
  addCheckbox(form, '物件調査で重視する資料', [
    'レントロール',
    '登記簿謄本',
    '固定資産税評価額',
    '公図・測量図',
    '建築確認・検査済証',
    '修繕履歴',
    '管理費・修繕積立金',
    '賃貸借契約書',
    '現地写真',
    '周辺賃料相場',
    '収支シミュレーション',
    '金融機関評価'
  ], true);
  addParagraph(form, 'その他のNG条件があれば記入してください', false);

  addSection(form, '8. 案件紹介・連絡方法');
  addMultipleChoice(form, '案件紹介の希望頻度', [
    '条件に合うものだけ欲しい',
    '少し広めに紹介してほしい',
    '高利回り案件は積極的に欲しい',
    '未公開・水面下案件だけ欲しい',
    'まずは相談したい'
  ], true);
  addCheckbox(form, '希望する連絡方法', [
    'メール',
    '電話',
    'LINE',
    'SMS',
    'Zoom・オンライン面談',
    '対面面談'
  ], true);
  addCheckbox(form, '案件紹介時に欲しい情報', [
    '価格',
    '所在地',
    '築年数',
    '構造',
    '表面利回り',
    '実質利回り',
    'レントロール',
    '修繕履歴',
    '写真',
    '収支シミュレーション',
    '融資想定',
    '出口戦略',
    'リスク・懸念点'
  ], true);
  addMultipleChoice(form, '内見・現地確認の対応可否', [
    'すぐ対応可能',
    '1週間以内なら可能',
    'オンライン資料確認後に判断',
    '現地確認は不要',
    '代理人・管理会社に依頼したい'
  ], true);
  addParagraph(form, '最後に、具体的な買いニーズを自由に記入してください', false);

  addInvestorRankSheet_(ss);

  Logger.log('フォーム編集URL: ' + form.getEditUrl());
  Logger.log('フォーム回答URL: ' + form.getPublishedUrl());
  Logger.log('回答用スプレッドシートURL: ' + ss.getUrl());
}

function addInvestorRankSheet_(spreadsheet) {
  const sheet = spreadsheet.insertSheet('ランク判定メモ');
  sheet.getRange(1, 1, 1, 3).setValues([['ランク', '判定目安', '初回対応']]);
  sheet.getRange(2, 1, 4, 3).setValues([
    ['Aランク', '3か月以内に購入希望、予算明確、融資または現金の目処あり、意思決定が早い', '条件一致案件を優先紹介'],
    ['Bランク', '半年以内に購入希望、条件は明確だが融資確認が必要', '融資状況を確認して候補案件を紹介'],
    ['Cランク', '情報収集中、条件が広い、購入時期が未定', '条件整理の面談を提案'],
    ['特別対応', '高額予算、現金購入、法人購入、継続購入希望、訳あり案件許容', '非公開・水面下案件を個別紹介']
  ]);
  sheet.autoResizeColumns(1, 3);
}

function addSection(form, title) {
  form.addSectionHeaderItem().setTitle(title);
}

function addText(form, title, required) {
  form.addTextItem().setTitle(title).setRequired(required);
}

function addParagraph(form, title, required) {
  form.addParagraphTextItem().setTitle(title).setRequired(required);
}

function addMultipleChoice(form, title, choices, required) {
  form.addMultipleChoiceItem()
    .setTitle(title)
    .setChoiceValues(choices)
    .setRequired(required);
}

function addCheckbox(form, title, choices, required) {
  form.addCheckboxItem()
    .setTitle(title)
    .setChoiceValues(choices)
    .setRequired(required);
}
