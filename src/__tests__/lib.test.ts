// @ts-ignore
import { CoLang } from '../../lib';
import { getFieldEntriesTest } from './get-field-entries.test';
import { evaluateConditionTest } from './evaluate-field-tokens.test';
import { getFormatConditionTest } from './format-condition.test';

describe('Test lib', () => {
  describe('Test lib "getFieldEntries()" method', () => {
    const conditionLanguage = new CoLang();
    getFieldEntriesTest(conditionLanguage);
  })

  describe('Test lib "evaluateCondition()" method', () => {
    const conditionLanguage = new CoLang();
    evaluateConditionTest(conditionLanguage);
  })

  describe('Test lib "formatCondition" method', () => {
    const conditionLanguage = new CoLang();
    getFormatConditionTest(conditionLanguage);
  })
})
