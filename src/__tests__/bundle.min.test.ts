// @ts-ignore
import { CoLang } from '../../lib/bundles/bundle.min';
import { getFieldEntriesTest } from './get-field-entries.test';
import { evaluateConditionTest } from './evaluate-field-tokens.test';
import { getFormatConditionTest } from './format-condition.test';

describe('Test bundle.min', () => {
  describe('Test bundle.min "getFieldEntries()" method', () => {
    const conditionLanguage = new CoLang();
    // @ts-ignore
    getFieldEntriesTest(conditionLanguage);
  })

  describe('Test bundle.min "evaluateCondition()" method', () => {
    const conditionLanguage = new CoLang();
    // @ts-ignore
    evaluateConditionTest(conditionLanguage);
  })

  describe('Test bundle.min "formatCondition" method', () => {
    const conditionLanguage = new CoLang();
    // @ts-ignore
    getFormatConditionTest(conditionLanguage);
  })
})
