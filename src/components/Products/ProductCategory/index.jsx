import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCate } from "../../../services/categories"

const ProductCategory = () => {
    const [productsCate, setProductsCate] = useState([])
    const { id } = useParams()
    useEffect(() => {
        getCate(id).then(({ data }) => setProductsCate(data))
    }, [])
    return (
        <div>

            return (
            <>
                <h1>{productsCate?.products?.map((item) => {
                    return (
                        <div key={item._id}>
                            <h1 >{item.name}
                            </h1>
                        </div>
                    )
                })}</h1>

            </>
            )

        </div>

    )
}

export default ProductCategory