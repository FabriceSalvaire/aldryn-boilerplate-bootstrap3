/*!
 * @author:    Divio AG
 * @copyright: http://www.divio.ch
 */

'use strict';
/* global describe, it, expect, browser */

// #############################################################################
// INTEGRATION TEST
var dummyPage = require('../pages/page.dummy.js');

describe('Django CMS website', function () {
    it('should have a title', function () {
        browser.get(dummyPage.site);

        expect(browser.getTitle()).toContain('django-cms');
    });
});
