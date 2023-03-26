import './page/member-create';
import './page/member-list';
import './view/member-base';
import './component/member-table';
import './component/member-row';

const { Module } = Shopware;
Module.register('team-member', {
    type: 'core',
    name: 'Team Members',
    title: 'team-member.general.list',
    description: 'Add Members',
    color: '#824bb3',
    icon: 'regular-users',
    routes: {
        index: {
            path: 'overview',
            component: 'member-base'
        },
        list: {
            components: "member-list",
            path: 'list'
        }
    },
    // },
    navigation: [{
        id: 'derichs-team-members',
        label: 'team-member.general.members',
        color: '#824bb3',
        icon: 'regular-users',
        position: 100
    },{
        path: 'team.member.index',
        label: 'team-member.general.memberList',
        color: '#F88962',
        parent: 'derichs-team-members'
    }
    // ,{
    //     path: 'team.member.list',
    //     label: 'team-member.general.memberList',
    //     color: '#F88962',
    //     parent: 'derichs-team-members'
    // }
    ]
});