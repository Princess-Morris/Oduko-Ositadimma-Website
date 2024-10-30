interface IListCard {
    title: string;
    // book: string;
}

function ListCard({ title }: IListCard) {
    return (
        <div className="list-card">
            <div className="left-side-list-card">
                <h1>{title}</h1>
            </div>

            <div className="right-side-list-card">
                
                <i className="fas fa-long-arrow-right arrow-style"></i>
            </div>
        </div>
    )
}

export default ListCard