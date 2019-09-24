import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import { StateKey } from './configs/dataConfig';

import userConstants from './constants/userConstants';

import dataReducer from './reducers/dataReducer';


const form = formReducer.plugin({
    AccountClosePage: accountCloseReducer.form,
    AccountRequestPage: accountRequestReducer.form,
    AttachCardForm: attachCardReducer.form,
    CardBlockUnblockPage: cardBlockUnblockReducer.form,
    CardChangeAccountPage: cardChangeAccountReducer.form,
    CardChangePinPage: cardChangePinReducer.form,
    CardOverdraft: cardOverdraftReducer.form,
    CardReissuePage: cardReissueReducer.form,
    CardRejectPage: cardRejectReducer.form,
    CardRequestPage: cardRequestReducer.form,
    CardSetRestrictionPage: cardRestrictionsReducer.form,
    ConfirmationLoginForm: confirmationLoginReducer,
    ConfirmationMobileMobiPassForm: confirmationMobileMobiPassReducer,
    ConfirmationSmsForm: confirmationSmsReducer,
    ConfirmationValidateForm: confirmationValidateReducer,
    CreditCalcForm: creditCalcFormReducer,
    CreditEarlyRepaymentForm: creditEarlyRepaymentReducer.form,
    CreditRepaymentForm: creditRepaymentReducer.form,
    DepositClosePage: depositCloseReducer.form,
    DepositRequestPage: depositRequestReducer.form,
    LinkPhonePage: phoneLinkReducer.form,
    OpenNewCreditRequestPage: openNewCreditReducer.form,
    PaymentBudgetPage: paymentBudgetReducer.form,
    PaymentCurrencyPage: paymentCurrencyReducer,
    PaymentForeignPage: paymentForeignReducer.form,
    PaymentIndividualPage: paymentIndividualReducer.form,
    PaymentLegalPage: paymentLegalReducer.form,
    PaymentMyselfPage: paymentMyselfReducer.form,
    PaymentP2PPage: paymentP2PReducer,
    PaymentPhonePage: paymentPhoneReducer.form,
    PaymentPrivatePage: paymentPrivateReducer.form,
    ClientRegistration: registrationReducer.form,
    NotClientRegistration: registrationReducer.form,
    TransactionsPage: transactionsFormReducer,
    UserInfoPage: userInfoChangeReducer.form,
    WriteMailModalForm: writeMailReducer,
    CardSmsInformation: cardSmsInfromationReducer.form,
    CardLimitsForm: cardLimitsReducer.form,
    ChargesTaxesIpSearchForm: chargesTaxesIpReducer.form,
    ScheduleEditForm: scheduleDetailReducer.form,
    PeriodicPaymentForm: periodicPaymentReducer.form,
    subscriptionForm: userActivitiesReducer.form,
});

const applicationReducer = combineReducers({
    [StateKey]: dataReducer,
    picker: pickerReducer,
    accordion: accordionReducer,
    footer: footerReducer,
    syntheticRouting: syntheticRouterReducer,
    routing: routerReducer,
    menu: menuReducer,
    appComponents: appComponentsReducer.state,
    components: combineReducers({
        foreignBanks: foreignBanksReducer,
    }),
    appLoader: appLoaderReducer,
    notifications: notificationsReducer,
    pushNotifications: pushNotificationsReducer,
    accounts: combineReducers({
        transactions: accountsReducer.transactions,
        updateDisabledTimer: accountsReducer.updateDisabledTimer,
        refreshButtonIsPushed: accountsReducer.refreshButtonIsPushed,
        isFetching: accountsReducer.isFetching,
        accountClose: accountCloseReducer.accountClose,
        accountRequest: accountRequestReducer.accountRequest,
    }),
    bannersInfo: bannerReducer,
    captcha: captchaReducer,
    cards: combineReducers({
        transactions: cardsReducer.transactions,
        serviceOperations: cardsReducer.serviceOperations,
        overdraft: cardOverdraftReducer.overdraft,
        limits: cardLimitsReducer.limits,
        cardActivate: cardActivateReducer.cardActivate,
        cardRequest: cardRequestReducer.cardRequest,
        cardBlockUnblock: cardBlockUnblockReducer.cardBlockUnblock,
        cardKinds: cardsReducer.kinds,
        cardVendors: cardsReducer.vendors,
        cardChangeAccount: cardChangeAccountReducer.cardChangeAccount,
        cardChangePin: cardChangePinReducer.cardChangePin,
        cardReissue: cardReissueReducer.cardReissue,
        cardReject: cardRejectReducer.cardReject,
        setRestrictions: cardRestrictionsReducer.setRestrictions,
        updateDisabledTimer: cardsReducer.updateDisabledTimer,
        refreshButtonIsPushed: cardsReducer.refreshButtonIsPushed,
        isFetching: cardsReducer.isFetching,
        smsInformation: cardSmsInfromationReducer.page,
    }),
    confirmation: confirmationReducer,
    credits: combineReducers({
        schedule: creditsScheduleReducer,
        earlyRepayment: creditEarlyRepaymentReducer.state,
        repayment: creditRepaymentReducer.state,
        openNewCredit: openNewCreditReducer.page,
        creditCalc: creditCalcReducer,
        updateDisabledTimer: creditsReducer.updateDisabledTimer,
        refreshButtonIsPushed: creditsReducer.refreshButtonIsPushed,
        isFetching: creditsReducer.isFetching,
    }),
    deposits: combineReducers({
        transactions: depositsReducer.transactions,
        depositModal: depositsReducer.depositModal,
        depositClose: depositCloseReducer.depositClose,
        depositCalc: depositCalcReducer,
        updateDisabledTimer: depositsReducer.updateDisabledTimer,
        refreshButtonIsPushed: depositsReducer.refreshButtonIsPushed,
        isFetching: depositsReducer.isFetching,
    }),
    marks: combineReducers({
        list: marksReducer.list,
    }),
    payments: combineReducers({
        paymentMyself: paymentMyselfReducer.page,
        paymentPhone: paymentPhoneReducer.page,
        paymentForeign: paymentForeignReducer.page,
        paymentPrivate: paymentPrivateReducer.page,
        paymentIndividual: paymentIndividualReducer.page,
        paymentLegal: paymentLegalReducer.page,
        paymentBudget: paymentBudgetReducer.page,
    }),
    schedules: combineReducers({
        detail: scheduleDetailReducer.page,
    }),
    mailDetails: mailDetailsReducer,
    miniStatement: miniStatementReducer,
    modal: modalReducer,
    bottomModal: bottomModalReducer,
    modalMenu: modalMenuReducer,
    news: newsReducer,
    productVisibility: productVisibilityReducer,
    history: combineReducers(historyReducer),
    productHistory: combineReducers(productHistoryReducer),
    slider: sliderReducer,
    transactions: transactionsReducer,

    payment: paymentReducer,
    form,

    fields: dynamicFieldsReducer,
    charges: combineReducers({
        UIN: chargesUinReducer,
        IP: combineReducers({
            fines: chargesFinesIpReducer,
            taxes: chargesTaxesIpReducer.page,
            housing: chargesHousingReducer,
        }),
    }),
    GISGMPConfigurations: GISGMPConfigurationsReducer,
    recoveryPassword: recoveryPasswordReducer,
    registration: registrationReducer.state,
    registrationQuestionnaire: registrationQuestionnaireReducer,
    attachments: attachmentsReducer,

    paymentCalendar: paymentCalendarReducer,
    fastPayment: fastPaymentReducer,

    invoicing: invoicingReducer,

    periodicPayment: periodicPaymentReducer.periodicPayment,
    p2pFrame: p2pFrameReducer,
    c2aFrame: c2aFrameReducer,
    virtualKeyboard: virtualKeyboardReducer,
    deviceKeyboard: deviceKeyboardReducer,
    leftInternalMenu: leftInternalMenuReducer,
    points: combineReducers({
        params: pointsReducer.paramsReducer,
        searchBlock: pointsReducer.searchReducer,
    }),
    app: appReducer,
    userInfoChange: userInfoChangeReducer.state,
    PFM: PFMReducer,
    livetex: liveTexReducer,
    personalOffer: personalOfferReducer,
    easyAuth: easyAuthReducer,
    userActivities: userActivitiesReducer.page,
    services: servicesReducer,
    omni: omniConfiguration,
    PIN: PINReducer,
    servicePayment: servicePaymentReducer,
    locale: localeReducer,
    popup: popupReducer,
    contacts: contactsReducer,
    mainBalance: mainBalanceReducer,
    inquiries: inquiriesReducer.page,
    bankServiceDetails: bankServicesReducer,
    offer: offerReducer,
});

const rootReducer = (state, action) => {
    if (
        action.type === userConstants.USER_SIGN_OUT &&
        state.app.userIsAuthorized !== null &&
        !state.app.userLoggedOut
    ) {
        state = {
            appLoader: state.appLoader,
            routing: state.routing,
        };
    }

    return omniReducer(applicationReducer(state, action), action);
};

export default rootReducer;
