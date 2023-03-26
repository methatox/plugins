import template from './sw-cms-preview-team-member.html.twig';
import './sw-cms-preview-team-member.scss';

const { Component } = Shopware;

/**
 * @private since v6.5.0
 * @package content
 */
Component.register('sw-cms-preview-team-member', {
    template,
});
