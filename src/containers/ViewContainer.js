import { connect } from 'react-redux';
import View from '../components/View';
import getPortfolio from '../modules/getPortfolio';

const mapStateToProps = (state) => ({
    portfolio: state.portfolioData.portfolio,
    sidebar: state.sidebarState.sidebar
});

const mapDispatchToProps = (dispatch) => ({
    onPortfolio: () => getPortfolio(dispatch)
});

const ViewContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(View);

export default ViewContainer;