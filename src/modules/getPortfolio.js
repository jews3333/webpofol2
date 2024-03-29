
import * as actions from '../actions';
import { storage, database } from '../firebase/init';

const getPortfolio = (dispatch) => {
    database.ref("list").orderByChild("year").on("value", async (snapshot) => {
        const getList = snapshot.val();

        const promiseList = getList ? Object.keys(getList).map(async (id) => {
            let image = null;
            await storage.ref('portfolio').child(getList[id].image).getDownloadURL().then((url) => {
                image = url;
            }).catch((err) => {
                console.error(err);
            });
            return {
                id,
                ...getList[id],
                image
            }
        }) : [];

        const portfolioList = new Array();

        if(promiseList){

            for(let i=0; i<promiseList.length; i++){
                await Promise.resolve(promiseList[i]).then((response) => {
                    portfolioList.push(response);
                }).catch((err) => {
                    console.error(err);
                })
            }
            
            portfolioList.reverse();

        }

        await dispatch(actions.portfolio(portfolioList));
    });
}

export default getPortfolio;