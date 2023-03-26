import template from './member-row.html.twig';
import './member-row.scss';

const { Component } = Shopware;

Component.register('member-row', {
    template,

    props: {
        member: {
            type: Object,
            required: true,
            default: []
        }
    }

})