import React from 'react'

function ShoppingList() {
    return (
        <>
            <div>
                <input placeholder='title' />
                <input placeholder='quantity' />
                <button>add</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Quantity</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default ShoppingList