import template from './member-table.html.twig';
import './member-table.scss';

const { Component } = Shopware;

Component.register('member-table', {
    template,

    data() {
        return {
            members: null,
            sortBy: 'firstname',
            naturalSorting: true,
            sortDirection: 'DESC',
            isLoading: false,
            showDeleteModal: false,
            filterCriteria: [],
            activeFilterNumber: 0,
            searchConfigEntity: 'derichs_team_members',
            showBulkEditModal: false,
        };
    },

})