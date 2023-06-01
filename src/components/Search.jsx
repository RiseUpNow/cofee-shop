import { TextField } from "@material-ui/core";

const Search = (props) => {
    const { onChange, value } = props;

    return <TextField
        label='Поиск по названию'
        variant="standard"
        fullWidth
        type='search'
        value={value}
        onChange={onChange}
        style={{
            marginBottom:"1.5rem"
        }}
    />;
};

export default Search;