import './page/members';


const { Module } = Shopware;
Module.register('team-member', {
    type: 'plugin',
    name: 'Team Members',
    title: 'Custom Team Members',
    description: 'Add Members',
    color: '#824bb3',
    icon: 'regular-users',
    routes: {
        teammembers: {
            component: 'team-member-list',
            path: 'members'
        }
    },
    // },
    navigation: [{
        id: 'derichs-team-members',
        label: 'Teammember',
        color: '#824bb3',
        path: 'members',
        icon: 'default-shopping-paper-bag-product',
        parent: 'sw-my-apps',
        position: 50
    }]
});