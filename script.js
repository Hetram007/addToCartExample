const cartEl = document.getElementById('cart')
const goToCartBtnEl = document.getElementById('goToCartBtn')

let total = 0

const addToCard = (price) => {
    total += price
    cartEl.innerHTML = `
        <div>
            <h5>subTotal: ${total}</h5>
            <h5>Gst: ${parseInt(total * 0.18)}</h5>
            <h5>Total: ${total + parseInt(total * 0.18)}</h5>
        </div>
    `
}

goToCartBtnEl.addEventListener('click', () => {
    const currentDisplay = cartEl.style.display
    cartEl.style.display = currentDisplay === 'flex' ? 'none' : 'flex'
    cartEl.innerHTML = `
        <div>
            <h5>subTotal: ${total}</h5>
            <h5>Gst: ${parseInt(total * 0.18)}</h5>
            <h5>Total: ${total + parseInt(total * 0.18)}</h5>
        </div>
    `
})