import { useEffect, useState } from "react"
import { getAllCate } from "../../services/categories"
import { Link } from "react-router-dom"

const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        getAllCate().then(({ data }) => setCategories(data))
    }, [])
    return (
        <div className="mx-auto w-[1270px] flex space-x-10 justify-between">
            {categories?.map((categoty) => {
                return (
                    <div key={categoty._id} className="bg-white p-2 shadow rounded-2xl">
                        <Link to={`/categories/${categoty._id}`}>
                        <img className="w-14 h-14" src={categoty.image} />
                        </Link>
                    </div>
                )
            })}

        </div>
    )
}

export default Categories