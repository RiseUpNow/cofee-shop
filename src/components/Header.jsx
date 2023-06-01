import { AppBar, Toolbar, Typography } from "@material-ui/core"

function Header() {
    return (
        <AppBar position="fixed" color="default">
            <Toolbar>
                <Typography
                    variant="h6"
                    component="span"
                >
                    Наш суперкофе
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header
