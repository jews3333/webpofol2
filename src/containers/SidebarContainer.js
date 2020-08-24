import { connect } from 'react-redux';
import * as actions from '../actions';
import Sidebar from '../components/Sidebar';

const mapStateToProps = (state) => ({
    portfolio: state.portfolioData.portfolio,
    sidebar: state.sidebarState.sidebar
});

const mapDispatchToProps = (dispatch) => ({
    onSidebarShow: () => dispatch(actions.sidebarShow()),
    onSidebarHide: () => dispatch(actions.sidebarHide())
});

const SidebarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);

export default SidebarContainer;