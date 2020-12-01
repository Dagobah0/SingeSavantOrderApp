import MockAdapter from 'axios-mock-adapter';

export default function mock(api) {
    const mock = new MockAdapter(api);

    mock.onGet('/orders').reply(200, ordersData);
}

const ordersData = [
    { id: 1, name: "Order 1" },
    { id: 2, name: "Order 2" }
]