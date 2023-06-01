import {useEffect, useState} from 'react';

import Header from './Header';
import GoodsList from './GoodsList';
import Search from './Search';

import { Container } from '@material-ui/core';

const App = () => {
    const [empty, setEmpty] = useState(false);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [searchedItems, setSearchedItems] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch("https://random-data-api.com/api/coffee/random_coffee?size=20")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                    setSearchedItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, [])

    const handleChange = (e) => {
        if (!e.target.value) {
            setSearchedItems(items);
            setSearch('');
            setEmpty(false);
            return;
        }

        setSearch(e.target.value);
        let filtered = items.filter((good) => {
            return good.blend_name.toLowerCase().includes(e.target.value.toLowerCase())});
        setSearchedItems(filtered);
        if(filtered.length===0){
            setEmpty(true);
        }
        else{
            setEmpty(false);
        }
    };

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <>
                <Header/>
                <Container
                    style={{
                        marginTop:'70px'
                    }}
                >
                    <Search
                        value={search}
                        onChange={handleChange}
                    />
                    {empty===true && <h5>По запросу {search} ничего не найдено :(</h5>}
                    <GoodsList
                        goods={searchedItems}
                    />
                </Container>
            </>
        );
    }
}

export default App;
