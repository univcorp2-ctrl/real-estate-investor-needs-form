export const formSpec = {
  title: '不動産投資家向け 買いニーズヒアリングフォーム',
  description: '不動産投資用物件のご紹介精度を高めるため、購入希望条件をお聞かせください。',
  sections: [
    {
      title: '1. 基本情報',
      questions: [
        { title: 'お名前', type: 'text', required: true },
        { title: '会社名・屋号', type: 'text', required: false },
        { title: 'メールアドレス', type: 'text', required: true },
        { title: '電話番号', type: 'text', required: false },
        { title: 'LINE IDまたは連絡しやすい連絡手段', type: 'text', required: false },
        { title: '投資家区分', type: 'multipleChoice', required: true, choices: ['個人投資家', '法人投資家', '不動産会社', '宅建業者', '資産管理会社', '初めての不動産投資', 'その他'] }
      ]
    },
    {
      title: '2. 購入経験・購入目的',
      questions: [
        { title: '不動産投資の購入経験', type: 'multipleChoice', required: true, choices: ['まだ購入経験なし', '1件', '2〜3件', '4〜10件', '11件以上', '法人・事業として継続購入している'] },
        { title: '現在の保有物件数', type: 'multipleChoice', required: true, choices: ['0件', '1件', '2〜3件', '4〜10件', '11件以上', '非公開'] },
        { title: '今回の購入目的', type: 'checkbox', required: true, choices: ['毎月のキャッシュフロー', '長期保有による資産形成', '節税', '相続対策', '法人資産運用', '売却益・転売', 'インフレ対策', '融資拡大', 'その他'] },
        { title: '購入希望時期', type: 'multipleChoice', required: true, choices: ['良い物件があればすぐ', '1か月以内', '3か月以内', '半年以内', '1年以内', '情報収集中'] },
        { title: '購入意思決定のスピード感', type: 'multipleChoice', required: true, choices: ['条件が合えば当日判断できる', '3日以内に判断できる', '1週間以内に判断できる', '融資確認後に判断したい', '家族・役員・税理士等に確認が必要'] }
      ]
    },
    {
      title: '3. 希望物件種別',
      questions: [
        { title: '希望する物件種別', type: 'checkbox', required: true, choices: ['区分マンション', '一棟アパート', '一棟マンション', '戸建て', '店舗・事務所', '店舗付き住宅', '土地', '再建築不可', '借地権付き物件', '任意売却・訳あり案件', 'その他'] },
        { title: '希望する構造', type: 'checkbox', required: true, choices: ['木造', '軽量鉄骨造', '重量鉄骨造', 'RC造', 'SRC造', '構造は問わない'] },
        { title: '許容できる築年数', type: 'multipleChoice', required: true, choices: ['新築〜築5年', '築10年以内', '築20年以内', '築30年以内', '築40年以内', '築40年以上も可', '築年数は問わないが状態重視'] },
        { title: '新耐震・旧耐震の許容', type: 'multipleChoice', required: true, choices: ['新耐震のみ', '旧耐震も検討可', '旧耐震でも価格・利回り次第', 'わからないので相談したい'] },
        { title: '希望する入居状況', type: 'checkbox', required: true, choices: ['満室のみ', '稼働率80%以上', '空室ありでも可', '空室再生案件も可', 'オーナーチェンジのみ', '自主管理物件も可', '滞納・トラブルありでも条件次第'] },
        { title: '最低希望戸数・規模', type: 'text', required: false }
      ]
    },
    {
      title: '4. 希望エリア',
      questions: [
        { title: '第一希望エリア', type: 'paragraph', required: true },
        { title: '第二希望エリア', type: 'paragraph', required: false },
        { title: '検討可能な広域エリア', type: 'checkbox', required: true, choices: ['東京都', '神奈川県', '千葉県', '埼玉県', '関西圏', '東海圏', '福岡県', '札幌・仙台・広島など地方中核都市', '全国検討可', 'その他'] },
        { title: '駅徒歩の希望', type: 'multipleChoice', required: true, choices: ['徒歩5分以内', '徒歩10分以内', '徒歩15分以内', 'バス便も可', '車社会エリアなら駅距離は問わない', '物件次第'] },
        { title: '車社会エリアの許容', type: 'multipleChoice', required: true, choices: ['可', '不可', '駐車場があれば可', '利回り次第で可'] },
        { title: 'ハザードエリアの許容', type: 'multipleChoice', required: true, choices: ['不可', '軽微なら可', '価格・利回り次第で可', '保険加入できれば可', '判断に迷うので相談したい'] },
        { title: 'エリアで重視するポイント', type: 'checkbox', required: true, choices: ['人口増加・人口維持', '駅近', '大学・病院・工場など賃貸需要', '法人需要', 'ファミリー需要', '生活利便性', '再開発エリア', '地価上昇', '高利回り', '出口戦略の取りやすさ'] }
      ]
    },
    {
      title: '5. 価格・予算・資金計画',
      questions: [
        { title: '希望購入価格帯', type: 'multipleChoice', required: true, choices: ['〜1,000万円', '1,000万円〜3,000万円', '3,000万円〜5,000万円', '5,000万円〜1億円', '1億円〜3億円', '3億円〜5億円', '5億円〜10億円', '10億円以上', '案件次第'] },
        { title: '自己資金の目安', type: 'multipleChoice', required: true, choices: ['〜300万円', '300万円〜1,000万円', '1,000万円〜3,000万円', '3,000万円〜5,000万円', '5,000万円〜1億円', '1億円以上', '非公開', '相談したい'] },
        { title: '購入方法', type: 'multipleChoice', required: true, choices: ['現金購入', '融資利用', '現金・融資どちらも可', '共同購入・出資も検討', '未定'] },
        { title: '融資の事前相談状況', type: 'multipleChoice', required: true, choices: ['すでに金融機関と相談済み', '取引金融機関あり', 'これから相談予定', '融資先の紹介を希望', '現金購入のため不要', '未定'] },
        { title: '希望する融資条件があれば記入してください', type: 'paragraph', required: false },
        { title: '法人・個人どちらで購入予定ですか？', type: 'multipleChoice', required: true, choices: ['個人', '法人', '資産管理法人', '案件により判断', '未定'] }
      ]
    },
    {
      title: '6. 利回り・収益条件',
      questions: [
        { title: '最低希望表面利回り', type: 'multipleChoice', required: true, choices: ['4%以上', '5%以上', '6%以上', '7%以上', '8%以上', '9%以上', '10%以上', '12%以上', 'エリア・築年数次第', '利回りより資産性重視'] },
        { title: '希望する実質利回り', type: 'multipleChoice', required: false, choices: ['3%以上', '4%以上', '5%以上', '6%以上', '7%以上', '8%以上', '未定', '表面利回りで判断したい'] },
        { title: '月間キャッシュフローの希望', type: 'multipleChoice', required: true, choices: ['プラスなら可', '月5万円以上', '月10万円以上', '月30万円以上', '月50万円以上', '月100万円以上', 'キャッシュフローより資産性重視', '融資条件次第'] },
        { title: '利回り以外に重視する条件', type: 'checkbox', required: true, choices: ['資産性', '土地値', '積算評価', '融資評価', '出口戦略', '修繕履歴', '管理状態', '入居率', '賃貸需要', '節税効果', '将来の売却しやすさ'] },
        { title: '利回り条件について補足があれば記入してください', type: 'paragraph', required: false }
      ]
    },
    {
      title: '7. 許容リスク・NG条件',
      questions: [
        { title: '許容できるリスク・特殊条件', type: 'checkbox', required: true, choices: ['空室あり', '修繕必要', '築古', '旧耐震', '再建築不可', '借地権', '違法建築・既存不適格', '境界非明示', '自主管理', '滞納あり', '心理的瑕疵あり', '地方物件', '特になし', '条件次第で相談可'] },
        { title: '絶対に避けたいNG条件', type: 'checkbox', required: true, choices: ['空室率が高い', '修繕費が大きい', '旧耐震', '再建築不可', '借地権', '違法建築', 'ハザードリスク', '駅遠', '地方', '管理状態が悪い', '入居者トラブル', '融資が付きにくい', '特になし'] },
        { title: '大規模修繕・リフォーム予算', type: 'multipleChoice', required: true, choices: ['できれば不要', '〜100万円', '100万円〜300万円', '300万円〜500万円', '500万円〜1,000万円', '1,000万円以上も可', '案件次第'] },
        { title: '物件調査で重視する資料', type: 'checkbox', required: true, choices: ['レントロール', '登記簿謄本', '固定資産税評価額', '公図・測量図', '建築確認・検査済証', '修繕履歴', '管理費・修繕積立金', '賃貸借契約書', '現地写真', '周辺賃料相場', '収支シミュレーション', '金融機関評価'] },
        { title: 'その他のNG条件があれば記入してください', type: 'paragraph', required: false }
      ]
    },
    {
      title: '8. 案件紹介・連絡方法',
      questions: [
        { title: '案件紹介の希望頻度', type: 'multipleChoice', required: true, choices: ['条件に合うものだけ欲しい', '少し広めに紹介してほしい', '高利回り案件は積極的に欲しい', '未公開・水面下案件だけ欲しい', 'まずは相談したい'] },
        { title: '希望する連絡方法', type: 'checkbox', required: true, choices: ['メール', '電話', 'LINE', 'SMS', 'Zoom・オンライン面談', '対面面談'] },
        { title: '案件紹介時に欲しい情報', type: 'checkbox', required: true, choices: ['価格', '所在地', '築年数', '構造', '表面利回り', '実質利回り', 'レントロール', '修繕履歴', '写真', '収支シミュレーション', '融資想定', '出口戦略', 'リスク・懸念点'] },
        { title: '内見・現地確認の対応可否', type: 'multipleChoice', required: true, choices: ['すぐ対応可能', '1週間以内なら可能', 'オンライン資料確認後に判断', '現地確認は不要', '代理人・管理会社に依頼したい'] },
        { title: '最後に、具体的な買いニーズを自由に記入してください', type: 'paragraph', required: false }
      ]
    }
  ],
  ranks: [
    { rank: 'Aランク', rule: '3か月以内に購入希望、予算明確、融資または現金の目処あり、意思決定が早い' },
    { rank: 'Bランク', rule: '半年以内に購入希望、条件は明確だが融資確認が必要' },
    { rank: 'Cランク', rule: '情報収集中、条件が広い、購入時期が未定' },
    { rank: '特別対応', rule: '高額予算、現金購入、法人購入、継続購入希望、訳あり案件許容' }
  ]
};

export function getAllQuestions() {
  return formSpec.sections.flatMap((section) => section.questions.map((question) => ({
    section: section.title,
    ...question
  })));
}
