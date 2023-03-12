// @ts-ignore
import { CoLang } from '../../lib/bundles/bundle';
import { getFieldEntriesTest } from './get-field-entries.test';
import { evaluateConditionTest } from './evaluate-field-tokens.test';
import { getFormatConditionTest } from './format-condition.test';

describe('Test bundle', () => {
  describe('Test bundle "getFieldEntries()" method', () => {
    const conditionLanguage = new CoLang();
    // @ts-ignore
    getFieldEntriesTest(conditionLanguage);
  })

  describe('Test bundle "evaluateCondition()" method', () => {
    const conditionLanguage = new CoLang();
    // @ts-ignore
    evaluateConditionTest(conditionLanguage);
  })

  describe('Test bundle "formatCondition" method', () => {
    const conditionLanguage = new CoLang();
    // @ts-ignore
    getFormatConditionTest(conditionLanguage);
  })
})
