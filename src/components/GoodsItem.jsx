import { Card, CardContent, CardMedia, Grid, Typography } from "@material-ui/core";


const GoodsItem = (props) => {
    const { blend_name, origin, notes } = props;
    return (
        <Grid item xs={12} md={6} lg={4}>
            <Card
                style={{
                    maxWidth: '400px',
                    minHeight:'450px',
                    margin: '0px auto',
                    textAlign:'center'
                }}
            >
                <CardMedia
                    image={'https://images.unsplash.com/photo-1595434091143-b375ced5fe5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'}
                    component="img"
                    alt={blend_name}
                    title={blend_name}
                    style={{ width:'200px',margin: '20px auto 0 auto',borderRadius: '6px' }}
                />
                <CardContent>
                    <Typography
                        variant="h6"
                        component="h3"
                    >
                        Название: {blend_name}
                    </Typography>
                    <Typography variant="body1">Происхождение: {origin} </Typography>
                    <Typography variant="body2">Теги: {notes}</Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default GoodsItem;