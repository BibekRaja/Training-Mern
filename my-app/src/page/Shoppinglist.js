import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


function ShoppingList() {

    const [shopping_list, setShoppingList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // let temptitle = [...title]
        // let tempquentity = [...quentity]
        // temptitle.push(e.target.title.value)
        // temptitle.push(e.target.quentity.value)

        // tempquentity.push(e.target.quentity.value)
        // setTitle(temptitle)
        // setQuentity(tempquentity)

        let temp = [...shopping_list]
        temp.push(

            {
                id: uuidv4(),
                title: e.target.title.value,
                quantity: e.target.quantity.value
            }

        )
        setShoppingList(temp)





    }

    function remove(idx) {
        console.log("remove");
        let temp = [...shopping_list]
        temp = temp.filter((el, index) => idx != index)
        setShoppingList(temp)
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input placeholder='title' name="title" />
                    <input placeholder='quantity' name="quantity" />
                    <button >add</button>
                </form>
                <hr />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>




                    {/* {
                        [
                            { title: "apple", quantity: 10 },
                            { title: "samsung", quantity: 1001 }
                        ].map(item => {
                            return <tr>
                                <td>{item.title}</td>
                                <td>{item.quantity}</td>
                            </tr>

                        })
                    } */}


                    {
                        shopping_list.map((item, index) => {
                            return <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.quantity}</td>
                                <td><button onClick={() =>
                                    remove(index)}>delete</button></td>
                            </tr>

                        })
                    }



                    {/* <tr>
                        <td>Apple</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>Samsung</td>
                        <td>100</td>
                    </tr> */}
                </tbody>
            </table>
        </>
    )
}

export default ShoppingList