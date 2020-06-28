import React from 'react';

class Portfolio extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.onPortfolio()
    }

    render(){

        const { portfolio } = this.props;

        return (
            <div>
                {   portfolio ?
                    portfolio.map((list,index) => {
                        return <div key={index}>
                            <p>{list.title}</p>
                        </div>
                    })
                    : null
                }
            </div>
        )
    }
}

export default Portfolio;