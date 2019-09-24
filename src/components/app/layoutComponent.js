import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FooterComponent from '../../components/app/footerComponent';
import BottomModalWrapper from '../../components/modal/bottomModalWrapper';

// import HeaderComponent from './headerComponent';

import VirtualKeyboard from '../virtualKeyboard/virtualKeyboard';
import P2PFrame from '../p2pFrame/p2pFrame';
import PFMProfileNotificationBar from '../pfm/PFMProfileNotificationBar';
import ModalWrapper from '../modal/modalWrapper';
import PopupComponent from '../popup/popupComponent';
import LayoutConstants from '../../constants/layoutConstants';
import MenuSelectors from '../../selectors/menuSelectors';
import CssUtils from '../../utils/cssUtils';
import Device from '../../services/device';
import OverflowScrolling from './overflowScrolling';

class LayoutComponent extends React.Component {
    render() {
        const { app, children, currentRoute, bottomModal } = this.props;
        if (!children) return null;

        const pageType = currentRoute && currentRoute.type;
        const pageClass =
            currentRoute && currentRoute.pageClass
                ? `bss-wrapper ${currentRoute.pageClass}`
                : 'bss-wrapper';

        const bssClass = CssUtils.mergeModifiers('bss', [Device.isIphoneX() && 'iphone-x']);

        const contentWrapperClass = CssUtils.mergeModifiers('bss-content-wrapper', [
            (app.appScrollBlock || bottomModal.isOpen) && 'blocked',
        ]);

        switch (pageType) {
            case LayoutConstants.LOGIN:
                return (
                    <div className={bssClass}>
                        <div className="bss-inner">
                            <div className={pageClass}>{children}</div>
                            <FooterComponent />
                            <VirtualKeyboard />
                            <P2PFrame />
                        </div>
                        <PopupComponent />
                        <BottomModalWrapper />
                    </div>
                );
            case LayoutConstants.MAIN_PAGE: {
                return (
                    <div className={bssClass}>
                        <div className="bss-inner">
                            <OverflowScrolling className="overflow-scrolling">
                                <div className={contentWrapperClass} id="bss-content-wrapper">
                                    {children}
                                </div>
                            </OverflowScrolling>
                        </div>
                        <FooterComponent />
                        <ModalWrapper />
                        <VirtualKeyboard />
                        <P2PFrame />
                        <PFMProfileNotificationBar />
                        <PopupComponent />
                        <BottomModalWrapper />
                    </div>
                );
            }
            case LayoutConstants.CHAT:
                return (
                    <div className={bssClass}>
                        <div className="bss-inner">
                            <div className={contentWrapperClass}>{children}</div>
                        </div>
                        <PopupComponent />
                        <BottomModalWrapper />
                    </div>
                );
            case LayoutConstants.EMPTY:
                return (
                    <div className={bssClass}>
                        <div className="bss-inner">
                            <OverflowScrolling className="overflow-scrolling">
                                <div className={contentWrapperClass}>{children}</div>
                            </OverflowScrolling>
                        </div>
                        <VirtualKeyboard />
                        <P2PFrame />
                        <PopupComponent />
                        <BottomModalWrapper />
                    </div>
                );
            case LayoutConstants.APP_COMPONENTS:
                return <div className={pageClass}>{children}</div>;
            case LayoutConstants.LEFT_MENU: {
                return (
                    <div className={pageClass}>
                        <div className={bssClass}>
                            <div className="bss-inner">
                                <OverflowScrolling className="overflow-scrolling">
                                    <div className={contentWrapperClass}>{children}</div>
                                </OverflowScrolling>
                            </div>
                            <ModalWrapper />
                            <VirtualKeyboard />
                            <P2PFrame />
                            <PFMProfileNotificationBar />
                        </div>
                        <PopupComponent />
                        <BottomModalWrapper />
                    </div>
                );
            }
            default:
                return (
                    <div className={bssClass}>
                        <div className="bss-inner">
                            <div className={pageClass}>
                                <OverflowScrolling className="overflow-scrolling">
                                    <div className={contentWrapperClass} id="bss-content-wrapper">
                                        {children}
                                    </div>
                                </OverflowScrolling>
                            </div>
                            <ModalWrapper />
                            <VirtualKeyboard />
                            <P2PFrame />
                            <PFMProfileNotificationBar />
                        </div>
                        <PopupComponent />
                        <BottomModalWrapper />
                    </div>
                );
        }
    }
}

function mapStateToProps(state) {
    return {
        app: state.app,
        deviceKeyboard: state.deviceKeyboard,
        currentRoute: MenuSelectors.currentRoute(state),
        bottomModal: state.bottomModal,
    };
}

export default withRouter(connect(mapStateToProps)(LayoutComponent));
