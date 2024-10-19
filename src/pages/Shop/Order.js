import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Hàm để fetch dữ liệu đơn hàng từ API
    const fetchOrders = async () => {
        try {
            const response = await axios.get('https://scs-api.arisavinh.dev/api/v1/order');
            setOrders(response.data); // Giả định response.data chứa danh sách đơn hàng
        } catch (err) {
            setError(err.message); // Lưu lại lỗi nếu có
        } finally {
            setLoading(false); // Đặt loading thành false sau khi fetch hoàn tất
        }
    };

    useEffect(() => {
        fetchOrders(); // Gọi hàm fetchOrders khi component được mount
    }, []);

    // Hiển thị loading, lỗi hoặc danh sách đơn hàng
    if (loading) return <div>Đang tải...</div>;
    if (error) return <div>Có lỗi xảy ra: {error}</div>;

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Danh sách Đơn hàng</h2>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="border-b px-4 py-2">ID Đơn hàng</th>
                        <th className="border-b px-4 py-2">Khách hàng</th>
                        <th className="border-b px-4 py-2">Trạng thái</th>
                        <th className="border-b px-4 py-2">Tổng tiền</th>
                        <th className="border-b px-4 py-2">Ngày đặt</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td className="border-b px-4 py-2">{order.id}</td>
                            <td className="border-b px-4 py-2">{order.customerName}</td>
                            <td className="border-b px-4 py-2">{order.status}</td>
                            <td className="border-b px-4 py-2">{order.totalAmount}</td>
                            <td className="border-b px-4 py-2">{new Date(order.orderDate).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Order;
