import "./styles.css"
import Filter from "../Filter";
import Listing from "../Listing";

export default function ListingBody() {
    return (
        <>
            <main className="dsf-container">
                <div className="dsf-listing-body">
                    <Filter />
                    <Listing />
                </div>
            </main>
        </>
    )
}