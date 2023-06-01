import {Grid} from '@material-ui/core';

import GoodsItem from './GoodsItem';

const GoodsList = (props) => {
        return (
            <Grid container spacing={2}>
                {props.goods.map((item) => (
                    <GoodsItem key={item.id} {...item} />
                ))}
            </Grid>
        );
};

export default GoodsList;