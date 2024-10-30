import { NavLink } from "react-router-dom";

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

              <NavLink to="/books">
              <i className="fas fa-long-arrow-right arrow-style"></i>
              </NavLink>

            </div>
        </div>
    )
}

export default ListCard