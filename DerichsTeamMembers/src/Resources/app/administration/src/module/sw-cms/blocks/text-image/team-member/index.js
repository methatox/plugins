import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'team-member',
    category: 'text-image',
    label: 'Displays a Teammember',
    component: 'sw-cms-block-team-member',
    previewComponent: 'sw-cms-preview-team-member',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        left: 'image',
        right: 'text'
    }
});