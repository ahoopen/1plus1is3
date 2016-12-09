import FlowCheck from '../views/page/flow-check/flow-check';

export default {
    LOGIN: {
        id: 1,
        path: '/inloggen',
        name: 'Inloggen',
        description: 'Bezorger moet inloggen om zijn rit op te halen',
        canReturnTo: false,
        loop: false,
        finished: true,
        component: FlowCheck
    },

    TOTAL_IN_VAN: {
        id: 2,
        path: '/totaal-in-bus',
        name: 'Totaal te bezorgen',
        description: 'Bezorger kan hier de inhoud van zijn bus controleren',
        canReturnTo: true,
        loop: false,
        finished: false,
        component: FlowCheck
    },

    DELIVERIES: {
        id: 3,
        path: '/ritten',
        name: 'Ritten overzicht',
        description: 'Een overzicht van alle adressen in zijn rit',
        canReturnTo: true,
        loop: true,
        finished: true,
        component: FlowCheck
    },

    DELIVERY_DETAIL: {
        id: 4,
        path: '/rit/:id',
        name: 'Bezorging detail',
        description: 'Informatie over het adres (foto, comments etc)',
        finished: true,
        canReturnTo: true,
        loop: true,
        component: FlowCheck
    },

    DELIVERY_ID_REQUIRED: {
        id: 5,
        path: '/rit/:id/legitimatie-verplicht',
        description: 'Bezorger moet legitimatie controleren',
        name: 'Nix18',
        finished: true,
        canReturnTo: false,
        loop: true,
        component: FlowCheck,
        condition() {
            return true;
        }
    },

    DELIVERY_WHAT_TO_GRAB: {
        id: 6,
        path: '/rit/:id/wat-te-pakken',
        name: 'Wat moet ik pakken',
        description: 'Een overzicht van de hoeveelheid kratten enz er de bezorger uit de bus moet halen.',
        finished: true,
        canReturnTo: true,
        loop: true,
        component: FlowCheck
    },

    DELIVERY_INVOICE: {
        id: 7,
        path: '/rit/:id/factuur',
        name: 'Order overzicht',
        description: 'Een overzicht van de order',
        finished: true,
        canReturnTo: true,
        loop: true,
        component: FlowCheck
    },

    DELIVERY_RETURN_PACKAGING: {
        id: 8,
        path: '/rit/:id/innemen-emballage',
        name: 'Innemen emballage',
        description: 'Innemen lege flessen etc.',
        finished: true,
        canReturnTo: true,
        loop: true,
        component: FlowCheck
    },

    DELIVERY_RETURN_GOODS: {
        id: 9,
        path: '/rit/:id/artikel-retouneren',
        name: 'Retourneren artikelen',
        description: 'Retourneren beschadigde goederen',
        finished: true,
        canReturnTo: true,
        loop: true,
        component: FlowCheck
    },

    DELIVERY_PAYMENT: {
        id: 10,
        path: '/rit/:id/afrekenen',
        name: 'Afrekenen',
        description: 'Kosten laten zien die moeten worden afgerekend door de klant.',
        finished: true,
        canReturnTo: true,
        loop: true,
        component: FlowCheck
    },
}
