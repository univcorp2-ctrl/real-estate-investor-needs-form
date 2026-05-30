import test from 'node:test';
import assert from 'node:assert/strict';
import { formSpec, getAllQuestions } from '../src/formSpec.js';

test('form has expected title and sections', () => {
  assert.equal(formSpec.title, '不動産投資家向け 買いニーズヒアリングフォーム');
  assert.equal(formSpec.sections.length, 8);
});

test('form covers core investor needs', () => {
  const titles = getAllQuestions().map((question) => question.title);
  const requiredTopics = [
    '許容できる築年数',
    '最低希望表面利回り',
    '検討可能な広域エリア',
    '希望購入価格帯',
    '自己資金の目安',
    '融資の事前相談状況',
    '許容できるリスク・特殊条件',
    '絶対に避けたいNG条件'
  ];

  for (const topic of requiredTopics) {
    assert.ok(titles.includes(topic), `missing topic: ${topic}`);
  }
});

test('all selectable questions have choices', () => {
  const selectableQuestions = getAllQuestions().filter((question) => ['multipleChoice', 'checkbox'].includes(question.type));

  assert.ok(selectableQuestions.length > 0);
  for (const question of selectableQuestions) {
    assert.ok(Array.isArray(question.choices), `${question.title} should have choices`);
    assert.ok(question.choices.length >= 2, `${question.title} should have at least two choices`);
  }
});

test('there are enough questions to qualify investor needs', () => {
  const questions = getAllQuestions();
  assert.ok(questions.length >= 40, `expected at least 40 questions, got ${questions.length}`);
});

test('rank definitions exist', () => {
  assert.deepEqual(formSpec.ranks.map((rank) => rank.rank), ['Aランク', 'Bランク', 'Cランク', '特別対応']);
});
