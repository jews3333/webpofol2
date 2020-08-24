import { connect } from 'react-redux';
import Portfolio from '../components/Portfolio';
import getPortfolio from '../modules/getPortfolio';

const mapStateToProps = (state) => ({
    portfolio: state.portfolioData.portfolio,
    sidebar: state.sidebarState.sidebar
});

const mapDispatchToProps = (dispatch) => ({
    onPortfolio: () => getPortfolio(dispatch)
});

const PortfolioContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Portfolio);

export default PortfolioContainer;