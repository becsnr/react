import Item from "./Item";

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Samsung" ano_lancamento={2022} />
                <Item marca="Apple" ano_lancamento={2023} />
                <Item marca="Asus" ano_lancamento={1950} />
                <Item />
            </ul>
        </>
    )
}

export default List;