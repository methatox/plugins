import template from './sw-cms-block-team-member.html.twig';
import './sw-cms-block-team-member.scss';

const { Component } = Shopware;

/**
 * @private since v6.5.0
 * @package content
 */
Component.register('sw-cms-block-team-member', {
    template,
});
